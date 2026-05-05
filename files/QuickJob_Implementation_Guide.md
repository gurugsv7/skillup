# QuickJob - Implementation Guide
## Converting Mocks to Real Working App

---

## 🏗️ Tech Stack Recommendation
- **Frontend**: React + React Router (SPA)
- **State Management**: Context API (simple) or Redux (scalable)
- **Styling**: Tailwind CSS (matches the design system)
- **Mobile**: Mobile-first responsive design (375px base)
- **Data**: Static JSON (Phase 1) → Backend/Firebase (Phase 2)

---

## 📊 Core Data Structure

### 1. **User Model**
```javascript
{
  id: "user_123",
  email: "user@example.com",
  password: "hashed_password",
  careerLevel: "graduate", // "student" | "graduate" | "pro"
  selectedCategory: null,
  selectedRole: null,
  selectedCompany: null,
  savedRoles: [],
  savedCompanies: [],
  progressTracking: {
    resumeScore: 0,
    interviewPrepProgress: 0,
    completedSteps: []
  }
}
```

### 2. **Role Model**
```javascript
{
  id: "role_fullstack_dev",
  name: "Full Stack Developer",
  category: "Software Development",
  difficulty: "intermediate",
  timeToMastery: "9-12 months",
  
  learningPath: {
    beginner: {
      duration: "3-4 months",
      topics: ["HTML/CSS/JS", "React basics", "Node.js basics"],
      tools: ["VS Code", "Git", "Chrome DevTools"],
      projectIdeas: ["Todo App", "Weather App"]
    },
    intermediate: {
      duration: "3-4 months",
      topics: ["Advanced React", "REST APIs", "Databases"],
      tools: ["Postman", "Docker", "MongoDB"],
      projectIdeas: ["E-commerce", "Blog Platform"]
    },
    advanced: {
      duration: "3-6 months",
      topics: ["System Design", "Performance", "Scalability"],
      tools: ["Kubernetes", "Redis", "AWS"],
      projectIdeas: ["Production-grade SaaS"]
    }
  },
  
  requiredTools: {
    core: ["Node.js", "React", "MySQL"],
    nice: ["Docker", "AWS"],
    optional: ["Redis", "GraphQL"]
  }
}
```

### 3. **Company Model**
```javascript
{
  id: "company_freshworks",
  name: "Freshworks",
  tier: "product", // "mnc" | "midSize" | "sme" | "product" | "global"
  hiringStatus: "high", // "high" | "regular" | "occasional" | "rare"
  rolesHiring: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  
  hiringProcess: {
    steps: [
      { step: 1, name: "Resume Screening", duration: "3-5 days" },
      { step: 2, name: "Coding Round", duration: "1-2 hours" },
      { step: 3, name: "System Design", duration: "1-2 hours" },
      { step: 4, name: "Manager Round", duration: "45 mins" }
    ]
  },
  
  applicationLink: "https://careers.freshworks.com",
  linkedInJobsLink: "https://linkedin.com/jobs/...",
  averageSalary: "12-20 LPA",
  
  commonQuestions: [
    "Tell us about a challenging project",
    "How do you approach system design?",
    "Explain your experience with React"
  ],
  
  successStories: [
    {
      name: "Rajesh Kumar",
      role: "Full Stack Developer",
      prepTime: "4 months",
      salary: "15 LPA",
      story: "Started with basics..."
    }
  ]
}
```

### 4. **Interview Prep Model**
```javascript
{
  roleId: "role_fullstack_dev",
  companyId: "company_freshworks",
  
  questionBank: [
    {
      id: "q1",
      question: "Explain the virtual DOM in React",
      difficulty: "intermediate",
      answer: "...",
      videoUrl: "https://...", // Mock video initially
      relatedTopic: "React"
    }
  ],
  
  mockInterviews: [
    {
      id: "mock_1",
      title: "30-min Coding Challenge",
      duration: 30,
      difficulty: "medium",
      topic: "Array Manipulation"
    }
  ]
}
```

---

## 🗂️ Folder Structure

