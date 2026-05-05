# 🚀 Claude Code Task - QuickJob Implementation

## What We're Building
A mobile-first career guidance web app that helps students, graduates, and professionals choose and prepare for IT/Tech careers.

---

## 📦 What You're Getting

### 1. **QuickJob_Implementation_Guide.md**
   - Complete architecture guide
   - Tech stack recommendation
   - Data models & structures
   - 11 page specifications
   - Route structure (React Router)
   - State management (Context API)
   - Implementation phases

### 2. **roles.json**
   - 10 major tech roles fully detailed:
     - Full Stack Developer
     - Frontend Developer
     - Backend Developer
     - Data Analyst
     - Data Scientist
     - DevOps Engineer
     - Cloud Engineer
     - Security Analyst
     - QA Automation Engineer
     - Business Analyst
   - Each with: Learning Path (Beginner/Intermediate/Advanced), Tools, Companies Hiring

### 3. **companies.json**
   - 10 companies with complete profiles:
     - TCS, Infosys, Wipro (Large MNCs)
     - Zoho, Freshworks, Chargebee (Product/SaaS)
     - Amazon, Microsoft, Google (Global Giants)
     - Aspire Systems, 8Queens (Mid/SME)
   - For each company:
     - Hiring Status (High/Regular/Occasional)
     - Roles they actively hire
     - Interview process steps
     - Common questions
     - Success stories with prep time & salary

---

## 🎯 Your Main Task

**Convert the UI mockups + data into a fully working React app with:**

1. ✅ All 11 pages working with real navigation
2. ✅ Auth system (login/signup) with localStorage
3. ✅ Role and Company filtering
4. ✅ Company-Role mapping (show only companies that hire for selected role)
5. ✅ Bottom nav bar with 4 tabs
6. ✅ Top breadcrumb navigation
7. ✅ Interview prep, success stories, guides
8. ✅ Mobile-first responsive design

---

## 📋 Step-by-Step Build Plan

### **Phase 1: Foundation (2-3 days)**
```
1. Create React app with React Router
2. Setup Tailwind CSS with custom theme
3. Create folder structure (pages/, components/, context/, data/)
4. Import roles.json and companies.json into /data folder
5. Create Auth Context (login/signup with localStorage)
6. Create User Context (selected role, company, level, etc.)
7. Create reusable components:
   - TopHeader.jsx (breadcrumb + profile)
   - BottomNavBar.jsx (4 tabs)
   - RoleCard.jsx
   - CompanyCard.jsx
   - Badge.jsx (for hiring status)
```

### **Phase 2: Page Shells (2-3 days)**
Create basic structure for all 11 pages:
```
- LandingView.jsx → HOME
- AuthView.jsx → LOGIN/SIGNUP
- LevelSelectView.jsx → SELECT Student/Graduate/Pro
- RoleHubView.jsx → BROWSE ROLES
- CompanyDiscoveryView.jsx → BROWSE COMPANIES
- CompanyProfileView.jsx → COMPANY DETAIL
- GuideView.jsx → HOW TO APPLY
- InterviewPrepView.jsx → INTERVIEW QUESTIONS
- SuccessStoriesView.jsx → SUCCESS STORIES
- ChatView.jsx → AI ASSISTANT (mock)
- ProfileHubView.jsx → MY PROFILE/DASHBOARD
```

### **Phase 3: Wire Up Navigation (1-2 days)**
```
- Router setup: All routes from LandingView → Protected Routes
- Auth flow: Landing → Signup → Select Level → Roles
- Navigation between pages
- Breadcrumb updates on page change
- Bottom nav bar routing
- Back buttons
```

### **Phase 4: Features (2-3 days)**
```
- Role filtering & search
- Company filtering by tier
- Show companies only for selected role
- Resume score (mock calculation)
- Interview question bank
- Success stories display
- Chat (mock AI responses)
- Save roles/companies to profile
- Progress tracking
```

### **Phase 5: Polish (1-2 days)**
```
- Mobile responsiveness check
- Animations/transitions
- Loading states
- Error handling
- Form validation
- Performance optimization
```

---

## 🔑 Key Technical Details

### **Protected Routes**
Only accessible if `isAuthenticated && careerLevel` set.

