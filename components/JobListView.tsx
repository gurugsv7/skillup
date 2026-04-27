
import React from 'react';
import { JOB_OPPORTUNITIES } from '../constants';

interface Props {
  role: string;
  onSelectJob: () => void;
  onBack: () => void;
}

const JobListView: React.FC<Props> = ({ role, onSelectJob, onBack }) => {
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden relative">
      <header className="pt-4 pb-2 px-6 shrink-0 z-20">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">
              {role} <br/><span className="font-light text-gray-400">Jobs</span>
            </h1>
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-lg border-l-2 border-neon-cyan flex flex-col items-end">
            <span className="text-2xl font-mono font-bold text-neon-cyan text-neon leading-none">124</span>
            <span className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Openings</span>
          </div>
        </div>
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['Location', 'Experience', 'Mode'].map(filter => (
            <button key={filter} className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-xs hover:bg-white/5 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-sm text-neon-cyan">tune</span>
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 relative space-y-5 pt-4 min-h-0">
        {JOB_OPPORTUNITIES.map((job) => (
          <article key={job.id} className="glass-panel rounded-2xl p-5 hover:border-neon-cyan/50 transition-all cursor-pointer group shrink-0">
            <h3 className="text-xl font-bold text-white mb-1">{job.company}</h3>
            <p className="text-xs text-gray-400 font-mono mb-4">{job.location}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg border border-white/20 text-xs font-medium">Show Details</button>
              <button onClick={onSelectJob} className="flex-1 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan text-xs font-medium">Get Ready</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default JobListView;
