
import React from 'react';
import { AppView, UserLevel } from '../types';

interface Props {
  level: UserLevel | null;
  role: string | null;
  company?: string;
  view: AppView;
  onBack?: () => void;
}

const NavHeader: React.FC<Props> = ({ level, role, company, view, onBack }) => {
  const getTitle = () => {
    switch (view) {
      case AppView.ROLE_HUB: return "Job Guides";
      case AppView.COMPANY_DISCOVERY: return "Companies";
      case AppView.COMPANY_PROFILE: return "Company Profile";
      case AppView.GUIDE: return "How to Apply";
      case AppView.INTERVIEW_PREP: return "Interview Prep";
      case AppView.SUCCESS_STORIES: return "Success Stories";
      case AppView.JOB_LIST: return "Available Jobs";
      case AppView.AI_CHAT: return "Easy Assistant";
      case AppView.PROFILE_HUB: return "My Profile";
      default: return "";
    }
  };

  const getPath = () => {
    let path = "HOME";
    if (level) path += ` > ${level}`;
    if (role) path += ` > ${role}`;
    if (company) path += ` > ${company}`;
    return path;
  };

  return (
    <div className="shrink-0 z-40 bg-background-dark/80 backdrop-blur-xl border-b border-white/5 pt-10 pb-4 px-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all group"
            >
              <span className="material-symbols-outlined text-gray-400 group-hover:text-neon-cyan transition-colors">arrow_back</span>
            </button>
          )}
          <h2 className="text-lg font-bold text-white tracking-tight">{getTitle()}</h2>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_rgba(0,240,255,1)] animate-pulse"></div>
           <span className="text-[9px] font-mono text-neon-cyan/70 tracking-widest uppercase">Active_Link</span>
        </div>
      </div>
      <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
        <span className="text-gray-700">PATH:</span>
        <span className="bg-black/40 px-2 py-0.5 rounded text-gray-400 border border-white/5">{getPath()}</span>
      </div>
    </div>
  );
};

export default NavHeader;
