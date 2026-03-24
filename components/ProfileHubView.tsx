
import React from 'react';

interface Props {
  onSelectModule: (mod: string) => void;
  onBack: () => void;
}

const ProfileHubView: React.FC<Props> = ({ onSelectModule, onBack }) => {
  return (
    <div className="flex-1 h-full flex flex-col p-6 pt-4 overflow-y-auto no-scrollbar relative pb-32">
      <header className="mb-8 shrink-0">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative w-20 h-20 flex-shrink-0">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse-glow"></div>
            <div className="relative w-full h-full rounded-2xl bg-black/40 border border-neon-cyan/50 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <span className="text-3xl font-bold font-display text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">G</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-neon-cyan tracking-wider">SYSTEM ACTIVE</span>
            </div>
            <h1 className="text-xl font-bold text-white leading-tight">
              Preparing for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Senior Engineer</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="mb-10 relative py-6 flex flex-col items-center justify-center border-y border-white/5 bg-white/2 overflow-hidden min-h-[200px] shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,91,236,0.1),transparent_70%)] animate-data-stream"></div>
        <div className="relative z-10 w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(19,91,236,0.4)]">
          <span className="material-symbols-outlined text-3xl text-primary">memory</span>
        </div>
      </section>

      <section className="space-y-6 shrink-0">
        <h2 className="text-sm font-mono text-white tracking-widest border-l-2 border-neon-cyan pl-3 mb-6 uppercase">Module Selection</h2>
        <div onClick={() => onSelectModule('MOD_01')} className="iso-card border-neon-cyan/30 p-5 rounded-2xl group cursor-pointer hover:-translate-y-1">
          <h3 className="text-lg font-bold text-white mb-2 text-neon text-neon-cyan">Application Guidance</h3>
          <p className="text-xs text-gray-400 mb-4 font-mono leading-relaxed">Optimize your resume for ATS parsing.</p>
        </div>
        <div onClick={() => onSelectModule('MOD_02')} className="iso-card border-neon-violet/30 p-5 rounded-2xl group cursor-pointer hover:-translate-y-1">
          <h3 className="text-lg font-bold text-white mb-2 text-neon text-neon-violet">Interview Prep</h3>
          <p className="text-xs text-gray-400 mb-4 font-mono leading-relaxed">Mock coding environments.</p>
        </div>
      </section>
    </div>
  );
};

export default ProfileHubView;
