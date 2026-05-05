
import React, { useState } from 'react';
import { AppView, UserLevel, Company } from './types';
import LandingView from './components/LandingView';
import LevelSelectView from './components/LevelSelectView';
import RoleHubView from './components/RoleHubView';
import CompanyDiscoveryView from './components/CompanyDiscoveryView';
import CompanyProfileView from './components/CompanyProfileView';
import GuideView from './components/GuideView';
import InterviewPrepView from './components/InterviewPrepView';
import SuccessStoriesView from './components/SuccessStoriesView';
import ChatView from './components/ChatView';
import JobListView from './components/JobListView';
import ProfileHubView from './components/ProfileHubView';
import AuthView from './components/AuthView';
import BottomNav from './components/BottomNav';
import NavHeader from './components/NavHeader';
import DesktopNotification from './components/DesktopNotification';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(() => AppView.LEVEL_SELECT);
  const [userLevel, setUserLevel] = useState<UserLevel | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleBack = () => {
    switch (currentView) {
      case AppView.AUTH: 
        setCurrentView(userLevel ? AppView.ROLE_HUB : AppView.LEVEL_SELECT); 
        break;
      case AppView.LEVEL_SELECT: 
        setCurrentView(AppView.LEVEL_SELECT); 
        break;
      case AppView.ROLE_HUB:
      case AppView.COMPANY_DISCOVERY:
      case AppView.COMPANY_PROFILE:
      case AppView.GUIDE:
      case AppView.INTERVIEW_PREP:
      case AppView.SUCCESS_STORIES:
      case AppView.JOB_LIST:
      case AppView.AI_CHAT:
      case AppView.PROFILE_HUB: 
        setCurrentView(AppView.ROLE_HUB); 
        break;
      default: break;
    }
  };

  const Background = () => (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMjQwLDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-repeat animate-circuit-move opacity-20"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <LandingView onStart={() => setCurrentView(AppView.LEVEL_SELECT)} onLogin={() => setCurrentView(AppView.AUTH)} />;
      case AppView.AUTH:
        return <AuthView onSuccess={() => setCurrentView(AppView.LEVEL_SELECT)} onBack={handleBack} />;
      case AppView.LEVEL_SELECT:
        return <LevelSelectView onSelect={(l) => { setUserLevel(l); setCurrentView(AppView.ROLE_HUB); }} onBack={handleBack} />;
      case AppView.ROLE_HUB:
        return <RoleHubView onSelectRole={(r) => { setSelectedRole(r); setCurrentView(AppView.COMPANY_DISCOVERY); }} onBack={handleBack} />;
      case AppView.COMPANY_DISCOVERY:
        return <CompanyDiscoveryView role={selectedRole || ''} onSelectCompany={(c) => { setSelectedCompany(c); setCurrentView(AppView.COMPANY_PROFILE); }} onBack={handleBack} />;
      case AppView.COMPANY_PROFILE:
        return <CompanyProfileView company={selectedCompany!} onAction={(view) => setCurrentView(view)} onBack={handleBack} />;
      case AppView.GUIDE:
        return <GuideView company={selectedCompany!} onBack={handleBack} />;
      case AppView.INTERVIEW_PREP:
        return <InterviewPrepView company={selectedCompany!} onBack={handleBack} />;
      case AppView.SUCCESS_STORIES:
        return <SuccessStoriesView company={selectedCompany!} onBack={handleBack} />;
      case AppView.AI_CHAT:
        return <ChatView onBack={handleBack} />;
      case AppView.JOB_LIST:
        return <JobListView role={selectedRole || 'Engineering'} onSelectJob={() => setCurrentView(AppView.COMPANY_PROFILE)} onBack={handleBack} />;
      case AppView.PROFILE_HUB:
        return <ProfileHubView onSelectModule={(m) => { console.log('Module selected:', m); setCurrentView(AppView.INTERVIEW_PREP); }} onBack={handleBack} />;
      default:
        return <LandingView onStart={() => setCurrentView(AppView.LEVEL_SELECT)} onLogin={() => setCurrentView(AppView.AUTH)} />;
    }
  };

  const showNav = ![AppView.HOME, AppView.LEVEL_SELECT, AppView.AUTH].includes(currentView);
  const showTopHeader = ![AppView.HOME, AppView.LEVEL_SELECT, AppView.AUTH].includes(currentView);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center font-display">
      <Background />
      <DesktopNotification />
      <div className="relative z-10 w-full h-full max-w-md bg-background-dark/90 backdrop-blur-md overflow-hidden flex flex-col border-x border-white/5">
        {showTopHeader && (
          <NavHeader 
            level={userLevel} 
            role={selectedRole} 
            company={selectedCompany?.name} 
            view={currentView}
            onBack={currentView !== AppView.ROLE_HUB ? handleBack : undefined}
          />
        )}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          {renderView()}
        </main>
        {showNav && <BottomNav currentView={currentView} onViewChange={setCurrentView} />}
      </div>
    </div>
  );
};

export default App;
