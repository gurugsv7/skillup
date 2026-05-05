import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserLevel } from '../types';

export interface Role {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  timeToMastery: string;
  description: string;
  overview?: string;
  companiesHiring: string[];
  learningPath: {
    beginner: { duration: string; estimatedHours: number; topics: string[]; tools: string[]; projectIdeas: string[] };
    intermediate: { duration: string; estimatedHours: number; topics: string[]; tools: string[]; projectIdeas: string[] };
    advanced: { duration: string; estimatedHours: number; topics: string[]; tools: string[]; projectIdeas: string[] };
  };
  requiredTools?: {
    core: string[];
    nice: string[];
    optional: string[];
  };
}

export interface Company {
  id: string;
  name: string;
  tier: string;
  hiringStatus: string;
  logo: string;
  website: string;
  careersPage: string;
  linkedInUrl: string;
  rolesHiring: string[];
  averageSalary: string;
  hiringProcess: { steps: { step: number; name: string; duration: string; tips: string }[] };
  commonQuestions: string[];
  successStories: { id: string; name: string; role: string; prepTime: string; salary: string; story: string }[];
}

interface User {
  id: string;
  email: string;
  careerLevel: UserLevel | null;
  isLoggedIn: boolean;
}

interface AppContextType {
  user: User;
  roles: Role[];
  companies: Company[];
  selectedCompany: Company | null;
  setSelectedCompany: (company: Company | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUserLevel: (level: UserLevel) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '',
    email: '',
    careerLevel: null,
    isLoggedIn: false,
  });

  const [roles, setRoles] = useState<Role[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Import Supabase service
        const { getAllRoles, getAllCompanies } = await import('../src/services/supabase');
        
        // Fetch all roles from Supabase
        const { data: rolesData, error: rolesError } = await getAllRoles(100);
        if (rolesError) throw rolesError;
        
        // Transform Supabase roles to match our interface
        const transformedRoles = (rolesData || []).map((r: any) => ({
          id: r.id,
          name: r.name,
          category: r.category,
          difficulty: r.difficulty || 'Mid',
          timeToMastery: r.time_to_mastery || '12 months',
          description: r.description || '',
          overview: r.overview,
          companiesHiring: r.companies_hiring || [],
          learningPath: {
            beginner: { duration: '2 months', estimatedHours: 60, topics: [], tools: [], projectIdeas: [] },
            intermediate: { duration: '3 months', estimatedHours: 100, topics: [], tools: [], projectIdeas: [] },
            advanced: { duration: '3 months', estimatedHours: 100, topics: [], tools: [], projectIdeas: [] },
          },
          requiredTools: r.required_skills ? { core: r.required_skills, nice: [], optional: [] } : undefined,
        }));
        setRoles(transformedRoles);
        
        // Fetch all companies from Supabase
        const { data: companiesData, error: companiesError } = await getAllCompanies(200);
        if (companiesError) throw companiesError;
        
        // Transform Supabase companies to match our interface
        const transformedCompanies = (companiesData || []).map((c: any) => ({
          id: c.id,
          name: c.name,
          tier: c.tier,
          hiringStatus: c.hiring_status,
          logo: c.logo_url,
          website: c.website_url,
          careersPage: c.careers_page_url,
          linkedInUrl: c.linkedin_url,
          rolesHiring: [],
          averageSalary: '',
          hiringProcess: { steps: [] },
          commonQuestions: [],
          successStories: [],
        }));
        
        setCompanies(transformedCompanies);
      } catch (error) {
        console.error('Error loading data:', error);
      }

      // Check if user is logged in from localStorage
      const savedUser = localStorage.getItem('s4skillup_user');
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser({ ...parsedUser, isLoggedIn: true });
        } catch (e) {
          console.error('Error parsing saved user:', e);
        }
      }
    };

    loadData();
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication
    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      careerLevel: null,
      isLoggedIn: true,
    };
    setUser(newUser);
    localStorage.setItem('s4skillup_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser({ id: '', email: '', careerLevel: null, isLoggedIn: false });
    localStorage.removeItem('s4skillup_user');
  };

  const setUserLevel = (level: UserLevel) => {
    setUser((prev) => ({ ...prev, careerLevel: level }));
    localStorage.setItem('s4skillup_user', JSON.stringify({ ...user, careerLevel: level }));
  };

  return (
    <AppContext.Provider value={{ user, roles, companies, selectedCompany, setSelectedCompany, login, logout, setUserLevel }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
