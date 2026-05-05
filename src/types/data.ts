// Core Type Definitions based on Research

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  careerLevel?: 'STUDENT' | 'GRADUATE' | 'PRO';
  yearsOfExperience?: number;
  currentCompany?: string;
  currentRole?: string;
  interestedRoles?: string[];
  interestedCompanies?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: string;
  name: string;
  slug: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Data' | 'Cloud' | 'Security' | 'QA' | 'Business';
  description?: string;
  difficulty: 'Entry' | 'Mid' | 'Senior';
  timeToMastery?: string;
  requiredSkills?: string[];
  companiesHiring?: string[];
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  careersPage?: string;
  category: 'FAANG' | 'STARTUP' | 'PRODUCT' | 'SERVICE' | 'REMOTE';
  hiringStatus: 'High' | 'Moderate' | 'Low' | 'Not Hiring';
  techStack?: {
    frontend?: string[];
    backend?: string[];
    cloud?: string[];
    database?: string[];
  };
  remotePolicy?: 'Fully Remote' | 'Hybrid' | 'Office Only';
  cultureRating?: number;
  workLifeBalance?: number;
}

export interface InterviewQuestion {
  id: string;
  roleId: string;
  companyId?: string;
  title: string;
  questionText: string;
  answerText?: string;
  difficulty: 'Entry' | 'Mid' | 'Senior';
  category: 'Coding' | 'System Design' | 'Behavioral' | 'Aptitude';
  sourceUrl?: string;
  sourcePlatform?: string;
  views?: number;
}

export interface SuccessStory {
  id: string;
  userId: string;
  companyId: string;
  roleId: string;
  college?: string;
  targetCompany: string;
  targetRole: string;
  level?: string;
  ctc?: number;
  salary?: number;
  bonus?: number;
  equity?: number;
  prepTimeWeeks?: number;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  keyTakeaway?: string;
  isPublished: boolean;
  views?: number;
}

export interface SalaryBenchmark {
  id: string;
  companyId: string;
  roleId: string;
  level: string;
  base25Percentile: number;
  base50Percentile: number;
  base75Percentile: number;
  bonusAvg?: number;
  equityAnnualValue?: number;
  totalCompensionMedian?: number;
  dataPoints: number;
  confidence: number;
}

export interface LearningResource {
  id: string;
  roleId: string;
  skillName: string;
  resourceType: 'course' | 'video' | 'documentation' | 'practice' | 'article';
  title: string;
  url: string;
  platform: string;
  estimatedHours?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isFree: boolean;
  rating?: number;
}

export interface UserLearningProgress {
  id: string;
  userId: string;
  resourceId: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'bookmarked';
  progressPercentage?: number;
  completedAt?: Date;
  streakCount?: number;
}

export interface MatchScore {
  id: string;
  userId: string;
  roleId: string;
  companyId: string;
  overallMatch: number; // 0-100
  skillMatch?: number;
  experienceMatch?: number;
  strengthAreas?: string[];
  gapAreas?: string[];
  recommendations?: string;
}

export interface UserConsent {
  id: string;
  userId: string;
  consentType: string;
  consentGiven: boolean;
  consentTimestamp: Date;
  anonymizationLevel?: 'full_name' | 'first_name_only' | 'anonymous';
  canPublishStory?: boolean;
}

export interface CompanyInterviewRound {
  id: string;
  companyId: string;
  roundNumber: number;
  roundName: string;
  durationMinutes?: number;
  focusAreas?: string[];
  commonQuestions?: string[];
  tips?: string;
  passRatePercentage?: number;
}
