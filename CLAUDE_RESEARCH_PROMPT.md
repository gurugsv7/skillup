# 🚀 Research Prompt for Claude - QuickJob App Completion

Copy and paste this into a Claude conversation to get detailed research recommendations:

---

## Context
I'm building **QuickJob** - a mobile-first career guidance web app for IT/Tech roles (React + Vite + TypeScript + Tailwind CSS). It's 35% complete with:
- ✅ 12 pages scaffolded
- ✅ Static data (11 roles, 10 companies in JSON)
- ✅ Context API for state management
- ✅ Mock authentication & AI chatbot
- ❌ No backend/database
- ❌ No real API integrations
- ❌ Incomplete components

## Current Stack
- React 19.2.4 + Vite 6.2.0 + TypeScript
- Tailwind CSS styling
- Context API state management
- Google Gemini SDK (imported but not integrated)
- Deployed on AI Studio

---

## 🎯 QUESTION 1: Backend & Database Architecture

**I need to choose a backend solution. Please research and compare:**

1. **Firebase/Firestore** vs **Supabase** vs **MongoDB Atlas** vs **Custom Node.js + PostgreSQL**
   
   For each option, provide:
   - Pros & cons for a career guidance app with 10K-100K monthly users
   - Cost estimation (startup vs scale)
   - Authentication capabilities
   - Real-time data support
   - Offline support (if applicable)
   - Best practices for integration with React
   - Recommended database schema for:
     * User accounts (email, level, progress)
     * Role & company data
     * Interview history & results
     * Saved bookmarks
     * Resume/profile data

2. **Recommendation:** Which one would you recommend for MVP and why?

3. **Integration Pattern:** How should I structure the API calls in React (REST vs GraphQL)?

---

## 🎯 QUESTION 2: Authentication & User Management

**Research the best authentication approach:**

1. **JWT vs Session-based vs OAuth (Google/GitHub)**
   - Pros/cons for this use case
   - Security best practices
   - Mobile-friendly approach
   - Refresh token handling

2. **User Data to Store:**
   ```
   - Email & password (hashed)
   - Career level (Student/Graduate/Pro)
   - Selected role & company
   - Interview attempts & scores
   - Bookmarked roles/companies/jobs
   - Resume data
   - Learning progress
   - Created at / Updated at timestamps
   ```

3. **Provide:** Ready-to-use authentication flow code example

---

## 🎯 QUESTION 3: Job Listings API Integration

**I need real job data. Please research:**

1. **Free/Affordable Job Board APIs:**
   - LinkedIn Jobs API (if available)
   - Indeed API
   - JoinHire API
   - GitHub Jobs API
   - Custom job scraping approach
   
   For each: Cost, data available, authentication, rate limits, quality

2. **Alternative:** Is it better to:
   - Scrape jobs from company career pages?
   - Maintain a manual job database initially?
   - Use a third-party job aggregator?

3. **Data mapping:** How to map job data to my system (role-based filtering)?

4. **Update frequency:** How often should job data be refreshed?

---

## 🎯 QUESTION 4: AI Chatbot Integration (Gemini API)

**I have the Gemini SDK imported but not integrated. Research:**

1. **Gemini API Setup:**
   - Cost per request/token
   - Rate limiting recommendations
   - Best practices for character/token limits
   - Error handling & fallback strategies

2. **Prompt Engineering for Career Guidance:**
   - Effective system prompts for the chatbot
   - How to provide context (user profile, selected role, company)
   - Example prompts for common use cases:
     * "Help me prepare for interviews"
     * "Is this role right for me?"
     * "What skills do I need?"
     * "Tell me about company X"

3. **Implementation Pattern:**
   - How to structure API calls from React
   - Streaming responses vs batch
   - Caching strategy for common questions
   - Cost optimization for high volume

4. **Provide:** Code example for integrating Gemini in a React component

---

## 🎯 QUESTION 5: Content & Data Strategy

**Research sources for content:**

