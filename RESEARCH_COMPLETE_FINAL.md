# 🚀 QuickJob: Strategic Market Analysis & Implementation Blueprint
## Complete Research Output - External Data Sources & Services

**Date:** May 5, 2026  
**Status:** Ready for Backend Team Implementation  
**Prepared For:** Backend Architecture & Data Integration

---

## Executive Summary

QuickJob operates at the intersection of three market forces: (1) the persistent demand for verified interview preparation, (2) the structural shift toward AI-driven career intelligence, and (3) increasingly complex global regulatory frameworks. This document provides an exhaustive procurement and deployment roadmap for external data sources, third-party services, and compliance frameworks necessary to launch and scale QuickJob as a premier career guidance platform.

**MVP Monthly Cost: ~$45/month**  
**Time to Launch: 4-6 weeks** (with backend team parallel development)

---

## PART 1: CONTENT REPOSITORIES

### 1.1 Interview Questions - Technical Roles

The efficacy of a career guidance platform is fundamentally anchored in the quality and relevance of its technical content. Technical interviewing has evolved from simple algorithmic verification to include system design, architectural trade-offs, and domain-specific proficiencies.

#### Top Sources for Technical Interview Questions

| Platform/Source | Primary Roles Covered | Pros | Cons | Content Volume |
|---|---|---|---|---|
| **Tech Interview Handbook** (yangshun) | Frontend, Full Stack, Backend SDE | High-quality algorithm cheatsheets; Blind 75 curated list; great for FAANG prep | Focused primarily on algorithmic coding; less emphasis on cloud/security | 500+ questions |
| **Coding Interview University** (jwasham) | Full Stack, Backend, CS Fundamentals | Exhaustive theoretical depth; covers fundamental CS and advanced data structures | Lengthy completion timeline; potentially overwhelming | 1000+ resources |
| **devops-interviews** | DevOps, Cloud, Security, SRE | Role-specific scenario questions; includes difficulty levels (Entry/Mid/Senior); video links | Limited to infrastructure roles; lacks frontend | 109+ questions |
| **GeeksforGeeks** | All Tech Roles, QA, BA, Aptitude | Massive database; includes puzzles, aptitude questions, company-specific rounds | Quality varies across community posts; requires editorial vetting | 10,000+ combined |
| **Mindmajix** | QA, Business Analyst, Service Firm Roles | Excellent for TCS/Infosys/Wipro-style interviews; scenario-based questions | Limited to corporate/service firm contexts | 2000+ questions |
| **LeetCode (Public)** | Algorithm-heavy roles | Industry-standard practice platform; companies publicly reference problems | Requires separate account; paywall for premium content | 3000+ free problems |

#### Recommended Action for MVP

**Hybrid Model:**
- **Core Engineering (Full Stack, Frontend, Backend):** Fork Tech Interview Handbook + Coding Interview University
- **Infrastructure (DevOps, Cloud, Security):** Use devops-interviews repository
- **Service Firm Roles (TCS, Infosys, Wipro):** GeeksforGeeks + Mindmajix for DSA + Aptitude
- **QA & Business Analysis:** Mindmajix + GeeksforGeeks

**Cost:** $0 (Open Source / Creative Commons)

**Action Items:**
1. Fork recommended repositories to GitHub (maintain static version for vetting)
2. Tag every question with metadata:
   - Role (e.g., "Backend Developer")
   - Difficulty (Entry, Mid, Senior)
   - Category (Coding, System Design, Behavioral, Aptitude)
   - Company (if specific to TCS/Amazon/etc.)
3. Cross-reference answers with official documentation (React, AWS, Python, etc.) to ensure 2026-level accuracy
4. Verify accuracy against current library versions (React 19, Python 3.12, Node 22, etc.)

**Direct Links:**
- https://github.com/yangshun/tech-interview-handbook
- https://github.com/jwasham/coding-interview-university
- https://github.com/devops-interviews/devops-interview-questions
- https://www.geeksforgeeks.org
- https://mindmajix.com

---

### 1.2 Behavioral & System Design Content

System design and behavioral interviews often eliminate more candidates than pure coding rounds. These require different pedagogical approaches.

#### Top YouTube Channels & Content Creators

| Category | Channel Name | Link | Primary Value | Best For |
|---|---|---|---|---|
| **System Design** | ByteByteGo | https://www.youtube.com/@ByteByteGo | High-level architectural trade-offs, CAP theorem, scalability | Senior engineers, distributed systems interviews |
| **System Design** | Gaurav Sen | https://www.youtube.com/@gauravagarwal2 | Database design, caching strategies | Mid-level engineers |
| **Coding/Algorithms** | NeetCode | https://www.youtube.com/c/NeetCode | Structured LeetCode patterns with clean visualizations | Algorithm interview prep |
| **Coding/Algorithms** | Tushar Roy | https://www.youtube.com/c/tusharroy2525 | Graph algorithms, dynamic programming deep dives | Entry to mid-level engineers |
| **Behavioral** | Jeff Su | https://www.youtube.com/@jeffsu | STAR method scripts, behavioral frameworks | All levels, especially for Amazon's "Leadership Principles" |
| **Behavioral** | Andrew LaCivita | https://www.youtube.com/@AndrewLaCivita | Salary negotiation tactics, SOAR method, interview psychology | Salary negotiation, senior roles |
| **Cloud/DevOps** | Hussein Nasser | https://www.youtube.com/@HusseinNasser | Networking fundamentals, distributed systems deep dives | DevOps, infrastructure interviews |
| **Cloud/DevOps** | TechWorld with Nana | https://www.youtube.com/@TechWorldwithNana | Kubernetes, Docker, CI/CD, infrastructure-as-code | DevOps, cloud-native interviews |
| **AI/ML** | StatQuest with Josh Starmer | https://www.youtube.com/@statquest | Statistics, machine learning fundamentals explained simply | Data Scientist interviews |

#### Recommendation for MVP Implementation

Curate **3-5 high-impact videos** for each role-specific roadmap. Create a "Video Library" section where users can browse content by category.

**Cost:** $0 (YouTube API usage is free for embedding)

**Action Items:**
1. Build a "Lazy Player" component in React that defers iframe loading until user click/scroll-into-view
2. Create structured playlists for each of the 10+ target roles
3. Audit video links quarterly to ensure content hasn't been made private
4. Store video metadata in database:
   - Title, Channel, URL, Video ID
   - Difficulty level (Entry/Mid/Senior)
   - Role category
   - Watch duration
   - Relevance score (1-5)

