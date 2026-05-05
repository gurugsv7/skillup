
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  onBack: () => void;
}

const mockResponses: { [key: string]: string } = {
  resume: "A strong resume should have: 1) Clear formatting, 2) Quantified achievements, 3) Relevant keywords, 4) Action verbs. Try to keep it to 1 page if you have less than 5 years of experience.",
  interview: "For interviews: 1) Practice STAR method, 2) Research the company, 3) Prepare 3-5 project stories, 4) Mock with friends. Most interviews are 30-40% technical, 70% communication.",
  salary: "Salary negotiation tips: 1) Research market rates, 2) Get offer first, 3) Don't anchor too low, 4) Consider total package (bonus, stock, benefits), 5) Be professional.",
  role: "Choose a role based on: 1) Your interests, 2) Market demand, 3) Learning curve, 4) Salary expectations. Frontend/Backend are in high demand. DataScience requires strong math.",
  company: "Top companies to target: 1) TCS, 2) Infosys, 3) Microsoft, 4) Amazon, 5) Google. Each has different hiring processes. Research before applying.",
  default: "Great question! I'm here to help. Feel free to ask about resume tips, interview prep, salary negotiation, or career paths. How can I help?"
};

const getAIResponse = (query: string): string => {
  const lower = query.toLowerCase();
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lower.includes(key)) return response;
  }
  return mockResponses.default;
};

const ChatView: React.FC<Props> = ({ onBack }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hi! I\'m s4skillup Assistant. I can help you with resume tips, interview prep, salary negotiation, and career guidance. What can I help with?' }
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

    setTimeout(() => {
      const aiText = getAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
      setLoading(false);
    }, 800);
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
              <span className="animate-pulse text-neon-cyan font-mono text-xs tracking-widest">THINKING...</span>
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
