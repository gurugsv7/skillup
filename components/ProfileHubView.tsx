
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { AppView } from '../types';

interface Props {
  onSelectModule: (mod: AppView) => void;
  onBack: () => void;
}

const ProfileHubView: React.FC<Props> = ({ onSelectModule, onBack }) => {
  const { user, selectedRole, selectedCompany } = useAppContext();

  return (
    <div className="flex-1 h-full flex flex-col p-6 pt-4 overflow-y-auto no-scrollbar relative pb-32">
      <header className="mb-8 shrink-0">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative w-20 h-20 flex-shrink-0">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse-glow"></div>
            <div className="relative w-full h-full rounded-2xl bg-black/40 border border-neon-cyan/50 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <span className="text-3xl font-bold font-display text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{user?.email?.[0]?.toUpperCase() || '👤'}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-neon-cyan tracking-wider">ACTIVE</span>
            </div>
            <h1 className="text-xl font-bold text-white leading-tight">
              {selectedRole ? `Preparing for ${selectedRole}` : 'Your Career Path'}
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Starts Here</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="mb-10 relative py-6 flex flex-col items-center justify-center border-y border-white/5 bg-white/2 overflow-hidden min-h-[200px] shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,91,236,0.1),transparent_70%)] animate-data-stream"></div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(19,91,236,0.4)] mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">trending_up</span>
          </div>
          <p className="text-sm text-gray-400 font-mono">{selectedCompany ? `Getting ready for ${selectedCompany.name}` : 'Browse companies and roles'}</p>
        </div>
      </section>

      <section className="space-y-6 shrink-0">
        <h2 className="text-sm font-mono text-white tracking-widest border-l-2 border-neon-cyan pl-3 mb-6 uppercase">Modules</h2>
        <button onClick={() => onSelectModule(AppView.GUIDE)} className="w-full iso-card border-neon-cyan/30 p-5 rounded-2xl group cursor-pointer hover:-translate-y-1 text-left transition-all active:scale-[0.98]">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-neon-cyan text-2xl">description</span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">How to Apply</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">Resume tips & application strategies</p>
            </div>
          </div>
        </button>
        <button onClick={() => onSelectModule(AppView.INTERVIEW_PREP)} className="w-full iso-card border-neon-violet/30 p-5 rounded-2xl group cursor-pointer hover:-translate-y-1 text-left transition-all active:scale-[0.98]">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-neon-violet text-2xl">terminal</span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Interview Prep</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">Practice questions & mock interviews</p>
            </div>
          </div>
        </button>
        <button onClick={() => onSelectModule(AppView.SUCCESS_STORIES)} className="w-full iso-card border-neon-amber/30 p-5 rounded-2xl group cursor-pointer hover:-translate-y-1 text-left transition-all active:scale-[0.98]">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-neon-amber text-2xl">auto_awesome</span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Success Stories</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">Learn from hiring experiences</p>
            </div>
          </div>
        </button>
      </section>

      <section className="mt-12 p-5 glass-panel rounded-2xl border border-green-500/20 bg-green-500/5 shrink-0">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-green-400 text-xl mt-0.5">check_circle</span>
          <div>
            <h3 className="font-bold text-green-400 mb-1 text-sm">Profile Complete</h3>
            <p className="text-xs text-gray-400 font-mono">You're all set! Ready to explore opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileHubView;
