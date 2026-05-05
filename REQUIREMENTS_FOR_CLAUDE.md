# QuickJob App - Complete Requirements Research Document

## 🎯 Project Overview
**App Name:** QuickJob (Decode AI Career Catalyst)  
**Purpose:** A mobile-first career guidance web app helping students, graduates, and professionals choose and prepare for IT/Tech careers  
**Current Status:** 35% Complete - Foundation phase done, Phase 2 (Component Enhancement) 60% complete  
**Target:** Fully working production-ready app

---

## 📱 App Architecture

### Tech Stack (Current)
- **Frontend Framework:** React 19.2.4
- **Build Tool:** Vite 6.2.0
- **Language:** TypeScript 5.8.2
- **Styling:** Tailwind CSS (custom theme in index.css)
- **State Management:** Context API (AppContext.tsx)
- **Animations:** Motion library 12.38.0
- **AI SDK:** Google GenAI 1.41.0 (Gemini)

### Deployment
- **Platform:** AI Studio (https://ai.studio/apps/f6ab3b01-fac6-47fc-9a6b-a0dd6dd0e046)
- **Environment:** Node.js required locally
- **Configuration:** .env.local file for API keys

---

## 📊 Data Sources & Integration Needs

### Current Data (Static JSON Files)
✅ **roles.json** - 11 tech roles with:
  - Learning paths (Beginner/Intermediate/Advanced)
  - Required tools & skills
  - Companies hiring each role
  - Timeline & difficulty

✅ **companies.json** - 10 companies with:
  - Company tiers (FAANG, Startup, Product, Service, Remote)
  - Hiring status (High/Regular/Occasional)
  - Tech stacks & requirements
  - Interview processes & timelines
  - Success stories with salary data

### Missing/Needed:
1. **Real Job Listings API** - Currently using mock data in JobListView.tsx
   - Need: Real job postings from job boards or company APIs
   - Integration: LinkedIn Jobs API, Indeed API, or custom backend

2. **Interview Questions Database** - In JSON but not fully integrated
   - Need: Curated, categorized interview questions per role/company
   - Should include: Difficulty levels, answer patterns, video solutions

3. **Video Content** - For interview prep guidance
   - Need: Interview technique videos, company culture videos, prep tutorials
   - Storage: YouTube embeds, AWS S3, or Vimeo

4. **Skill Assessment Data** - For resume scoring
   - Need: Scoring algorithms for tech skills
   - Integration: With user profile & role requirements

---

## 🔐 Backend & Authentication Needs

### Current State (Mock Only)
- Email/password stored in localStorage
- No actual user database
- No persistent backend

### Needed for Production:
1. **Backend Server** - API endpoints for:
   - User authentication (signup/login/logout)
   - User profile management
   - Storing user progress & bookmarks
   - Saving interview prep history
   - Analytics tracking

2. **Database** - For storing:
   - User accounts & passwords (hashed)
   - User profiles (career level, selected roles/companies)
   - User progress tracking
   - Bookmarked roles/companies/jobs
   - Completed interviews/modules
   - Saved resume data

3. **Authentication Method:**
   - JWT tokens or session-based auth
   - OAuth integration (Google, GitHub)
   - Email verification system

4. **Database Options to Research:**
   - Firebase/Firestore (serverless)
   - Supabase (PostgreSQL with Auth)
   - MongoDB Atlas (NoSQL)
   - AWS RDS (Relational)

---

## 🤖 AI/Chatbot Integration

### Current State (Mock Only)
- ChatView.tsx has hardcoded mock responses
- No actual AI integration despite Gemini API SDK import

### Needed for Production:
1. **Gemini API Setup:**
   - API key management (.env.local: GEMINI_API_KEY)
   - Prompt engineering for career guidance
   - Response streaming/chunking

2. **Chatbot Capabilities:**
   - Role recommendations based on user skills
   - Interview preparation coaching
   - Resume review guidance
   - Company culture & fit assessment
   - Skill gap analysis
   - Career path recommendations
   - Personalized learning suggestions

3. **Real Integration Points:**
   - Connect to user's saved profile data
   - Access company & role database
   - Analyze interview history
   - Provide contextual guidance

---

## 📋 Incomplete Components & Views

### Partially Implemented (Needs Completion):
1. **LevelSelectView** - Scaffolded, needs final styling
2. **CompanyProfileView** - Basic structure, needs full data integration
3. **GuideView** - Needs implementation
4. **InterviewPrepView** - Basic structure, needs:
   - Real interview questions database
   - Ability to filter by company/role
   - Mock interview recording/playback
   - Question difficulty ratings
5. **SuccessStoriesView** - Data ready, needs rich display
6. **ChatView** - Needs real Gemini AI integration
7. **ProfileHubView** - Basic structure, needs:
   - User progress dashboard
   - Resume upload/preview
   - Skill assessment results
   - Saved bookmarks
   - Learning streak tracking
8. **JobListView** - Using mock data, needs real job listings

### Missing Components:
- Resume upload & preview
- Video interview preparation tool
- Skill assessment quiz
- Progress tracking dashboard
- Notification system
- Bookmarks/favorites system
- Progress saving system

---

## 🔧 Critical Technical Setup Needed

### Environment Configuration:
```
NEEDED IN .env.local:
- GEMINI_API_KEY (for AI chatbot)
- VITE_API_BASE_URL (backend API URL)
- VITE_ENVIRONMENT (development/staging/production)
```

### Build & Deployment:
1. Build process (`npm run build`)
2. Production hosting (Vercel, Netlify, AWS Amplify, Azure Static Web Apps)
3. CI/CD pipeline
4. Error tracking (Sentry)
5. Analytics tracking (Google Analytics, Mixpanel)

### Database Hosting:
- Firebase/Firestore console setup
- Database credentials in environment variables
- Backup & recovery strategy

### API Integration:
- Job board APIs authentication
- Video hosting integration
- Email service (SendGrid, AWS SES) for verification

---

## 📑 Data Structure Gaps

### User Data Model Needs:
- Resume/CV storage
- Skill inventory
- Job application history
- Interview attempt history
- Learning progress tracking
- Bookmarked resources
- Achievement/badges system

### Extended Role Data Needs:
- Video tutorials for each skill
- Free resource links (courses, articles)
- Practice problem links
- GitHub project templates
- Cost of learning resources

### Extended Company Data Needs:
- Culture assessment data
- Salary trends by level/location
- Interview experience reviews
- Alumni network
- Internship opportunities
- Referral program details

---

## 🎨 UI/UX Features Still Needed

1. **Loading States** - Skeleton screens for data fetching
2. **Error Handling** - Error boundaries, retry mechanisms
3. **Form Validation** - Complete validation across all forms
4. **Animations** - Smooth transitions between views (currently basic)
5. **Responsive Design** - Full mobile/tablet/desktop testing
6. **Accessibility** - ARIA labels, keyboard navigation
7. **Search & Filter** - Enhanced search functionality
8. **Sorting Options** - Sort roles/companies/jobs by various criteria
9. **Favorites/Bookmarks** - Save and manage favorites
10. **Share Functionality** - Share roles/companies with friends

---

## 🚀 Deployment & DevOps

### Needed:
1. **Hosting Platform** Selection:
   - Vercel (recommended for Vite + React)
   - Netlify
   - AWS Amplify
   - Azure Static Web Apps

2. **Domain & SSL:**
   - Custom domain registration
   - SSL certificate setup

3. **CDN:**
   - Static asset caching
   - Global content distribution

4. **Monitoring:**
   - Error tracking (Sentry, LogRocket)
   - Performance monitoring (New Relic, DataDog)
   - Uptime monitoring

5. **Backup & Security:**
   - Database backups
   - Disaster recovery plan
   - Security audit

---

## 📊 Analytics & Tracking

### Needed:
1. **User Behavior Analytics:**
   - Page views, user flows
   - Feature adoption rates
   - Conversion funnels

2. **Error Tracking:**
   - Exception reporting
   - Performance issues
   - Network errors

3. **Business Metrics:**
   - User acquisition
   - Retention rates
   - Engagement metrics

---

## 🎓 Content & Data Research Needs

### Interview Questions Repository:
- 100+ questions per role/company
- Organized by difficulty & topic
- Video solutions & explanations
- Community-contributed answers

### Success Stories Database:
- More detailed success stories (current: basic)
- Video testimonials
- Resume samples
- Interview prep strategies used

### Learning Resources:
- Free course links (Udemy, Coursera, freeCodeCamp)
- Documentation links
- Tutorial channels
- Practice platforms (LeetCode, HackerRank)

### Company Data Enhancement:
- More companies (currently 10)
- Detailed interview processes
- Real salary data by level
- Work culture reviews
- Benefits & perks details

---

## 🔄 Phase 3-5 Implementation Checklist

### Phase 3: Wire Up Navigation (1-2 days)
- [ ] Complete all routing between 12 views
- [ ] Test breadcrumb updates on navigation
- [ ] Test bottom nav bar routing
- [ ] Test back button behavior

### Phase 4: Core Features (2-3 days)
- [ ] Complete role filtering & search
- [ ] Complete company filtering by category
- [ ] Implement company-role mapping (show only relevant companies)
- [ ] Build resume score calculator
- [ ] Integrate interview question display
- [ ] Display success stories properly
- [ ] Mock AI chat responses → Real Gemini integration
- [ ] Save to profile/bookmarks functionality
- [ ] Progress tracking calculation

### Phase 5: Polish (1-2 days)
- [ ] Mobile responsiveness across all components
- [ ] Loading states & skeletons
- [ ] Error handling & validation
- [ ] Animations & transitions
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Security review

---

## ❓ Key Questions for Claude Research

Use Claude to research and provide:

1. **Database Selection:**
   - Pros/cons of Firebase vs Supabase vs MongoDB for this use case
   - Cost estimation for 10K-100K monthly users
   - Integration patterns with React

2. **Backend Architecture:**
   - Recommended API design (REST vs GraphQL)
   - Authentication best practices (JWT vs OAuth)
   - Rate limiting & security considerations

3. **Job API Integration:**
   - Best free/affordable job board APIs
   - Data structure mapping to our system
   - Real-time vs batch update strategies

4. **Gemini AI Integration:**
   - Prompt engineering for career guidance
   - Cost estimation for AI usage
   - Fallback strategies for rate limiting

5. **Deployment Strategy:**
   - Cost comparison: Vercel vs Netlify vs AWS vs Azure
   - Serverless functions for backend (if needed)
   - Environment management best practices

6. **Content Strategy:**
   - Where to source interview questions
   - How to validate success stories
   - Legal/compliance for career guidance content

7. **Scale & Performance:**
   - Estimated load for 10K concurrent users
   - Caching strategies
   - Database indexing for common queries

8. **Compliance & Legal:**
   - Privacy policy requirements
   - Data protection (GDPR, CCPA)
   - Terms of service for job/company data

---

## 💡 Next Steps

1. **Choose Backend:** Firebase, Supabase, or custom Node.js
2. **Set up Database:** Create schema for users, applications, progress
3. **Implement Authentication:** JWT/OAuth flow
4. **Integrate Gemini API:** Replace mock responses with real AI
5. **API Integration:** Connect real job listings
6. **Complete Components:** Finish all 12 views
7. **Testing:** Unit, integration, E2E tests
8. **Deploy:** Choose hosting platform & deploy
9. **Monitor:** Set up error tracking & analytics
10. **Iterate:** Collect user feedback & improve

---

**File Generated:** May 5, 2026  
**App Version:** 0.0.0  
**Status:** Ready for Claude AI Research
