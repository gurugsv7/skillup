# 🎯 QuickJob Backend Implementation Checklist

## Pre-Implementation Verification

### Step 1: Environment Setup
- [ ] Node.js v18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git configured
- [ ] VS Code or editor ready

### Step 2: Repository Setup
```bash
cd skillup
npm install
```
- [ ] Dependencies installed successfully
- [ ] No critical vulnerabilities

### Step 3: Install Additional Packages
```bash
npm install @supabase/supabase-js resend posthog-js @sentry/react
```
- [ ] All packages installed
- [ ] Package.json updated

---

## Configuration Phase

### Step 4: Create Environment File
```bash
cp .env.local.example .env.local
```
- [ ] `.env.local` file created
- [ ] Never commit `.env.local` (it has secrets!)

### Step 5: Get API Keys

#### Supabase
1. Go to https://supabase.com
2. Create new project (or use existing)
3. Go to Settings → API
4. Copy:
   - [ ] `Project URL` → `VITE_SUPABASE_URL`
   - [ ] `anon public` key → `VITE_SUPABASE_ANON_KEY`
   - [ ] `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (backend only)

#### Resend (Email)
1. Go to https://resend.com
2. Create account
3. Go to API Keys
4. Copy:
   - [ ] Default API Key → `RESEND_API_KEY`
5. Verify your domain (for production emails)

#### Sentry (Error Tracking)
1. Go to https://sentry.io
2. Create account → New Organization
3. Create new project → Select "React"
4. Copy:
   - [ ] DSN → `VITE_SENTRY_DSN`
5. Note environment (`development` / `production`)

#### PostHog (Analytics)
1. Go to https://posthog.com
2. Create account
3. Create new project
4. Go to Project Settings
5. Copy:
   - [ ] API Key → `VITE_POSTHOG_API_KEY`
   - [ ] API Host → `VITE_POSTHOG_API_HOST` (e.g., https://us.i.posthog.com)

#### OpenAI (For AI Features)
1. Go to https://platform.openai.com
2. Sign in → API keys
3. Create new key
4. Copy:
   - [ ] API Key → `VITE_OPENAI_API_KEY`
   - [ ] Optional: `VITE_OPENAI_ORG_ID`

#### Razorpay (Payments - Optional for MVP)
1. Go to https://razorpay.com
2. Sign up with business account
3. Go to Settings → API Keys
4. Copy:
   - [ ] `Key ID` → `VITE_RAZORPAY_KEY_ID`
   - [ ] `Key Secret` → `VITE_RAZORPAY_KEY_SECRET`

### Step 6: Update `.env.local`
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxxxx
VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
VITE_POSTHOG_API_KEY=phc_xxxxx
VITE_POSTHOG_API_HOST=https://us.i.posthog.com
VITE_ENVIRONMENT=development
VITE_OPENAI_API_KEY=sk-xxxxx
RESEND_API_KEY=re_xxxxx
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxx
VITE_RAZORPAY_KEY_SECRET=xxxxx
```
- [ ] All keys filled in (at least Supabase + Resend)
- [ ] No typos in variable names
- [ ] `.env.local` added to `.gitignore`

---

## Database Setup

### Step 7: Create Supabase Project
1. Go to https://supabase.com/dashboard
2. Create new project
   - [ ] Project created
   - [ ] Waiting for initialization (~2-3 minutes)

### Step 8: Run Database Schema
1. In Supabase dashboard → SQL Editor
2. Click "New Query"
3. Open `database/schema.sql` from your project
4. Copy entire file
5. Paste into SQL Editor
6. Click "Run"
   - [ ] All tables created (check Tables list)
   - [ ] No SQL errors
   - [ ] RLS policies created

### Step 9: Seed Initial Data
1. In SQL Editor → "New Query"
2. Open `database/seed.sql`
3. Copy entire file
4. Paste into SQL Editor
5. Click "Run"
   - [ ] Data inserted (should see count results)
   - [ ] 10 companies, 10 roles, 100+ questions