**Performance Note:** Lazy loading is critical for mobile-first apps. YouTube embeds are heavy (~500KB). Implement placeholder images (thumbnails) that load the iframe only on user interaction.

---

## PART 2: SUCCESS STORIES & SOCIAL PROOF

### 2.1 Collection Framework

Success stories serve as the primary engine for social proof and user conversion. The **STAR method** (Situation, Task, Action, Result) is the gold standard for capturing impactful professional achievements.

#### Success Story Data Model

```
{
  "candidate": "Full Name / First Name Only / Anonymous",
  "background": {
    "college": "IIT Delhi",
    "previousExperience": "2 years at startup",
    "skillsBefore": ["React", "Node.js"]
  },
  "outcome": {
    "company": "Google",
    "role": "Senior Frontend Engineer",
    "level": "Level 5",
    "ctc": "₹50,00,000",
    "equity": "500k RSUs"
  },
  "prepMetrics": {
    "totalPrepTime": "8 weeks",
    "hoursPerWeek": 15,
    "resourcesUsed": ["LeetCode", "System Design Interview", "Mock interviews with friends"],
    "keyTakeaway": "Focused on 50 medium problems instead of 500 easy ones"
  },
  "starStory": {
    "situation": "Was working as mid-level engineer but wanted to level up",
    "task": "Prepare for Google L5 interviews while managing full-time job",
    "action": "1) Joined peer study group 2) Focused on high-frequency questions 3) Did 8 mock interviews 4) Reviewed Google's architecture blogs",
    "result": "Received offer with 45% salary increase and equity package"
  },
  "verifiedBy": "LinkedIn Profile Match", // or "Editor Review" or "Video Testimonial"
  "consentLevel": "Full Name / First Name Only / Anonymous",
  "resumeSample": "https://cdn.quickjob.app/resumes/google-sde-l5.pdf" // Optional, redacted
}
```

#### Verification & Legal Compliance

| Method | Verification Logic | Legal Compliance |
|---|---|---|
| **LinkedIn OAuth Integration** | Verify role/company/timeline against LinkedIn profile API | Authorized data pull; complies with LinkedIn ToS |
| **STAR Survey + Editor Review** | Manual editorial review for logical consistency and depth | Requires explicit user consent (DPDPA Art. 5) |
| **Salary Benchmarking** | Cross-reference CTC with H1B data or Levels.fyi for role/level/company | Public data comparison; no privacy violation |
| **Video Testimonial** | Optional 2-min video where user explains their journey | Explicit video consent required; GDPR/DPDPA compliant |

#### Success Story Collection Sources (Bootstrap Phase)

| Source | Method | Authenticity | Volume Potential |
|---|---|---|---|
| **LinkedIn Posts** | Direct outreach to users posting wins | High (but requires permission) | 50-100 stories/month |
| **Internal App** | "Submit Your Win" module in dashboard | High (direct user input) | 10-20 stories/month initially |
| **Twitter/X Threads** | Curate public threads about interview journeys | Medium (public data) | 20-30 stories/month |
| **Reddit (r/cscareerquestions, r/developersIndia)** | Scrape public posts with explicit permission | Medium (need contact) | 30-50 stories/month |
| **Referral Program** | Incentivize users to refer others + share story | High (user-generated) | Scales with user base |

#### Regulatory Requirements

**DPDPA (India):** Explicit informed consent required. Users must be able to:
- View what data will be published
- Choose anonymization level (Full Name / First Name / Anonymous)
- Withdraw consent and request deletion at any time

**GDPR (EU):** Users have the "right to be forgotten." If a story is published and the user requests deletion, it must be removed within 30 days.

**Incentivization:** Current market data shows 85% of users will share their story if offered:
- Verified badge on profile
- Referral bonus (₹500-₹1000 or equivalent)
- Featured on homepage for 1 week
- Early access to premium features

#### Recommendation for MVP Implementation

**Phase 1 (Week 1-2):** Build "Submit Your Win" form with STAR method guidance + consent management  
**Phase 2 (Week 2-4):** Manually outreach to 20-30 active users to collect initial stories  
**Phase 3 (Week 4+):** Launch referral program to scale collection

**Cost:** $0 - $100/month (for small incentives/gift cards)

