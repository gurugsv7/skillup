type ChatRole = 'user' | 'assistant' | 'system';

interface Message {
  role: ChatRole;
  content: string;
}

interface AzureChatCompletionChoice {
  message?: {
    content?: string;
  };
  delta?: {
    content?: string;
  };
}

interface AzureChatCompletionResponse {
  choices?: AzureChatCompletionChoice[];
  error?: {
    message?: string;
  };
}

const endpoint = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const apiKey = import.meta.env.VITE_AZURE_OPENAI_API_KEY;
const deployment = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT || 'gpt-5.2-chat';
const apiVersion = import.meta.env.VITE_AZURE_OPENAI_API_VERSION || '2024-12-01-preview';
const temperature = 1;
const maxCompletionTokens = 1000;

if (!endpoint || !apiKey) {
  throw new Error('Azure OpenAI credentials not configured in environment variables');
}

const SYSTEM_PROMPT = `You are s4skillup Assistant, an AI career mentor helping professionals advance their careers.
Your expertise covers:
- Resume optimization and tailoring
- Interview preparation (STAR method, technical & behavioral)
- Salary negotiation strategies
- Career path planning and role selection
- Skill development roadmaps
- Company research and job search strategies

Guidelines:
1. Stay focused on career development topics aligned with s4skillup's mission
2. Provide actionable, practical advice
3. Consider the Indian job market context (mention companies like TCS, Infosys, Microsoft, Amazon, Google when relevant)
4. Be encouraging and professional
5. If a question is outside your scope, politely redirect to career topics
6. Keep responses concise but informative`;

function buildMessages(userMessage: string, conversationHistory: Message[] = []): Message[] {
  return [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory,
    { role: 'user', content: userMessage },
  ];
}

function getChatCompletionsUrl(stream = false) {
  const baseUrl = endpoint.replace(/\/+$/, '');
  const suffix = stream ? '&stream=true' : '';
  return `${baseUrl}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}${suffix}`;
}

async function postChatCompletion(messages: Message[], stream = false) {
  const response = await fetch(getChatCompletionsUrl(stream), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      messages,
      max_completion_tokens: maxCompletionTokens,
      temperature,
      stream,
    }),
  });

  if (!response.ok) {
    let errorMessage = `Azure OpenAI request failed with status ${response.status}`;
    try {
      const errorBody = (await response.json()) as AzureChatCompletionResponse;
      errorMessage = errorBody.error?.message || errorMessage;
    } catch {
      // Ignore JSON parsing issues and fall back to the status-based message.
    }
    throw new Error(errorMessage);
  }

  return response;
}

export async function getChatResponse(
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    const response = await postChatCompletion(buildMessages(userMessage, conversationHistory));
    const data = (await response.json()) as AzureChatCompletionResponse;

    return (
      data.choices?.[0]?.message?.content?.trim() ||
      "I apologize, I couldn't generate a response. Please try again."
    );
  } catch (error) {
    console.error('Azure OpenAI API Error:', error);
    throw new Error(
      `Failed to get AI response: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

export async function* streamChatResponse(
  userMessage: string,
  conversationHistory: Message[] = []
): AsyncGenerator<string> {
  try {
    const response = await postChatCompletion(buildMessages(userMessage, conversationHistory), true);

    if (!response.body) {
      const fullResponse = await getChatResponse(userMessage, conversationHistory);
      yield fullResponse;
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;

        const payload = trimmed.slice(5).trim();
        if (payload === '[DONE]') {
          return;
        }

        try {
          const parsed = JSON.parse(payload) as AzureChatCompletionResponse;
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            yield delta;
          }
        } catch {
          // Ignore malformed chunks and keep streaming.
        }
      }
    }
  } catch (error) {
    console.error('Azure OpenAI Streaming Error:', error);
    throw new Error(
      `Failed to stream AI response: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