### Step 10: Verify Database
Run in SQL Editor:
```sql
SELECT 
  (SELECT COUNT(*) FROM roles) as roles,
  (SELECT COUNT(*) FROM companies) as companies,
  (SELECT COUNT(*) FROM interview_questions) as questions,
  (SELECT COUNT(*) FROM learning_resources) as resources;
```
- [ ] Results show: roles=10, companies=10, questions=100+, resources=20+

---

## Service Integration

### Step 11: Test Supabase Connection
Create a test file `test-supabase.ts`:
```typescript
import { supabase } from './src/services/supabase';

async function test() {
  const { data, error } = await supabase
    .from('roles')
    .select('*')
    .limit(1);
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success! Data:', data);
  }
}

test();
```
- [ ] Supabase connection works
- [ ] Data retrieved successfully
- [ ] No authentication errors

### Step 12: Test Email Service
Create test file `test-email.ts`:
```typescript
import { sendVerificationEmail } from './src/services/email';

async function test() {
  try {
    const result = await sendVerificationEmail(
      'test@example.com',
      'https://example.com/verify?token=abc123'
    );
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
```
- [ ] Email service initializes
- [ ] Email sends without errors
- [ ] Check email inbox for verification email

### Step 13: Initialize App Services
In `src/index.tsx` or `src/App.tsx`:
```typescript
import { initializeAnalytics } from './services/analytics';
import { initializeSentry } from './services/sentry';

// Initialize on app load
initializeSentry();
initializeAnalytics();
```
- [ ] App starts without errors
- [ ] No console errors from Sentry
- [ ] PostHog dashboard shows activity

### Step 14: Test Analytics
In any component:
```typescript
import { trackRoleSelected } from './services/analytics';

// When user selects a role:
trackRoleSelected(userId, roleId, roleName);

// Check PostHog dashboard for event
```
- [ ] Event appears in PostHog dashboard within 5 seconds
- [ ] Event has all expected properties

---

## Feature Implementation

### Step 15: Import Types in Components
```typescript
import type { 
  Role, 
  Company, 
  InterviewQuestion,
  SuccessStory 
} from '../types/data';
```
- [ ] Types imported without errors
- [ ] TypeScript shows autocomplete

### Step 16: Use Supabase Functions
Example in `InterviewPrepView.tsx`:
```typescript
import { getInterviewQuestions } from '../services/supabase';
import { trackInterviewQuestionViewed } from '../services/analytics';

export function InterviewPrepView() {
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await getInterviewQuestions(roleId, 'Mid', 50);
        setQuestions(data || []);
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [roleId]);

  const handleViewQuestion = (q: InterviewQuestion) => {
    trackInterviewQuestionViewed(userId, q.id, q.difficulty, q.category);
  };

  return (
    <div>
      {loading ? <Spinner /> : (
        <div>
          {questions.map(q => (
            <QuestionCard
              key={q.id}
              question={q}
              onView={() => handleViewQuestion(q)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```
- [ ] Component imports work
- [ ] Data loads from Supabase
- [ ] Analytics events tracked
- [ ] No TypeScript errors

### Step 17: Test All Components
- [ ] RoleHubView loads roles from database
- [ ] CompanyDiscoveryView loads companies
- [ ] InterviewPrepView loads questions
- [ ] ProfileHubView shows user data
- [ ] No 500 errors in browser console

---

## Compliance & Security

### Step 18: Test Row Level Security
1. In Supabase SQL Editor, verify RLS enabled:
```sql
SELECT * FROM pg_policies WHERE schemaname = 'public';
```
- [ ] RLS policies exist for main tables
- [ ] Users can only see their own data

### Step 19: Test Audit Logging
1. Check audit_log table:
```sql
SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 10;
```
- [ ] Events are being logged
- [ ] Timestamps are correct

### Step 20: DPDPA Compliance
- [ ] Privacy Policy document created
- [ ] Terms of Service document created
- [ ] Consent checkboxes in signup flow
- [ ] User can request data export
- [ ] User can delete account

---

## Performance Testing

### Step 21: Database Query Performance
1. Check slow queries:
```sql
-- In Supabase, go to Logs → Query Performance
```
- [ ] No query takes > 1000ms
- [ ] Indexes are working