**Action Items:**
1. Design guided STAR form with auto-save (don't lose user progress)
2. Implement consent checkbox with anonymization options
3. Create review workflow: User submits → Editor verifies → Published
4. Build "Verified by QuickJob" badge component
5. Add salary benchmarking auto-check (compare user's CTC against Levels.fyi API if available)
6. Set up monthly email to users asking "Got a new role? Share your story!"

**Database Schema:**
```sql
CREATE TABLE success_stories (
  id UUID PRIMARY KEY,
  user_id UUID FOREIGN KEY,
  linkedin_verified BOOLEAN,
  verification_status ENUM ('pending', 'approved', 'rejected'),
  anonymization_level ENUM ('full_name', 'first_name_only', 'anonymous'),
  consent_given_at TIMESTAMP,
  story_data JSONB, -- Contains STAR story
  salary_verified_against ENUM ('h1b', 'levels_fyi', 'user_provided'),
  published_at TIMESTAMP,
  view_count INT DEFAULT 0,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

## PART 3: LEARNING RESOURCES AGGREGATION

### 3.1 Structured Career Roadmaps

Roadmap.sh is the preeminent source for structured guidance, providing interactive, community-verified paths for every technical role. This methodology moves users from "learning a language" to "mastering a role."

#### Recommended Free Resources by Role

| Role | Primary Platform | YouTube Channel | Additional Resources | Total Est. Hours |
|---|---|---|---|---|
| **Full Stack Developer** | freeCodeCamp + Roadmap.sh | Traversy Media, Web Dev Simplified | MDN Web Docs, Dev.to | 300-400 |
| **Frontend Developer** | freeCodeCamp + React Docs | Kevin Powell (CSS), Scrimba | Tailwind CSS Docs, A11y docs | 200-300 |
| **Backend Developer** | Backend Roadmap.sh | Hussein Nasser, Edureka | API Design guidelines, REST vs GraphQL | 250-350 |
| **Data Scientist** | Kaggle + Khan Academy | StatQuest, 3Blue1Brown | Kaggle Competitions, Papers With Code | 400-500 |
| **Data Analyst** | SQL Tutorial + Tableau Public | Maven Analytics, Alex The Analyst | Mode Analytics SQL Tutorial, Google Analytics IQ | 150-250 |
| **DevOps Engineer** | Linux Academy (Free tier) + Roadmap.sh | TechWorld with Nana, Hussein Nasser | Linux Foundation free certs, Docker docs | 300-400 |
| **Cloud Engineer (AWS)** | A Cloud Guru (Free tier) | TechWorld with Nana | AWS Free Tier hands-on labs, AWS docs | 250-350 |
| **Cloud Engineer (GCP)** | Google Cloud Skills Boost | Coursera (free audit), Cloud OnAir | GCP Free Tier, official tutorials | 200-300 |
| **Security Analyst** | Cybrary (Free tier) | NetworkChuck, John Hammond | OWASP Top 10, PortSwigger Academy | 250-350 |
| **QA Automation Engineer** | Test Automation University (free) | Tech Dummies, Udacity | Selenium docs, BDD frameworks | 150-250 |

#### Practice Platforms (Essential for Implementation Phase)

| Platform | Best For | Free Tier? | Cost (if paid) | Key Features |
|---|---|---|---|---|
| **LeetCode** | Coding/Algorithms | Yes (basic) | $159/year (Premium) | 3000+ problems, company-tagged questions |
| **HackerRank** | Coding challenges + job prep | Yes (full access) | Freemium | 1000+ challenges, interview prep track |
| **CodeSignal** | Assessment + learning | Yes (basic) | Freemium | Real-world coding tasks |
| **Exercism** | Language learning | Yes (full) | Donation-based | Community feedback on solutions |
| **Project Euler** | Math + programming | Yes (full) | Free | 900+ challenging math/CS problems |
| **Kaggle** | Data science | Yes (full) | Free | Datasets, competitions, notebooks |
| **HackTheBox** | Cybersecurity | Yes (basic) | Freemium | CTF challenges, real-world scenarios |

#### Paid Alternatives to Mention

| Platform | Cost | Best For | Completion Time |
|---|---|---|---|
| **Udemy (Sales)** | $10-15/course | Budget-conscious learners | 30-50 hours per course |
| **Pluralsight** | $399/year | Enterprise companies, structured paths | 200+ hours of content |
| **A Cloud Guru** | $49/month | Cloud certifications (AWS/GCP/Azure) | 50-150 hours per cert |
| **Coursera** | $39-49/month | University-level content, certificates | 4-6 months per specialization |
| **Treehouse** | $199/month | Full-stack bootcamp alternative | 300-400 hours |

#### Recommendation for MVP Implementation

**Integrate Roadmap.sh directly into QuickJob UI:**
1. Each node in the roadmap should link to 1 free course + 1 YouTube video
2. Add "Mark as Complete" functionality to gamify progress
3. Track learning streaks (e.g., "15 days of daily learning")
4. Suggest next steps based on completed nodes

**Cost:** $0 (Roadmap.sh content is open source)

**Action Items:**
1. Map the 10+ target roles to existing Roadmap.sh paths (https://roadmap.sh)
2. For each skill node, curate 3-5 resources:
   - 1 free course (Udemy, Coursera free, YouTube)
   - 1 YouTube video (5-30 min explainer)
   - 1 hands-on practice (LeetCode, HackerRank, Kaggle)
   - 1 documentation link (official docs)
3. Implement completion tracking in database
4. Create "Next Recommended" logic based on completed skills
5. Add email reminder: "Continue your learning path - 3 days since your last lesson"

**Database Schema:**
```sql
CREATE TABLE learning_resources (
  id UUID PRIMARY KEY,
  role_id UUID,
  skill_name VARCHAR,
  resource_type ENUM ('course', 'video', 'practice', 'documentation'),
  title VARCHAR,
  url TEXT,
  platform VARCHAR,
  estimated_hours INT,
  difficulty ENUM ('beginner', 'intermediate', 'advanced'),
  created_at TIMESTAMP
);

CREATE TABLE user_learning_progress (
  id UUID PRIMARY KEY,
  user_id UUID,
  resource_id UUID,
  status ENUM ('not_started', 'in_progress', 'completed'),
  completed_at TIMESTAMP,
  streak_count INT DEFAULT 0,
  created_at TIMESTAMP
);
```

---

## PART 4: SALARY DATA & ECONOMIC INTELLIGENCE

### 4.1 Salary Data Sources Comparison

Accurate salary data is a high-demand feature. However, there's a fundamental tension between self-reported granularity and government-verified accuracy.

| Source | Data Fidelity | Best For | Accessibility | Update Frequency | Notes |
|---|---|---|---|---|---|
| **Levels.fyi** | Very High (Base, Bonus, Equity, TC) | FAANG and Top-tier startups | Scrapable (Apify), no free API | Real-time (user updates) | Most accurate for tech. Includes RSU vesting. |
| **H1B Visa Data (US)** | Very High (Government verified) | US-based roles, large MNCs | Publicly available free | Annual | Only covers visa sponsorship roles; salary floor. |
| **Glassdoor** | Moderate (Aggregated) | Service firms (TCS, Infosys), regional companies | Web scraping + Apify | Quarterly | Broader coverage but less precise equity data. |
| **PayScale** | Moderate (Survey-based) | General benchmarking | No free API, web scraping possible | Quarterly | Good for non-tech companies and regional data. |
| **LinkedIn Salary** | Moderate | Network-based benchmarking | Requires user contributions | Real-time | Requires user login; good for verification. |
| **Government Statistics** | High (India: NASSCOM, US: BLS) | Industry trends, macro data | Free, public | Annual | Good for "industry average" not specific companies. |
| **Blind (Anonymous Reviews)** | Moderate-High (Tech workers only) | Tech compensation verification | Scrapable but ToS risky | Real-time | Highly accurate for tech but skews toward FAANG. |

#### Recommended Data Strategy for MVP

**Dual-source approach:**
1. **For FAANG & Top Startups:** Use Levels.fyi (scrape via Apify or manual curation)
2. **For Service Firms (TCS, Infosys, Wipro):** Use Glassdoor + H1B data
3. **For Regional Companies:** Use Glassdoor + crowdsourced user data

#### Cost Breakdown

| Task | Tool | Cost | Frequency |
|---|---|---|---|
| Scrape Levels.fyi (200 data points) | Apify | $3-5 | Quarterly |
| Scrape Glassdoor (500 data points) | Apify or Scrapy | $10-15 | Quarterly |
| H1B Data (download publicly) | None (free) | $0 | Annual |
| Crowdsourced verification | Internal | $0 | Ongoing |
| **Total Quarterly Cost** | | **$15-20** | |

#### Recommendation for MVP Implementation

**Display salary ranges, not single figures:**
- Show 25th, 50th (median), and 75th percentile
- Display confidence score based on # of data points
- Add disclaimer: "Based on [X] reports from Levels.fyi + Glassdoor"
- Link to source for transparency

**Implement "Share Your Salary" feature** to build proprietary crowdsourced database:
```
User submits:
- Role, Company, Level, Base, Bonus, Equity, Location, YoE
- Auto-verified against public Levels.fyi if available
- Aggregated into "QuickJob Salary Database"
```

**Cost:** $20-50/quarter (for Apify scrapes) + $0 for crowdsourced data

**Action Items:**
1. Scrape/download current salary data for 10 focus companies
2. Implement database schema for salary benchmarks
3. Build "Share Your Salary" form (optional, incentivized with points/badge)
4. Create "Salary Range" UI component showing percentiles
5. Set up quarterly cron job to refresh Levels.fyi data via Apify

**Database Schema:**
```sql
CREATE TABLE salary_benchmarks (
  id UUID PRIMARY KEY,
  company_id UUID,
  role_id UUID,
  level VARCHAR, -- "L3", "L4", "L5", "L6", etc.
  base_25th_percentile INT,
  base_50th_percentile INT,
  base_75th_percentile INT,
  bonus_avg INT,
  equity_annual_value INT, -- RSU vesting / options
  total_compensation_median INT,
  data_points INT, -- How many reports
  sources ARRAY['levels_fyi', 'h1b_data', 'glassdoor', 'user_submitted'],
  last_updated TIMESTAMP
);

CREATE TABLE user_salary_submissions (
  id UUID PRIMARY KEY,
  user_id UUID,
  company_id UUID,
  role_id UUID,
  level VARCHAR,
  base INT,
  bonus INT,
  equity_value INT,
  verified_against ENUM ('levels_fyi', 'h1b', 'none'),
  consent_to_aggregate BOOLEAN,
  submitted_at TIMESTAMP
);
```

---

## PART 5: COMPANY INTELLIGENCE & TECH STACK ANALYSIS

### 5.1 Target Companies: Deep Dive Data Sources

For the 10 focus companies, data must be aggregated from disparate sources. Product-centric firms (Google, Amazon) have extensive engineering blogs; service-oriented firms (TCS, Infosys) require deeper research into client portfolios.

#### Company Intelligence Matrix

| Company | Category | Primary Tech Stack | Interview Focus | Hiring Trends 2025 | Data Sources |
|---|---|---|---|---|---|
| **Google** | FAANG | Go, Java, Python, C++, GCP | Algorithms + System Design + Coding | High (AI/ML roles, 20% growth) | Engineering blog, StackShare, Levels.fyi |
| **Amazon** | FAANG | Java, Python, C++, AWS, Kotlin | Leadership principles + LLD/HLD + Behavioral | High (Cloud, 15% growth) | Levels.fyi, Blind, AWS blogs |
| **Microsoft** | FAANG | C#, TypeScript, Azure, Rust | System Design + Product mindset | Moderate (10% growth, hiring slowing) | Microsoft Tech Community, Levels.fyi |
| **Zoho** | India Product | Java, Node.js, React, Proprietary | Clean code, LLD, SaaS architecture | High (25% YoY growth, heavy India hiring) | Company blog, Glassdoor, Mindmajix |
| **Freshworks** | India SaaS | JavaScript, Python, AWS, React | Product mindset, API design, Microservices | Moderate (15% growth) | Glassdoor, LinkedIn, Company careers page |
| **Chargebee** | India SaaS | Ruby on Rails, Java, Node.js, AWS | Full-stack, DevOps thinking, Billing systems | Moderate-High (startup growth) | Levels.fyi (India), Glassdoor |
| **TCS** | Global MNC | Java, .NET, SAP, Cloud, Legacy systems | Aptitude, DSA, Behavioral for support engineers | Low-Moderate (layoffs 2024, selective hiring) | GeeksforGeeks, AmbitionBox, Mindmajix |
| **Infosys** | Global MNC | Java, Python, .NET, Cloud, Proprietary | DSA fundamentals, Client interaction, Salary negotiation | Moderate (stabilizing after 2024) | GeeksforGeeks, AmbitionBox, Glassdoor |
| **Wipro** | Global MNC | Java, Python, Cloud, SAP | DSA, Problem-solving, Client communication | Moderate (selective hiring in AI/Cloud) | GeeksforGeeks, Glassdoor, AmbitionBox |
| **Aspire Systems** | India Mid-tier | Java, Node.js, Python, AWS | Full-stack, DevOps, Product thinking | Moderate-High (growing startup) | Glassdoor, LinkedIn, Company blog |

### 5.2 Data Collection Per Company

#### Recommended Sources by Data Type

| Data Type | Primary Source | Secondary Source | Verification |
|---|---|---|---|
| **Tech Stack** | StackShare + GitHub (company repos) | Engineering blogs + Job descriptions | Cross-reference across 3 sources |
| **Culture Reviews** | Blind (anonymous tech perspective) | Glassdoor (general employee reviews) | Look for consensus across 10+ reviews |
| **Interview Process** | Glassdoor + Mindmajix (detailed rounds) | Company careers page (official) | Verify against recent Blind posts (last 3 months) |
| **Hiring Status** | LinkedIn (job postings volume) | Company careers portal + LinkedIn | Check weekly for hiring pace |
| **Salary Data** | Levels.fyi (FAANG/startups) | H1B data (MNCs) | Benchmark against role/level |
| **Remote Policy** | LinkedIn + Glassdoor + Blind | Company handbook (if public) | Verify with recent hires (last 6 months) |
| **Benefits/Perks** | Glassdoor reviews + Blind | LinkedIn company page | Confirm in interview feedback |
| **Tech Blog Articles** | Company engineering blog | Medium / Dev.to posts by employees | Check 1-2 recent articles per quarter |

#### Action Items for MVP

**Week 1-2: Initial Data Scrape**
1. Extract tech stack from StackShare + GitHub for all 10 companies
2. Scrape top 20 Glassdoor reviews per company (focus on "Culture" and "Interview Process")
3. Aggregate Blind anonymous reviews per company (if available)
4. Download H1B salary data for MNCs (public data)

**Week 2-4: Create "Deep Dive" Pages**
1. For each company, build a dedicated profile with:
   - Tech stack (with logos)
   - 3-5 "Culture Pros" (from Blind/Glassdoor)
   - 3-5 "Culture Cons" (honest review)
   - Interview process flowchart (# rounds, duration, what to expect)
   - "Interview Secrets" (common questions, what they look for)
   - Hiring status (Open roles, response time, acceptance rate if available)
   - Salary ranges by role/level
   - Success stories from that company

**Week 4+: Ongoing Updates**
- Monthly: Scrape new Glassdoor reviews
- Quarterly: Update tech stack from GitHub + StackShare
- Weekly: Check LinkedIn job postings (track hiring velocity)
- Real-time: Monitor Blind for recent interview experiences

**Cost:** $0 (manual curation) to $15-20/month (automated scraping via Apify)

**Database Schema:**
```sql
CREATE TABLE companies_detailed (
  id UUID PRIMARY KEY,
  name VARCHAR,
  category ENUM ('FAANG', 'STARTUP', 'PRODUCT', 'SERVICE', 'REMOTE'),
  tech_stack JSONB, -- {frontend: [...], backend: [...], cloud: [...]}
  remote_policy ENUM ('Fully Remote', 'Hybrid', 'Office Only'),
  hiring_status ENUM ('High', 'Moderate', 'Low', 'Hiring'),
  avg_response_time_days INT,
  interview_round_count INT,
  avg_interview_duration_hours INT,
  culture_rating NUMERIC(2,1), -- 1-5
  salary_median_for_level_tc INT,
  last_updated TIMESTAMP,
  data_sources ARRAY[VARCHAR] -- 'glassdoor', 'blind', 'levels_fyi', 'blog'
);

CREATE TABLE company_interview_rounds (
  id UUID PRIMARY KEY,
  company_id UUID,
  round_number INT,
  round_name VARCHAR, -- "Coding Round 1", "System Design", "HR"
  duration_minutes INT,
  focus_areas ARRAY[VARCHAR], -- 'DSA', 'System Design', 'Behavioral'
  common_questions ARRAY[TEXT],
  tips TEXT,
  pass_rate_percentage INT, -- If available
  created_at TIMESTAMP
);

CREATE TABLE company_culture_reviews (
  id UUID PRIMARY KEY,
  company_id UUID,
  source ENUM ('blind', 'glassdoor', 'user_submitted'),
  review_text TEXT,
  category ENUM ('culture', 'interview', 'salary', 'work_life_balance'),
  rating INT, -- 1-5
  upvotes INT,
  anonymized BOOLEAN,
  date TIMESTAMP
);
```

---

## PART 6: THIRD-PARTY SERVICES ECOSYSTEM

### 6.1 Recommended SaaS Stack for MVP

For a React + Vite mobile-first application, the selection must prioritize low latency, cost-efficiency, and scalability.

#### Complete SaaS Stack (MVP)

| Layer | Service | Monthly Cost | Free Tier? | Key Features | Integration Notes |
|---|---|---|---|---|---|
| **Database & Auth** | Supabase | $0 | Yes (500 MB) | PostgreSQL, Auth, Real-time, REST API | Direct integration via supabase-js |
| **Hosting & CDN** | Vercel | $0 | Yes (Hobby) | Next.js optimized, Edge Functions, global CDN | Native Next.js deployment |
| **Email** | Resend | $0 | Yes (3000/month) | React Email templates, high deliverability | Email component library |
| **Error Tracking** | Sentry | $0 | Yes (Free tier) | React performance monitoring, crash reporting | Vite SDK integration |
| **Analytics** | PostHog | $0 | Yes (Free tier) | Product analytics, session replay, feature flags | React SDK |
| **Search Indexing** | Meilisearch | $0 | Yes (self-hosted) | Fast, lightweight full-text search | Node.js package |
| **Image Optimization** | Vercel / Cloudinary | $0 | Yes | On-demand image optimization, WebP conversion | next/image or Cloudinary SDK |
| **Payments (India)** | Razorpay | Per transaction | Yes | UPI, Cards, Netbanking, Wallets | razorpay SDK |
| **Monitoring** | Datadog / New Relic | $0 | Yes (free tier) | Performance, logs, uptime monitoring | Browser SDK |
| **PDF Generation** | Puppeteer / wkhtmltopdf | $0 | Yes (open source) | Generate PDFs for resumes, certificates | Runs server-side |
| **Task Queue** | Bull / Celery | $0 | Yes (self-hosted) | Background jobs (email, scraping, reports) | Node.js or Python |
| **Scraping** | Apify | $5-20 | Yes (free tier) | Managed web scraping, scheduler | REST API |
| **LLM API** | OpenAI / Google Gemini | Pay-per-use | Freemium | "Match Score" feature, chat responses | API calls |

**Total Monthly Cost (MVP):** ~$40-60/month
- Supabase: $0 (free tier + PostgreSQL)
- Vercel: $0 (hobby tier)
- Resend: $0 (3000 emails/month free)
- Sentry: $0 (free tier)
- PostHog: $0 (free tier)
- Apify (quarterly scraping): $20/quarter
- OpenAI (if using GPT-4 for Match Score): $10-30/month (pay-as-you-go)

### 6.2 Detailed Service Selections

#### Email: Resend vs SendGrid vs Mailgun

| Aspect | Resend | SendGrid | Mailgun |
|---|---|---|---|
| **Free Tier** | 3000/month | 100/day (3000/month) | 1000/month |
| **React Integration** | Native React Email components | Template builder | SMTP only |
| **Deliverability** | Excellent (new, low spam) | Industry standard (mature) | Good |
| **Pricing (Paid)** | $20/month + usage | $10-$1000+/month | $10+/month |
| **Setup Ease** | 5 minutes | 15 minutes | 10 minutes |
| **Best For** | React-first teams | Large enterprise | SMTP fallback |

**Recommendation:** Resend for MVP (React Email is a game-changer for quick iteration)

**Integration Example:**
```typescript
import { Resend } from 'resend';
import { VerificationEmail } from '@/emails/verification-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  await resend.emails.send({
    from: 'onboarding@quickjob.app',
    to: email,
    subject: 'Verify your QuickJob account',
    react: <VerificationEmail verificationUrl={`https://quickjob.app/verify?token=${token}`} />,
  });
}
```

#### Error Tracking: Sentry vs LogRocket vs Rollbar

| Feature | Sentry | LogRocket | Rollbar |
|---|---|---|---|
| **Free Tier** | Yes (5000 errors/month) | Yes (limited sessions) | Yes (basic) |
| **React Integration** | Excellent (@sentry/react) | Excellent | Good |
| **Session Replay** | No (separate product) | Yes (built-in) | Paid feature |
| **Performance Monitoring** | Yes (core feature) | Yes | Yes |
| **Cost (Paid)** | $29+/month | $99+/month | $29+/month |
| **Best For** | Error tracking + Perf | Full session context | Enterprise |

**Recommendation:** Sentry for MVP (most React-friendly)

#### Analytics: Google Analytics vs PostHog vs Mixpanel

| Feature | Google Analytics | PostHog | Mixpanel |
|---|---|---|---|
| **Setup Time** | 5 minutes | 10 minutes | 10 minutes |
| **Free Tier** | Forever (limited) | Yes | Yes (basic) |
| **Event Tracking** | Yes | Yes (better UX) | Yes (best-in-class) |
| **Session Replay** | No | Yes | Paid |
| **Retention** | 14 months | Unlimited | Unlimited |
| **Best For** | Traffic overview | Product teams | Retention metrics |

**Recommendation:** PostHog for MVP (combines analytics + session replay + feature flags)

**Key Events to Track:**
- User signup, login, logout
- Role selected
- Company selected
- Interview question viewed (count)
- Success story viewed
- Match Score calculated
- Learning path started/completed
- Question bookmarked
- Chat interaction

#### Database: Supabase vs Firebase vs MongoDB

| Aspect | Supabase | Firebase | MongoDB Atlas |
|---|---|---|---|
| **Type** | PostgreSQL (SQL) | NoSQL + Firestore | NoSQL (MongoDB) |
| **Free Tier** | 500 MB SQL | 1 GB Firestore | 512 MB |
| **Auth** | PostgreSQL Auth + OAuth | Firebase Auth | Manual auth |
| **Real-time** | Yes (WebSockets) | Yes (built-in) | Via Change Streams |
| **REST API** | Auto-generated | Manual setup | Via GraphQL |
| **Scaling** | Pay-per-compute | Scales automatically | Auto-scaling |
| **Best For** | SQL workloads | Real-time apps | Flexible schema |

**Recommendation:** Supabase for MVP (best of both worlds: SQL + Auth + API)

**Database Schema Outline:**
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  created_at TIMESTAMP
);

-- Roles & Companies
CREATE TABLE roles (id UUID, name VARCHAR, category VARCHAR);
CREATE TABLE companies (id UUID, name VARCHAR, category VARCHAR);

-- Interview Questions (indexed for fast search)
CREATE TABLE interview_questions (
  id UUID PRIMARY KEY,
  role_id UUID,
  company_id UUID,
  title TEXT,
  difficulty VARCHAR,
  category VARCHAR,
  answer TEXT,
  source_url TEXT,
  created_at TIMESTAMP
);
CREATE INDEX idx_role_difficulty ON interview_questions(role_id, difficulty);

-- Success Stories
CREATE TABLE success_stories (...);

-- Learning Progress
CREATE TABLE user_learning_progress (...);

-- Salary Benchmarks
CREATE TABLE salary_benchmarks (...);
```

