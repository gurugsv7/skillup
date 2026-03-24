
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Props {
  onBack: () => void;
}

const ChatView: React.FC<Props> = ({ onBack }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hello! I am your career catalyst. Ask me anything about job hunting, resume tuning, or tech interview preparation.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are DECODE AI, a high-level career consultant for tech professionals. Provide advice in a futuristic, tech-savvy tone.",
        }
      });
      
      const aiText = response.text || 'System error: Data stream interrupted.';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Connection failed.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-32 pt-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl font-mono text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary/20 border border-primary/30 text-white rounded-br-none' 
                : 'glass-panel text-gray-300 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="glass-panel p-4 rounded-2xl rounded-bl-none">
              <span className="animate-pulse text-neon-cyan font-mono text-xs tracking-widest">DECRYPTING...</span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-20 left-4 right-4 z-10">
        <div className="relative group">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Input query to AI..."
            className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-4 pr-16 outline-none focus:border-neon-cyan/50 backdrop-blur-xl text-white font-mono text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-lg bg-neon-cyan flex items-center justify-center text-black hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
