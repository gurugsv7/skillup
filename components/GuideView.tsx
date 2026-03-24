
import React from 'react';
import { Company } from '../types';

interface Props {
  company: Company;
  onBack: () => void;
}

const GuideView: React.FC<Props> = ({ company, onBack }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar">
      <header className="p-6 shrink-0 pt-4">
        <h1 className="text-3xl font-bold mb-1 text-white">Mastery Protocol</h1>
        <p className="text-xs text-gray-500 font-mono">How to apply for {company.name}</p>
      </header>

      <div className="px-6 space-y-10 pb-24">
        <section>
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">01 // Channels</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="glass-panel p-4 rounded-xl text-left hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-neon-cyan mb-2">language</span>
              <div className="text-[10px] font-bold text-white uppercase tracking-wider">Career Portal</div>
              <div className="text-[8px] text-gray-500 mt-1 font-mono">DIRECT_LINK</div>
            </button>
            <button className="glass-panel p-4 rounded-xl text-left hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-neon-violet mb-2">link</span>
              <div className="text-[10px] font-bold text-white uppercase tracking-wider">LinkedIn Hub</div>
              <div className="text-[8px] text-gray-500 mt-1 font-mono">NETWORKING</div>
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">02 // Resume Scan</h3>
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 animate-scan"></div>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-2xl font-mono font-bold text-neon-cyan">87%</div>
                <div className="text-[8px] text-gray-500 uppercase font-mono tracking-widest">Match Rating</div>
              </div>
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center border border-neon-cyan/20">
                <span className="material-symbols-outlined text-neon-cyan">analytics</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-gray-400 font-mono leading-relaxed">Include keywords: {company.stack.frontend.slice(0, 3).join(', ')}, Scalable Architecture.</p>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-red-400"></span>
                <span className="text-[10px] text-red-400 font-mono">Achievement metrics missing</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">03 // Referral Strategy</h3>
          <div className="space-y-4">
            <div className="glass-panel p-4 rounded-xl border-l-2 border-l-primary">
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">LinkedIn Message Template</h4>
              <p className="text-[10px] text-gray-500 font-mono leading-relaxed bg-black/40 p-3 rounded italic">
                "Hi [Name], I'm a developer deeply interested in {company.name}'s mission. I see you're working on [Project]..."
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <span className="material-symbols-outlined text-primary">group</span>
              <span className="text-[10px] font-mono text-primary font-bold tracking-widest">REFERRALS INCREASE CHANCES BY 40%</span>
            </div>
          </div>
        </section>

        <section className="bg-red-500/5 border border-red-500/20 p-5 rounded-2xl">
          <h3 className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-4">Mistakes to Avoid</h3>
          <ul className="space-y-2">
            {['Generic Resumes', 'Missing Deadlines', 'Poor Email Etiquette'].map(m => (
              <li key={m} className="text-xs text-red-400/80 font-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">block</span> {m}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GuideView;