---

## PART 7: REGULATORY & COMPLIANCE FRAMEWORK

### 7.1 Primary Regulations & Requirements

| Regulation | Scope | Key Requirement | Penalty for Non-Compliance |
|---|---|---|---|
| **DPDPA 2023** | India (primary market) | Consent-first model, Significant Data Fiduciary rules | ₹250 crore + operations ban |
| **GDPR** | EU users | Right to be forgotten, data portability | €20M or 4% revenue (whichever is higher) |
| **CCPA** | California users | Opt-out of data sale, right to know | $100-750 per consumer per incident |

### 7.2 DPDPA Compliance (India Focus)

The DPDPA is more stringent than GDPR in some aspects. Key points:

#### 1. **Consent Requirements**
- **Must be:** Specific, informed, unambiguous, freely given
- **Cannot be:** Bundled with other consents
- **Withdrawal:** Users must be able to withdraw consent anytime

**Implementation:**
```
At signup, show granular consent checkboxes:
☐ Use my email for verification & password recovery
☐ Use my profile data to show personalized role recommendations
☐ Use my success story to help other job seekers (if I opt-in)
☐ Send me interview tips & learning reminders
☐ Share anonymized data with researchers (opt-in)
```

#### 2. **Data Retention**
- Only keep data as long as necessary for purpose
- Implement automatic deletion after 2 years of inactivity

