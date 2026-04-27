
import React, { useState } from 'react';
import { Company } from '../types';
import { COMPANIES } from '../constants';

interface Props {
  role: string;
  onSelectCompany: (company: Company) => void;
  onBack: () => void;
}

const CompanyDiscoveryView: React.FC<Props> = ({ role, onSelectCompany, onBack }) => {
  const [activeTab, setActiveTab] = useState<'TOP' | 'FAANG' | 'STARTUP' | 'PRODUCT'>('TOP');
  
  const filtered = COMPANIES.filter(c => {
    if (activeTab === 'TOP') return c.isHiring;
    return c.category === activeTab;
  });

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <header className="px-6 pt-4 pb-2 shrink-0">
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar -mx-6 px-6">
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-mono whitespace-nowrap">REMOTE ONLY</button>
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-mono whitespace-nowrap">0-3 YEARS EXP</button>
        </div>

        <div className="flex border-b border-white/5">
          {['TOP', 'FAANG', 'STARTUP', 'PRODUCT'].map(t => (
            <button 
              key={t}
              onClick={() => setActiveTab(t as any)}
              className={`px-4 py-3 text-[10px] font-mono tracking-widest transition-all ${activeTab === t ? 'text-neon-cyan border-b-2 border-neon-cyan bg-neon-cyan/5' : 'text-gray-500'}`}
            >
              {t === 'TOP' ? 'ALL HIRING' : t === 'FAANG' ? 'BIG TECH' : t}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-4 pb-32 pt-4">
        {filtered.map(c => (
          <div 
            key={c.id} 
            onClick={() => onSelectCompany(c)}
            className="glass-panel p-5 rounded-2xl group cursor-pointer hover:border-neon-cyan/50 transition-all shrink-0"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white p-2">
                <img src={c.logo} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-neon-green bg-neon-green/10 px-2 py-0.5 rounded uppercase tracking-wider mb-2">Hiring</span>
                <div className="flex text-neon-amber">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xs leading-none">star</span>
                  ))}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{c.name}</h3>
            <p className="text-xs text-gray-500 font-mono mb-4">{c.tagline}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                <div className="text-[8px] text-gray-600 uppercase font-mono">Location</div>
                <div className="text-xs text-gray-300 truncate">{c.location}</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                <div className="text-[8px] text-gray-600 uppercase font-mono">Salary</div>
                <div className="text-xs text-neon-cyan">{c.salary}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest hover:bg-white/10">Show Jobs</button>
              <button className="flex-1 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary text-[10px] font-mono uppercase tracking-widest hover:bg-primary/30">Get Ready</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDiscoveryView;