### Step 22: Load Testing
1. Test with 100+ questions loaded:
```bash
npm run build
npm run preview
# Load http://localhost:4173
```
- [ ] Page loads in < 3 seconds
- [ ] No layout shift
- [ ] Images lazy load

### Step 23: Analytics Performance
- [ ] PostHog dashboard responsive
- [ ] Events tracked with < 100ms latency
- [ ] No dropped events

---

## Deployment Preparation

### Step 24: Environment Files
- [ ] `.env.local.example` updated with all keys
- [ ] `.env.local` in `.gitignore`
- [ ] Production env vars set in hosting platform
- [ ] No secrets in version control

### Step 25: Database Backup
1. In Supabase:
   - [ ] Enable automated backups
   - [ ] Backup retention set to 7 days
   - [ ] Download manual backup as testing

### Step 26: Error Monitoring Setup
1. In Sentry dashboard:
   - [ ] Alerts configured for critical errors
   - [ ] Team members invited
   - [ ] Notifications enabled

### Step 27: Analytics Dashboard
1. In PostHog:
   - [ ] Key metrics dashboard created
   - [ ] Goals/funnel analysis set up
   - [ ] Team access granted

---

## Go-Live Checklist

### Before Launch
- [ ] All environment variables set in production
- [ ] Database backups configured
- [ ] Error tracking (Sentry) enabled
- [ ] Analytics (PostHog) initialized
- [ ] Email service (Resend) verified
- [ ] SSL certificate valid
- [ ] Domain DNS configured
- [ ] CDN configured (Vercel)

### Post-Launch (First 24 Hours)
- [ ] Monitor error tracking (Sentry)
- [ ] Check analytics dashboard
- [ ] Verify email delivery
- [ ] Test user signup flow
- [ ] Test data persistence
- [ ] Monitor database performance
- [ ] Check API response times

### Ongoing
- [ ] Daily error monitoring
- [ ] Weekly performance review
- [ ] Monthly user analytics review
- [ ] Quarterly database optimization

---

## Troubleshooting

### "Cannot connect to Supabase"
- [ ] Check VITE_SUPABASE_URL format
- [ ] Check VITE_SUPABASE_ANON_KEY is correct
- [ ] Verify project is active in Supabase dashboard

### "Email not sending"
- [ ] Check RESEND_API_KEY is correct
- [ ] Verify domain is authorized in Resend
- [ ] Check spam folder
- [ ] Check Resend dashboard for errors

### "Analytics not tracking"
- [ ] Check VITE_POSTHOG_API_KEY is correct
- [ ] Check VITE_POSTHOG_API_HOST is correct
- [ ] Wait 5-10 seconds (events are batched)
- [ ] Check PostHog Events page

### "Database queries slow"
- [ ] Run VACUUM ANALYZE in Supabase
- [ ] Check for missing indexes
- [ ] Review query plans in Supabase Logs
- [ ] Consider pagination for large datasets

### "RLS blocking legitimate queries"
- [ ] Check RLS policies in Supabase
- [ ] Ensure auth.uid() matches user ID
- [ ] Temporarily disable RLS for testing
- [ ] Re-enable with correct policies

---

## Success Metrics

### Database
- ✅ 20+ tables created
- ✅ 100+ rows initial data
- ✅ All indexes created
- ✅ RLS enabled
- ✅ Query time < 100ms

### Services
- ✅ Supabase queries work
- ✅ Emails send successfully
- ✅ Analytics events tracked
- ✅ Errors captured
- ✅ No console errors

### Frontend
- ✅ Components use services
- ✅ Data displays correctly
- ✅ Events tracked on interactions
- ✅ TypeScript types work
- ✅ Page loads < 3 seconds

### Compliance
- ✅ RLS enabled
- ✅ Audit logging works
- ✅ User can export data
- ✅ User can delete account
- ✅ Consent tracked

---

## Final Sign-Off

- [ ] All checklist items completed
- [ ] No blocking issues remaining
- [ ] Documentation complete
- [ ] Team trained on infrastructure
- [ ] Ready for frontend feature development

**Date Completed:** _______________  
**Completed By:** _______________  
**Approved By:** _______________  

---

**Next Phase:** Frontend Feature Development (Week 2)