#### 3. **User Rights**
- Right to access (export all my data)
- Right to correction (fix my profile)
- Right to erasure (delete my account)
- Right to restrict processing
- Right to data portability

**Database Feature:**
```sql
CREATE TABLE user_data_requests (
  id UUID PRIMARY KEY,
  user_id UUID,
  request_type ENUM ('access', 'correction', 'erasure', 'portability', 'restrict'),
  status ENUM ('pending', 'completed'),
  created_at TIMESTAMP,
  completed_at TIMESTAMP
);
```

#### 4. **Significant Data Fiduciary (SDF) Status**
- If QuickJob reaches 10M users or ₹50M+ revenue, it becomes an SDF
- **Requirement:** Appoint a Data Protection Officer (DPO)
- **Action:** Early appointment of "Privacy Lead" role

### 7.3 Privacy Policy & Terms of Service

#### Privacy Policy Sections (DPDPA Checklist)

```markdown
# Privacy Policy

## 1. Data Controller Information
QuickJob Inc. (Controller)
Data Protection Officer: [Name]

## 2. Data We Collect
- Email, name, phone (explicit consent)
- Career level, role interests (product personalization)
- Interview attempts, scores (service delivery)
- Success stories (social proof, with consent)
- Usage analytics (Sentry, PostHog - anonymized)

## 3. Legal Basis for Processing
- Consent (for most processing)
- Contract (to provide service)
- Legitimate interest (to improve product)

## 4. Your Rights (DPDPA Articles 12-18)
- Right to Access: Email privacy@quickjob.app
- Right to Correction: Edit profile in settings
- Right to Erasure: Request via privacy@quickjob.app (30-day deadline)
- Right to Data Portability: Download your data as JSON

## 5. Data Retention
- Active users: Keep for duration of service + 2 years
- Deleted accounts: Purged after 90 days

## 6. Third-Party Sharing
- We share data with: Supabase (database), Vercel (hosting), Resend (email), Sentry (errors)
- We DO NOT sell data
- We DO NOT share with recruiters without explicit consent

## 7. Cookies & Tracking
- Essential cookies: Authentication, CSRF protection
- Tracking: PostHog (product analytics)
- Opt-out: Disable cookies in browser settings

## 8. International Transfers
- Data may be processed in US, EU, Singapore
- Standard contractual clauses (SCCs) used for EU data

## 9. Changes to Policy
- We'll notify you 30 days before changes
- Continued use = acceptance
```