```
src/
├── pages/
│   ├── LandingView.jsx
│   ├── AuthView.jsx (Login/SignUp)
│   ├── LevelSelectView.jsx
│   ├── RoleHubView.jsx
│   ├── CompanyDiscoveryView.jsx
│   ├── CompanyProfileView.jsx
│   ├── GuideView.jsx
│   ├── InterviewPrepView.jsx
│   ├── SuccessStoriesView.jsx
│   ├── ChatView.jsx (AI Assistant)
│   └── ProfileHubView.jsx
│
├── components/
│   ├── Navigation/
│   │   ├── TopHeader.jsx
│   │   └── BottomNavBar.jsx
│   ├── Cards/
│   │   ├── RoleCard.jsx
│   │   ├── CompanyCard.jsx
│   │   └── StoryCard.jsx
│   ├── Forms/
│   │   ├── ResumeForm.jsx
│   │   └── ApplicationForm.jsx
│   └── Shared/
│       ├── Badge.jsx
│       └── ProgressBar.jsx
│
├── context/
│   ├── AuthContext.js
│   ├── UserContext.js
│   └── NavigationContext.js
│
├── data/
│   ├── roles.json
│   ├── companies.json
│   ├── interviewQuestions.json
│   └── successStories.json
│
├── styles/
│   ├── globals.css
│   ├── tailwind.config.js
│   └── theme.js
│
├── utils/
│   ├── auth.js
│   ├── routing.js
│   └── helpers.js
│
├── App.jsx
└── index.jsx
```

---

## 🔄 Navigation Flow (React Router Setup)