1. **Interview Questions:**
   - Where to source 100+ quality interview questions per role?
   - Legal/licensing concerns?
   - Community-curated sources?
   - Video solution resources?

2. **Success Stories:**
   - Best practices for collecting/validating success stories
   - Legal compliance for publishing user stories
   - How to incentivize contributions?

3. **Learning Resources:**
   - Best free course aggregator APIs or websites
   - Documentation & tutorial repositories
   - Practice platform integrations

4. **Company Data Enhancement:**
   - Where to get salary data by role/level/location?
   - Interview experience aggregators?
   - Culture & review data sources?

---

## 🎯 QUESTION 6: Deployment & Hosting

**Research deployment options:**

1. **Platform Comparison:** Vercel vs Netlify vs AWS Amplify vs Azure Static Web Apps
   - Cost for startup phase
   - Frontend hosting
   - Backend/Function hosting (if needed)
   - Database hosting integration
   - CI/CD setup difficulty
   - Scaling to 10K+ users

2. **Serverless Backend Option:**
   - Should I use serverless functions or traditional backend?
   - Cost comparison
   - Best practices for this use case

3. **Domain & SSL:** How to set up custom domain with SSL?

4. **Environment Management:** Best practices for dev/staging/production

---

## 🎯 QUESTION 7: Monitoring, Analytics & Error Tracking

**Research production monitoring setup:**

1. **Error Tracking:** Sentry vs LogRocket vs Rollbar
   - Cost estimation
   - Setup difficulty
   - Usefulness for React apps

2. **Analytics:** Google Analytics vs Mixpanel vs Amplitude
   - Events to track for a career guidance app
   - User funnel tracking
   - Retention metrics

3. **Performance Monitoring:** Which tools to use?

4. **Logging Strategy:** Where to log backend errors?

---

## 🎯 QUESTION 8: Security & Compliance

**Research legal & security requirements:**

1. **Privacy Policies & Terms:**
   - Template requirements for a career guidance app
   - Data collection disclosure
   - GDPR & CCPA compliance checklist

2. **Security Best Practices:**
   - CORS setup
   - Rate limiting
   - Input validation
   - SQL injection prevention
   - XSS protection

3. **Data Security:**
   - Password hashing (bcrypt vs argon2)
   - Sensitive data encryption
   - PII handling compliance

---

## 🎯 QUESTION 9: Performance & Scalability

**Research optimization strategies:**

1. **For 10K Monthly Users:**
   - Estimated database queries per second
   - Caching strategy (Redis)
   - CDN for static assets
   - Database indexing strategy

2. **Frontend Performance:**
   - Code splitting strategy
   - Image optimization
   - Bundle size targets
   - Lighthouse score targets

3. **Backend Performance:**
   - API response time targets
   - Database query optimization
   - Connection pooling

---

## 🎯 QUESTION 10: Development Timeline & Cost Estimation

**Research realistic estimates:**

1. **Development Effort:**
   - Estimated hours for backend setup
   - Estimated hours for integration work
   - Estimated hours for testing
   - Timeline: Weeks or months?

2. **Infrastructure Costs (First Year):**
   - Database hosting
   - Backend/Function hosting
   - AI API usage
   - Job API subscriptions
   - Email service
   - Monitoring tools
   - Total monthly/yearly estimate

3. **Free Alternatives:** Are there any free tiers I should use initially?

---

## 📋 FINAL RECOMMENDATIONS

After researching these topics, please provide:

1. **Recommended Tech Stack** for MVP
2. **Implementation Roadmap** (phases & timeline)
3. **Rough Cost Estimate** for first 3-6 months
4. **Top 3 Risks** and mitigation strategies
5. **Top 3 Opportunities** for quick wins

---

## 📁 Deliverables Expected

Please provide for each question:
- **Research Summary** (2-3 paragraphs)
- **Options & Comparison** (table format preferred)
- **Recommendation** (with reasoning)
- **Code Examples** (if applicable)
- **Action Items** (concrete next steps)

---

**Use this prompt with Claude for comprehensive research support for QuickJob completion!**