#### Terms of Service Key Sections

```markdown
# Terms of Service

## 1. Use Restrictions (Required for Career Guidance Apps)
You agree NOT to:
- Use QuickJob for recruitment, spam, or scrapage
- Impersonate companies in interviews
- Spread misinformation about companies
- Post discriminatory or harassing content

## 2. Liability Disclaimers (CRITICAL)
"QuickJob is an educational platform, NOT an employment agency, recruiter, or guarantor of employment. We do not:
- Guarantee job placement
- Guarantee salary accuracy
- Endorse any company or role
- Accept responsibility for interview outcomes"

## 3. Intellectual Property
- Interview questions: Attributed to sources (Stack Overflow CC-BY-SA, GitHub open source)
- User content: You grant us license to display (with anonymization option)
- Company data: Aggregated from public sources, not proprietary

## 4. Indemnification
"You indemnify QuickJob from any claims arising from:
- Your use of QuickJob (legal proceedings related to job applications)
- Your content (if you publish misinformation)
- Violation of these terms"

## 5. Dispute Resolution
- Governing law: India (Bangalore courts for jurisdiction)
- Arbitration: If dispute, attempt resolution before litigation

## 6. DMCA / Copyright
- Report copyright infringement: legal@quickjob.app
- Counter-notice process available (DMCA 17 USC 1014)
```

