
import React from 'react';
import { Company, SuccessStory } from '../types';
import { SUCCESS_STORIES } from '../constants';

interface Props {
  company: Company;
  onBack: () => void;
}

const SuccessStoriesView: React.FC<Props> = ({ company, onBack }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar">
      <header className="p-6 shrink-0 pt-4">
        <h1 className="text-3xl font-bold mb-1 text-white">Experience Stories</h1>
        <p className="text-xs text-gray-500 font-mono">Stories from people who got hired at {company.name}</p>
      </header>

      <section className="px-6 mb-8">
        <div className="glass-panel p-4 rounded-xl flex justify-around border-neon-amber/30 bg-neon-amber/5">
          <div className="text-center">
            <div className="text-xl font-bold text-neon-amber">3.5m</div>
            <div className="text-[8px] text-gray-500 uppercase">Prep Time</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-neon-amber">250</div>
            <div className="text-[8px] text-gray-500 uppercase">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-neon-amber">40%</div>
            <div className="text-[8px] text-gray-500 uppercase">Hire Rate</div>
          </div>
        </div>
      </section>

      <div className="px-6 space-y-6 pb-24">
        {SUCCESS_STORIES.filter(s => s.companyId === company.id).map(story => (
          <div key={story.id} className="glass-panel p-6 rounded-2xl">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary text-xl">
                {story.candidate[0]}
              </div>
              <div>
                <h3 className="font-bold text-white">{story.candidate}</h3>
                <p className="text-[10px] font-mono text-gray-500 uppercase">{story.role} • {story.year}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-gray-500">College</span>
                <span className="text-gray-300">{story.college}</span>
              </div>
              <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-gray-500">Exp</span>
                <span className="text-gray-300">{story.prevExperience}</span>
              </div>
              <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-gray-500">Salary</span>
                <span className="text-neon-cyan font-mono font-bold">{story.ctc}</span>
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-neon-amber/20">
              <div className="text-[9px] font-mono text-neon-amber uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">lightbulb</span> Key Takeaway
              </div>
              <p className="text-sm text-gray-400 italic font-mono leading-relaxed">
                "{story.keyTakeaway}"
              </p>
            </div>

            <button className="w-full mt-4 py-3 bg-primary/10 text-primary font-bold rounded-xl border border-primary/20 hover:bg-primary/20 transition-all text-[10px] font-mono tracking-widest uppercase">
              READ STORY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesView;
