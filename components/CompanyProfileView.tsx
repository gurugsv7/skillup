
import React from 'react';
import { Company, AppView } from '../types';

interface Props {
  company: Company;
  onAction: (view: AppView) => void;
  onBack: () => void;
}

const CompanyProfileView: React.FC<Props> = ({ company, onAction, onBack }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar">
      <header className="p-6 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="w-20 h-20 bg-white rounded-3xl p-4 shadow-xl border border-white/10">
            <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
          </div>
          <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 relative z-10">{company.name}</h1>
        <p className="text-sm font-mono text-neon-cyan tracking-widest uppercase mb-6 relative z-10">Get Ready for {company.name}</p>
        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10">
          SHOW JOBS
        </button>
      </header>

      <div className="px-6 space-y-10 pb-32">
        <section>
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">About</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-mono">
            {company.about}
          </p>
        </section>

        <section className="glass-panel p-5 rounded-2xl">
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Hiring Steps</h3>
          <div className="relative space-y-6 pl-4 border-l border-white/5">
            {company.timeline.map((t, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,91,236,1)]"></div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white uppercase">{t.step}</span>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{t.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => onAction(AppView.GUIDE)}
            className="flex items-center gap-4 p-5 glass-panel rounded-2xl text-left border-l-4 border-l-neon-cyan group"
          >
            <span className="material-symbols-outlined text-4xl text-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity">description</span>
            <div>
              <h4 className="font-bold text-white">How to Apply</h4>
              <p className="text-[10px] text-gray-500 font-mono">Resume help and steps</p>
            </div>
          </button>
          
          <button 
            onClick={() => onAction(AppView.INTERVIEW_PREP)}
            className="flex items-center gap-4 p-5 glass-panel rounded-2xl text-left border-l-4 border-l-neon-violet group"
          >
            <span className="material-symbols-outlined text-4xl text-neon-violet opacity-50 group-hover:opacity-100 transition-opacity">terminal</span>
            <div>
              <h4 className="font-bold text-white">Interview Help</h4>
              <p className="text-[10px] text-gray-500 font-mono">Questions and practice</p>
            </div>
          </button>

          <button 
            onClick={() => onAction(AppView.SUCCESS_STORIES)}
            className="flex items-center gap-4 p-5 glass-panel rounded-2xl text-left border-l-4 border-l-neon-amber group"
          >
            <span className="material-symbols-outlined text-4xl text-neon-amber opacity-50 group-hover:opacity-100 transition-opacity">auto_awesome</span>
            <div>
              <h4 className="font-bold text-white">Member Stories</h4>
              <p className="text-[10px] text-gray-500 font-mono">Real hiring experiences</p>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
};

export default CompanyProfileView;