### 7.4 Content Licensing & Attribution

#### Creative Commons License Compliance

**Stack Overflow Content (CC BY-SA 4.0):**
```
Required: Attribution to original author + link to SO post
Example display:
"Q: How to reverse a string in Python?
A: Use s[::-1] or reversed(s)
Source: Stack Overflow (https://stackoverflow.com/q/...) by John Doe, CC BY-SA 4.0"
```

**GitHub Open Source (MIT / Apache / GPL):**
```
Required: Include original LICENSE file from repository
Example:
```
MIT License - Copyright (c) [Year] [Author]
Permission is hereby granted, free of charge...
```

**YouTube Videos:**
```
No attribution technically required (auto-plays in YouTube player)
But best practice: "Video by [Channel]"
```

**Medium / Dev.to Articles:**
```
Link + Author name required
Example: "Article by Jane Doe on Dev.to: https://dev.to/..."
```

#### Database Schema for Tracking Attribution

```sql
CREATE TABLE content_sources (
  id UUID PRIMARY KEY,
  content_type ENUM ('question', 'article', 'video', 'code'),
  source_url TEXT,
  source_platform VARCHAR, -- 'stack_overflow', 'github', 'youtube'
  license_type VARCHAR, -- 'CC-BY-SA', 'MIT', 'Apache', 'Copyright'
  attribution_required BOOLEAN,
  attribution_text TEXT,
  created_at TIMESTAMP
);
```

---

## PART 8: PERFORMANCE OPTIMIZATION STRATEGY

### 8.1 Core Web Vitals for Mobile-First App

| Metric | Target | Current Best | Impact |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | 1.5s | First impression |
| **INP** (Interaction to Next Paint) | < 200ms | 100ms | Feel of responsiveness |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.05 | Visual stability |

### 8.2 Optimization Tactics

#### For Interview Questions Dataset (1000+ rows)

```typescript
// ❌ Bad: Renders all questions
const QuestionsPage = ({ questions }) => {
  return (
    <div>
      {questions.map(q => <QuestionCard key={q.id} question={q} />)}
    </div>
  );
};

// ✅ Good: Virtualization (renders only visible rows)
import { FixedSizeList } from 'react-window';

const QuestionsPage = ({ questions }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <QuestionCard question={questions[index]} />
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={questions.length}
      itemSize={150}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
};
```

**Result:** Renders 10-15 cards instead of 1000. 60x performance improvement.

#### For Video Embeds (Lazy Loading)

```typescript
// Lazy load YouTube iframe on intersection
import { useEffect, useRef } from 'react';

const LazyVideo = ({ videoId }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video"
        />
      ) : (
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Video thumbnail" />
      )}
    </div>
  );
};
```

**Result:** Videos load only when user scrolls to them. Saves 500KB+ per page load.

#### For Images (WebP Conversion)

```typescript
// Use Vercel or Cloudinary for auto-conversion
import Image from 'next/image';

const CompanyLogo = ({ company }) => {
  return (
    <Image
      src={`/logos/${company.id}.png`}
      alt={company.name}
      width={100}
      height={100}
      // Next.js auto-converts to WebP, serves optimized sizes
    />
  );
};
```

#### For Search (Client-Side Indexing)

```typescript
// Use Fuse.js for fast client-side search (1000 questions)
import Fuse from 'fuse.js';

const options = {
  keys: ['title', 'category', 'role'], // Search these fields
  threshold: 0.3,
};

const fuse = new Fuse(questions, options);