### **Company-Role Mapping**
```javascript
// In CompanyDiscoveryView:
const selectedRole = userContext.selectedRole;
const companiesForRole = companies.filter(company => 
  company.rolesHiring.includes(selectedRole)
);
```

### **Hiring Status Badges**
- 🔥 "High" → Red/Orange badge
- ✓ "Regular" → Green badge  
- 📌 "Occasional" → Yellow badge

### **Mobile Design**
- Base width: 375px
- Full-width on mobile
- Bottom nav always visible
- Cards stack vertically
- Touch-friendly buttons (min 44px)

### **State Management Flow**
```
AuthContext → (user logged in?)
  ↓
UserContext → (career level selected?)
  ↓
NavigationContext → (current page, breadcrumb)
```

---

## 📊 Data You Have

### Roles Available (10)
1. Full Stack Developer
2. Frontend Developer
3. Backend Developer
4. Data Analyst
5. Data Scientist
6. DevOps Engineer
7. Cloud Engineer
8. Cybersecurity Analyst
9. QA Automation Engineer
10. Business Analyst

### Companies Available (10)
- **MNC**: TCS, Infosys, Wipro
- **Product/SaaS**: Zoho, Freshworks, Chargebee
- **Global**: Amazon, Microsoft, Google
- **Mid/SME**: Aspire Systems, 8Queens

### Interview Process Data
Each company has:
- 2-5 interview steps
- Duration per step
- Tips for each step
- Common questions
- 2-3 success stories with:
  - Name, Role, Prep Time, Salary
  - Success story text

---

## 🎨 Design System to Use

### Colors
```css
Primary: #00d4ff (Cyan)
Secondary: #1a1a2e (Dark Gray)
Success/Hiring: #00ff88 (Green)
Danger: #ff6b35 (Orange)
Text: #ffffff (Light)
Background: #0f0f1e (Dark)
```

### Mobile Layout
```
┌─────────────────────┐
│   TopHeader         │
│  (Logo + Profile)   │
├─────────────────────┤
│                     │
│   MAIN CONTENT      │
│   (pages)           │
│                     │
├─────────────────────┤
│  BottomNavBar       │
│  [Icon] [Icon] ...  │
└─────────────────────┘
```

---

## 🧪 Testing Checklist

Before marking as complete:
- [ ] Can login with any email (localStorage)
- [ ] Protected routes redirect to login
- [ ] Select level → takes to roles
- [ ] Role click → company profile page
- [ ] Company filtering works
- [ ] Bottom nav switches pages correctly
- [ ] Breadcrumb updates on navigation
- [ ] Mobile responsive (test on 375px)
- [ ] Interview questions load correctly
- [ ] Success stories display properly
- [ ] Logout clears auth & redirects to home

---

## 📝 Files to Create

```
src/
├── pages/
│   ├── LandingView.jsx
│   ├── AuthView.jsx
│   ├── LevelSelectView.jsx
│   ├── RoleHubView.jsx
│   ├── CompanyDiscoveryView.jsx
│   ├── CompanyProfileView.jsx
│   ├── GuideView.jsx
│   ├── InterviewPrepView.jsx
│   ├── SuccessStoriesView.jsx
│   ├── ChatView.jsx
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
│   │   ├── LoginForm.jsx
│   │   └── SignupForm.jsx
│   └── Shared/
│       ├── Badge.jsx
│       └── ProtectedRoute.jsx
│
├── context/
│   ├── AuthContext.js
│   ├── UserContext.js
│   └── NavigationContext.js
│
├── data/
│   ├── roles.json
│   └── companies.json
│
├── styles/
│   └── globals.css (Tailwind)
│
├── App.jsx
└── index.jsx
```

---

## 🚀 Ready to Start?

1. **Setup**: Create React app, install React Router, Tailwind
2. **Import Data**: Copy roles.json and companies.json to /src/data/
3. **Build**: Follow the 5-phase plan
4. **Test**: Use the testing checklist
5. **Deploy**: Push to GitHub Pages or similar

**Total estimated time: 10-14 days for a single developer**

---

## Questions to Ask While Building

- Should saved items persist on refresh? (Use localStorage)
- Do we need email verification? (Skip for MVP)
- Should interview questions have videos? (Use placeholder URLs)
- Should chat have real AI? (Mock responses first)
- Should we track user progress? (Basic tracking in Context)

---

**Good luck! This is going to be awesome! 🎯**
