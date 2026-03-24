
import React, { useState } from 'react';
import { ROLE_CATEGORIES } from '../constants';

interface Props {
  onSelectRole: (role: string) => void;
  onBack: () => void;
}

const RoleHubView: React.FC<Props> = ({ onSelectRole, onBack }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative min-h-0">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] right-[-10%] h-[70%] bg-[linear-gradient(to_right,#1f2f32_1px,transparent_1px),linear-gradient(to_bottom,#1f2f32_1px,transparent_1px)] bg-grid-perspective"></div>
      </div>

      <div className="p-6 pt-4 relative z-10 pb-32">
        <header className="mb-8 shrink-0">
          <h1 className="text-3xl font-bold leading-tight mb-2">
            Great! What role <br/>
            are you <span className="text-primary text-neon">targeting?</span>
          </h1>
          <div className="relative mt-8 group">
            <span className="material-symbols-outlined absolute left-0 top-2 text-primary/70">search</span>
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-primary/30 focus:border-primary text-white placeholder-slate-500 py-2 pl-8 outline-none transition-all duration-300" 
              placeholder="Search for roles (e.g., Python Developer)..." 
            />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(37,209,244,1)]"></div>
          </div>
        </header>

        <div className="mb-8 shrink-0">
          <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">Most Searched</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {['Full Stack', 'Data Scientist', 'Cyber Security', 'DevOps'].map(tag => (
              <button 
                key={tag}
                onClick={() => onSelectRole(tag)}
                className="flex-shrink-0 px-4 py-2 rounded-full border border-slate-700 bg-background-dark/50 text-slate-400 text-sm font-medium whitespace-nowrap hover:border-primary/30 hover:text-primary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col relative shrink-0">
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-4 -mx-6 px-6">
            {ROLE_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="shrink-0 w-[280px] h-[380px] glass-panel rounded-xl relative overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <span className="text-[80px] font-bold text-slate-800 leading-none select-none">{cat.id}</span>
                </div>
                <div className="p-6 h-full flex flex-col relative z-10">
                  <div className="h-24 w-24 mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${cat.color} rounded-lg transform rotate-45 opacity-20 blur-sm`}></div>
                    <div className={`absolute inset-2 bg-gradient-to-bl ${cat.color} rounded-lg transform rotate-12 flex items-center justify-center border border-white/10 shadow-lg`}>
                      <span className="material-symbols-outlined text-white text-4xl">{cat.icon}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">{cat.title}</h2>
                  <p className="text-xs text-primary mb-6">{cat.trending}</p>
                  <ul className="space-y-3 mt-auto">
                    {cat.roles.map(role => (
                      <li 
                        key={role}
                        onClick={() => onSelectRole(role)}
                        className="flex items-center text-slate-300 text-sm border-l-2 border-primary/30 pl-3 hover:text-white hover:border-primary transition-colors cursor-pointer group/item"
                      >
                        <span>{role}</span>
                        <span className="material-symbols-outlined text-[10px] ml-auto opacity-0 group-hover/item:opacity-100 text-primary">arrow_forward_ios</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleHubView;
