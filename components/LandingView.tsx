
import React from 'react';

interface Props {
  onStart: () => void;
}

const LandingView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex-1 h-full flex flex-col p-6 overflow-y-auto no-scrollbar pb-32">
      <header className="flex justify-between items-center mb-12 mt-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">D</div>
          <span className="font-mono text-sm tracking-widest font-bold">DECODE</span>
        </div>
        <div className="flex gap-4">
          <button className="text-xs font-mono text-gray-400">LOGIN</button>
          <button className="text-xs font-mono text-primary font-bold">SIGN UP</button>
        </div>
      </header>

      <section className="mb-12 shrink-0">
        <h1 className="text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Land Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-primary text-neon">Dream IT Job</span> with Confidence
        </h1>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          Curated job listings + company-specific interview prep for the next generation of tech talent.
        </p>
        <button 
          onClick={onStart}
          className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group transition-all"
        >
          START YOUR JOURNEY
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </section>

      <section className="grid grid-cols-3 gap-4 mb-12 shrink-0">
        {[
          { v: '500+', l: 'Companies' },
          { v: '50+', l: 'Roles' },
          { v: '10k+', l: 'Questions' }
        ].map(s => (
          <div key={s.l} className="text-center p-3 glass-panel rounded-xl">
            <div className="text-xl font-bold text-white">{s.v}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="mb-12 shrink-0">
        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">How It Works</h3>
        <div className="space-y-6">
          {[
            { n: '01', t: 'Choose career stage', d: 'Student, Graduate or Pro' },
            { n: '02', t: 'Select target role', d: 'Choose from 50+ IT positions' },
            { n: '03', t: 'Get Prep', d: 'Company-specific guidance' }
          ].map(step => (
            <div key={step.n} className="flex gap-4 items-start">
              <span className="text-primary font-mono font-bold">{step.n}</span>
              <div>
                <h4 className="font-bold text-white">{step.t}</h4>
                <p className="text-sm text-gray-500">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 shrink-0">
        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Featured Companies</h3>
        <div className="grid grid-cols-4 gap-4 opacity-40">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <span className="material-symbols-outlined text-xl">corporate_fare</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-auto pt-8 border-t border-white/5 text-[10px] text-gray-600 font-mono flex justify-between uppercase shrink-0">
        <span>© 2024 ITCareerPath</span>
        <div className="flex gap-4">
          <span>About</span>
          <span>Privacy</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingView;