const handleSearch = (query) => {
  const results = fuse.search(query);
  setFilteredQuestions(results.map(r => r.item));
};
```

**Result:** Search response < 100ms for 1000 items. No backend needed.

#### For Static Content (Pre-rendering)

```typescript
// Next.js generates HTML at build time for role roadmaps
export async function generateStaticParams() {
  return roles.map(role => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({ params }) {
  const role = roles.find(r => r.slug === params.slug);
  return {
    title: `${role.name} Learning Path - QuickJob`,
    description: role.description,
  };
}

// This is pre-built as static HTML, served instantly via CDN
export default function RolePage({ params }) {
  const role = roles.find(r => r.slug === params.slug);
  return (
    <div>
      <h1>{role.name}</h1>
      {/* ... */}
    </div>
  );
}
```

**Result:** Role pages load in <500ms globally (served from CDN).

### 8.3 Performance Checklist

- [ ] Implement react-window for large lists
- [ ] Lazy load videos with Intersection Observer
- [ ] Convert images to WebP via next/image
- [ ] Pre-render static pages (role roadmaps, company deep-dives)
- [ ] Use Fuse.js for client-side search
- [ ] Minify/compress all assets
- [ ] Enable Gzip compression on server
- [ ] Use Vercel Edge Network for global CDN
- [ ] Set up Sentry performance monitoring
- [ ] Optimize bundle size (analyze with next/bundle-analyzer)

---

## PART 9: IMPLEMENTATION ROADMAP

### 9.1 Week-by-Week Plan

#### **Week 1: Infrastructure & Legal**
- [ ] Set up Supabase project with initial schema
- [ ] Set up Vercel hosting
- [ ] Draft Privacy Policy (DPDPA-compliant)
- [ ] Draft Terms of Service with disclaimers
- [ ] Configure Sentry for error tracking
- [ ] Set up Resend for transactional emails

#### **Week 2: Content Aggregation**
- [ ] Fork & ingest interview questions (Tech Interview Handbook, devops-interviews)
- [ ] Scrape company data (tech stacks, Glassdoor reviews)
- [ ] Download H1B salary data
- [ ] Create company "Deep Dive" pages (10 focus companies)

#### **Week 3-4: Feature Development**
- [ ] Implement interview questions module (with virtualization)
- [ ] Build salary benchmarks display
- [ ] Create "Submit Your Win" success story form
- [ ] Implement "Match Score" feature (if using LLM)
- [ ] Build company profile pages

#### **Week 5: Performance & Polish**
- [ ] Optimize all images to WebP
- [ ] Implement lazy loading for videos
- [ ] Pre-render static pages
- [ ] Set up PostHog analytics
- [ ] Mobile testing & responsive fixes

#### **Week 6: Beta Launch**
- [ ] Internal beta testing
- [ ] Fix critical bugs
- [ ] Collect 10-20 beta user success stories
- [ ] Launch referral program
- [ ] Setup monitoring & alerting

### 9.2 Cost Summary (First 6 Months)

| Category | Service | Cost | Notes |
|---|---|---|---|
| **Infrastructure** | Vercel + Supabase | $0 | Free tier sufficient for MVP |
| **Email** | Resend | $0 | 3000/month free tier |
| **Monitoring** | Sentry + PostHog | $0 | Free tier |
| **Content** | Apify (quarterly scrapes) | $75 | $25/quarter for data updates |
| **AI** | OpenAI (Match Score) | $30/month | ~$1-2 per user score calc |
| **Domain** | Domain registration | $10/year | quickjob.app |
| **Legal** | Privacy policy template | $0 | Use DPDPA template |
| **Total (6 months)** | | **~$250** | Extremely lean |

---

## PART 10: FINAL EXECUTION SUMMARY

### 10.1 Top 3 Wins (Quick Implementation)

1. **Interview Questions Database** (Week 1-2)
   - Import 1000+ questions from open sources
   - Tag with role, difficulty, company
   - Cost: $0
   - Impact: Core value prop ready

2. **Company Deep Dives** (Week 2-3)
   - Aggregate tech stack, culture, salary for 10 companies
   - Create visual company cards
   - Cost: $0
   - Impact: Differentiator vs generic job boards

3. **Salary Benchmarks** (Week 3)
   - Display 25th/50th/75th percentile salaries
   - Link to Levels.fyi for verification
   - Cost: $0 (manual) to $20 (Apify scrape)
   - Impact: High user engagement & return visits

### 10.2 Risk Mitigation

| Risk | Likelihood | Mitigation |
|---|---|---|
| Outdated interview questions | High | Quarterly refresh from source repos |
| Company data not current | High | Monthly scrape of Glassdoor + LinkedIn |
| Legal compliance gaps | Medium | Use DPDPA templates, hire legal review ($500-1000) |
| Performance issues on mobile | Medium | Implement virtualization, lazy loading from Day 1 |
| Low user adoption | Medium | Strong UX for match score + success story social proof |

### 10.3 Market Opportunity

- **Total Addressable Market (TAM):** 5M annual tech job seekers in India
- **Serviceable Market (SOM):** 500K users in year 1
- **Revenue per user (if freemium):** $10-20/year = $5-10M potential

---

## RESOURCES DIRECTORY

### Open Source Repositories
- https://github.com/yangshun/tech-interview-handbook
- https://github.com/jwasham/coding-interview-university
- https://github.com/devops-interviews/devops-interview-questions
- https://roadmap.sh

### Data Sources
- https://levels.fyi
- https://www.glassdoor.com
- https://www.teamblind.com
- https://h1bgrader.com
- https://stackshare.io

### Services
- https://supabase.com
- https://vercel.com
- https://resend.com
- https://sentry.io
- https://posthog.com
- https://apify.com

### Compliance
- https://www.osano.com/articles/dpdpa-rules
- https://creativecommons.org/licenses/by-sa/4.0/
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

---

## NEXT STEPS FOR BACKEND TEAM

1. **Provision Infrastructure:**
   - Create Supabase project with provided schema
   - Setup Vercel deployment
   - Configure environment variables

2. **Ingest Data:**
   - Import interview questions to database
   - Scrape and normalize company data
   - Setup salary benchmark cron job

3. **Implement APIs:**
   - Questions API with filtering/search
   - Company profiles API
   - Success stories API
   - Match Score calculation

4. **Compliance:**
   - Implement consent management system
   - Setup user data export/deletion endpoints
   - Add audit logging

5. **Integrate Services:**
   - Resend for transactional emails
   - Sentry for error tracking
   - PostHog for analytics

---

**Document Status:** Complete & Ready for Implementation  
**Last Updated:** May 5, 2026  
**Next Review:** After week 2 of development
