
export enum AppView {
  HOME = 'home',
  LEVEL_SELECT = 'level_select',
  ROLE_HUB = 'role_hub',
  COMPANY_DISCOVERY = 'company_discovery',
  COMPANY_PROFILE = 'company_profile',
  GUIDE = 'guide',
  INTERVIEW_PREP = 'interview_prep',
  SUCCESS_STORIES = 'success_stories',
  AI_CHAT = 'ai_chat',
  PROFILE_HUB = 'profile_hub',
  JOB_LIST = 'job_list'
}

export enum UserLevel {
  STUDENT = 'STUDENT',
  GRADUATE = 'GRADUATE',
  PRO = 'PRO'
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
}

export interface Company {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  rating: number;
  location: string;
  salary: string;
  experience: string;
  category: 'FAANG' | 'STARTUP' | 'PRODUCT' | 'SERVICE' | 'REMOTE';
  isHiring: boolean;
  stack: TechStack;
  about: string;
  timeline: { step: string; duration: string }[];
}

export interface SuccessStory {
  id: string;
  candidate: string;
  role: string;
  companyId: string;
  year: string;
  college: string;
  prevExperience: string;
  ctc: string;
  keyTakeaway: string;
}

// Added missing RoleCategory interface
export interface RoleCategory {
  id: string;
  title: string;
  icon: string;
  trending: string;
  roles: string[];
  color: string;
}