```javascript
// App.jsx - Route Structure
<BrowserRouter>
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<LandingView />} />
    <Route path="/auth/login" element={<AuthView mode="login" />} />
    <Route path="/auth/signup" element={<AuthView mode="signup" />} />
    
    {/* Protected Routes - Require Auth */}
    <Route element={<ProtectedLayout />}>
      <Route path="/select-level" element={<LevelSelectView />} />
      <Route path="/roles" element={<RoleHubView />} />
      <Route path="/roles/:roleId" element={<RoleDetailView />} />
      
      <Route path="/companies" element={<CompanyDiscoveryView />} />
      <Route path="/companies/:companyId" element={<CompanyProfileView />} />
      
      <Route path="/guides/:companyId/:roleId" element={<GuideView />} />
      <Route path="/interview-prep/:roleId/:companyId" element={<InterviewPrepView />} />
      <Route path="/success-stories/:companyId" element={<SuccessStoriesView />} />
      
      <Route path="/chat" element={<ChatView />} />
      <Route path="/profile" element={<ProfileHubView />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

## 📱 Page-by-Page Implementation Checklist

### ✅ 1. **LandingView** (Public)
- [ ] Hero section with "Find Your Great Job Easily"
- [ ] "START NOW" button → Navigate to `/auth/signup`
- [ ] Login/Sign up link in top nav
- [ ] 3-step guide section at bottom
- [ ] Responsive mobile design (full width)

### ✅ 2. **AuthView** (Public)
- [ ] Toggle between Login/SignUp modes
- [ ] Email & Password inputs
- [ ] Form validation (email format, password strength)
- [ ] "Digital Access" theme with scanning animation
- [ ] On success → Redirect to `/select-level`
- [ ] Mock authentication (localStorage initially)

### ✅ 3. **LevelSelectView** (Protected)
- [ ] 3 interactive cards: Student | Graduate | Pro
- [ ] Store selection in Context/UserContext
- [ ] On selection → Redirect to `/roles`
- [ ] Show glowing borders on hover
- [ ] Mobile-friendly card layout

### ✅ 4. **RoleHubView** (Protected)
- [ ] Display all roles in grid/list format
- [ ] Search bar to filter roles by name
- [ ] Filter by category (Data & AI, Cloud & Systems, etc.)
- [ ] Show difficulty badge on each role card
- [ ] Click role → Navigate to `/roles/:roleId`
- [ ] Store selectedRole in Context

### ✅ 5. **CompanyDiscoveryView** (Protected)
- [ ] List of companies with hiring status badge
- [ ] Smart Tabs: "All Hiring" | "Startups" | "Big Tech"
- [ ] Filter by tier (MNC, Product, SME, etc.)
- [ ] Green "Hiring 🔥" badges
- [ ] "Show Jobs" button → External link
- [ ] "Get Ready" button → Navigate to interview prep
- [ ] Click company → Navigate to `/companies/:companyId`

### ✅ 6. **CompanyProfileView** (Protected)
- [ ] Company header (name, tier, hiring status)
- [ ] Hiring process timeline/steps
- [ ] Three action tiles:
  - "How to Apply" → Opens GuideView
  - "Interview Help" → Opens InterviewPrepView
  - "Success Stories" → Opens SuccessStoriesView
- [ ] Related roles dropdown
- [ ] Back button with breadcrumb

### ✅ 7. **GuideView** (Protected)
- [ ] Resume Score display (mock AI analyzer)
- [ ] Where to Apply section (links)
- [ ] Message template to copy/paste
- [ ] Step-by-step application guide
- [ ] Common mistakes section
- [ ] Mobile-optimized layout

### ✅ 8. **InterviewPrepView** (Protected)
- [ ] Tabbed interface: Practice | Questions | Mock
- [ ] Practice tab:
  - List of videos (mock video player)
  - "How to Answer" guides
- [ ] Question Bank tab:
  - Filter by difficulty
  - Search questions
  - Show answer on click
- [ ] Mock Interview tab:
  - Timer-based challenges
  - Difficulty levels
- [ ] Progress tracker

### ✅ 9. **SuccessStoriesView** (Protected)
- [ ] Editorial-style story cards
- [ ] Show: Name, Role, Prep Time, Salary, Story excerpt
- [ ] Click to expand full story
- [ ] Stats section (avg prep time, avg salary range)
- [ ] Filtering by role/company

### ✅ 10. **ChatView** (Protected)
- [ ] Message thread UI (you ↔ AI)
- [ ] Input field at bottom
- [ ] Mock AI responses (hardcoded initially)
- [ ] Friendly, non-technical language
- [ ] Message history (stored in Context)
- [ ] Scrollable chat history

### ✅ 11. **ProfileHubView** (Protected)
- [ ] User info card (level, current goal)
- [ ] Quick access buttons:
  - Resume Builder
  - Interview Prep
  - Saved Roles
  - Saved Companies
- [ ] Progress overview (% complete)
- [ ] Logout button
- [ ] Mobile-optimized dashboard

---

## 🎯 State Management (Context API)

### **AuthContext**
```javascript
{
  user: null,
  isAuthenticated: false,
  login: (email, password) => {},
  signup: (email, password) => {},
  logout: () => {}
}
```

### **UserContext**
```javascript
{
  careerLevel: "graduate",
  selectedRole: null,
  selectedCompany: null,
  savedRoles: [],
  savedCompanies: [],
  setCareerLevel: () => {},
  setSelectedRole: () => {},
  toggleSaveRole: () => {}
}
```

### **NavigationContext**
```javascript
{
  breadcrumb: ["HOME", "GRADUATE", "DEVELOPER"],
  currentPath: "/roles/fullstack",
  goBack: () => {},
  goHome: () => {}
}
```

---

## 🗄️ Static Data Files (Phase 1)

### **roles.json** Structure
```javascript
[
  {
    id: "role_fullstack_dev",
    name: "Full Stack Developer",
    category: "Software Development",
    difficulty: "intermediate",
    // ... rest of role object
  },
  // ... 19 more roles
]
```

### **companies.json** Structure
```javascript
[
  {
    id: "company_tcs",
    name: "Tata Consultancy Services",
    tier: "mnc",
    hiringStatus: "regular",
    rolesHiring: ["Full Stack Developer", "Frontend Developer", ...],
    // ... rest of company object
  },
  // ... 49 more companies
]
```

### **interviewQuestions.json** Structure
```javascript
[
  {
    id: "q1",
    roleId: "role_fullstack_dev",
    companyId: "company_freshworks",
    question: "...",
    difficulty: "medium",
    answer: "...",
    videoUrl: "..."
  }
]
```

---

## 🚀 Implementation Priority (Phases)

### **Phase 1: Core Infrastructure (Week 1-2)**
- [ ] Setup React + Router
- [ ] Create all 11 page components (basic UI)
- [ ] Implement Context API for Auth + User state
- [ ] Build TopHeader + BottomNavBar
- [ ] Setup Tailwind CSS theming
- [ ] Create static data files (roles, companies)
- [ ] Mock authentication (localStorage)

### **Phase 2: Page Integration (Week 3-4)**
- [ ] Connect all pages with real navigation
- [ ] Implement page-specific logic
- [ ] Add filtering/search functionality
- [ ] Build forms (login, resume, application)
- [ ] Implement bottom nav bar functionality

### **Phase 3: Features (Week 5-6)**
- [ ] Interview question bank with filtering
- [ ] Resume score calculator (mock)
- [ ] Chat AI assistant (mock responses)
- [ ] Save roles/companies functionality
- [ ] Progress tracking

### **Phase 4: Polish (Week 7)**
- [ ] Mobile responsiveness QA
- [ ] Animation/transitions
- [ ] Error handling
- [ ] Loading states
- [ ] Performance optimization

---

## 🔗 Key Implementation Details

### **Mobile-First Design**
- Base breakpoint: 375px (mobile)
- Responsive up to 768px (tablet)
- All pages full-width on mobile
- Bottom nav bar always visible

### **Breadcrumb Navigation**
```
HOME > GRADUATE > FULL STACK DEVELOPER
```
Should update as user navigates.

### **Protected Routes**
Only accessible if user is logged in and selected career level.

### **Company-Role Mapping**
- Every company has `rolesHiring: []` array
- Only show companies for roles they actually hire
- Filter companies by tier in CompanyDiscoveryView

### **Hiring Status Badges**
- 🔥 "High" → Red/Orange
- ✓ "Regular" → Green
- 📌 "Occasional" → Yellow
- "Not hiring" → Gray (don't show)

---

## 💾 Data Entry Tasks (For You)

1. **Map Roles to Companies**: Which companies hire for which roles?
   - Template: `roles.json` with `companiesHiring` array per role
   
2. **Interview Questions**: Add 5-10 questions per role/company combo
   - Template: `interviewQuestions.json`
   
3. **Success Stories**: Add 2-3 stories per company
   - Template: Stories with name, role, prep time, salary, story
   
4. **Learning Paths**: Define what to learn at each difficulty level
   - Template: Beginner/Intermediate/Advanced topics + tools

---

## 🎨 Design System

### **Colors** (Use in Tailwind)
- Primary: Cyan/Blue (#00d4ff)
- Secondary: Dark gray (#1a1a2e)
- Accent: Green (#00ff88) for success/hiring
- Danger: Orange (#ff6b35) for urgent

### **Typography**
- Headings: Bold, 18-32px
- Body: Regular, 14-16px
- Labels: Small, 12px

### **Spacing**
- Mobile padding: 16px
- Card gap: 12px
- Section gap: 24px

---

## 🧪 Testing Checklist

- [ ] All routes navigate correctly
- [ ] Auth state persists on refresh (localStorage)
- [ ] Protected routes redirect to login if not authenticated
- [ ] Breadcrumb updates correctly on navigation
- [ ] Bottom nav bar active state updates
- [ ] Mobile responsive (test on 375px width)
- [ ] Forms validate input
- [ ] Company filtering by tier works
- [ ] Role search filters correctly
- [ ] Saved items persist

---

## 📝 Next Steps for Claude Code

1. **Clone/Setup**: Create React app with routing
2. **File Structure**: Create all folders + component skeletons
3. **Static Data**: Import role.json, companies.json, etc.
4. **Context Setup**: Auth + User contexts
5. **Page Creation**: Build each page with UI
6. **Navigation**: Wire up all routes
7. **Styling**: Apply Tailwind + custom theme
8. **Testing**: QA all flows

---

**Ready to build? Hand this to Claude Code! 🚀**
