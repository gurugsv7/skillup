-- ============================================================
-- QuickJob Database Schema
-- Based on comprehensive research and data requirements
-- ============================================================

-- ==================== USERS & AUTHENTICATION ====================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone_number VARCHAR(20),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  
  -- Career Profile
  career_level VARCHAR(50), -- 'STUDENT', 'GRADUATE', 'PRO'
  years_of_experience INT DEFAULT 0,
  current_company VARCHAR(255),
  current_role VARCHAR(255),
  
  -- User Preferences
  interested_roles UUID[] DEFAULT ARRAY[]::UUID[],
  interested_companies UUID[] DEFAULT ARRAY[]::UUID[],
  
  -- Profile Status
  profile_complete BOOLEAN DEFAULT FALSE,
  avatar_url TEXT,
  bio TEXT,
  
  -- Account Info
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Timestamps
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_career_level ON users(career_level);

-- ==================== CONSENT & PRIVACY ====================

CREATE TABLE user_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  consent_type VARCHAR(100), -- 'email_marketing', 'data_processing', 'success_story_publication'
  consent_given BOOLEAN DEFAULT FALSE,
  consent_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- For success stories specifically
  anonymization_level VARCHAR(50), -- 'full_name', 'first_name_only', 'anonymous'
  can_publish_story BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_consents_user_id ON user_consents(user_id);

-- ==================== ROLES (Tech Roles) ====================

CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE, -- 'Full Stack Developer', 'Backend Developer', etc.
  slug VARCHAR(255) UNIQUE NOT NULL, -- 'full-stack-developer'
  category VARCHAR(100), -- 'Frontend', 'Backend', 'DevOps', 'Data', 'Cloud', 'Security', 'QA', 'Business'
  description TEXT,
  overview TEXT,
  
  difficulty VARCHAR(50), -- 'Entry', 'Mid', 'Senior'
  time_to_mastery VARCHAR(100), -- '6-12 months'
  
  -- Related Data
  companies_hiring UUID[] DEFAULT ARRAY[]::UUID[],
  required_skills VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_roles_category ON roles(category);
CREATE INDEX idx_roles_slug ON roles(slug);

-- ==================== COMPANIES ====================

CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Basic Info
  description TEXT,
  tagline VARCHAR(500),
  logo_url TEXT,
  website_url TEXT,
  careers_page_url TEXT,
  linkedin_url TEXT,
  
  -- Classification
  category VARCHAR(100), -- 'FAANG', 'STARTUP', 'PRODUCT', 'SERVICE', 'REMOTE'
  tier VARCHAR(100), -- 'Enterprise', 'Mid-tier', 'Startup', 'MNC'
  
  -- Tech Stack
  tech_stack JSONB, -- {frontend: [], backend: [], cloud: [], database: []}
  primary_languages VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  
  -- Hiring Info
  hiring_status VARCHAR(50), -- 'High', 'Moderate', 'Low', 'Not Hiring'
  active_roles_count INT DEFAULT 0,
  avg_response_time_days INT,
  
  -- Culture & Work
  remote_policy VARCHAR(100), -- 'Fully Remote', 'Hybrid', 'Office Only'
  culture_rating NUMERIC(2, 1), -- 1.0 to 5.0
  work_life_balance_rating NUMERIC(2, 1),
  
  -- Location
  headquarters_city VARCHAR(100),
  headquarters_country VARCHAR(100),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_data_refresh_at TIMESTAMP
);

CREATE INDEX idx_companies_category ON companies(category);
CREATE INDEX idx_companies_hiring_status ON companies(hiring_status);
CREATE INDEX idx_companies_slug ON companies(slug);

-- ==================== INTERVIEW ROUNDS ====================

CREATE TABLE company_interview_rounds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  
  round_number INT,
  round_name VARCHAR(255), -- 'Initial Screening', 'Coding Round 1', 'System Design', 'HR'
  duration_minutes INT,
  
  focus_areas VARCHAR[] DEFAULT ARRAY[]::VARCHAR[], -- 'DSA', 'System Design', 'Behavioral'
  common_questions VARCHAR[],
  tips TEXT,
  
  pass_rate_percentage INT,
  difficulty_level VARCHAR(50), -- 'Easy', 'Medium', 'Hard'
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_interview_rounds_company_id ON company_interview_rounds(company_id);

-- ==================== INTERVIEW QUESTIONS ====================

CREATE TABLE interview_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id UUID REFERENCES roles(id) ON DELETE SET NULL,
  company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
  
  title TEXT NOT NULL,
  question_text TEXT NOT NULL,
  answer_text TEXT,
  explanation TEXT,
  
  difficulty VARCHAR(50), -- 'Entry', 'Mid', 'Senior'
  category VARCHAR(100), -- 'Coding', 'System Design', 'Behavioral', 'Aptitude'
  sub_category VARCHAR(100), -- 'Arrays', 'Trees', 'Graphs', 'DSA', 'LLD', 'HLD', 'STAR', 'Aptitude'
  
  common_mistakes TEXT,
  tags VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  
  -- Source Info
  source_url TEXT,
  source_platform VARCHAR(100), -- 'stack_overflow', 'github', 'geeksforgeeks', 'custom'
  license_type VARCHAR(100), -- 'CC-BY-SA', 'MIT', 'Apache', 'Custom'
  attribution_text TEXT,
  
  -- Engagement
  view_count INT DEFAULT 0,
  bookmark_count INT DEFAULT 0,
  difficulty_rating NUMERIC(2, 1),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_questions_role_id ON interview_questions(role_id);
CREATE INDEX idx_questions_company_id ON interview_questions(company_id);
CREATE INDEX idx_questions_difficulty ON interview_questions(difficulty);
CREATE INDEX idx_questions_category ON interview_questions(category);
CREATE INDEX idx_questions_title ON interview_questions USING gin(to_tsvector('english', title));

-- ==================== SUCCESS STORIES ====================

CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  
  -- User Background
  college VARCHAR(255),
  previous_experience VARCHAR(500),
  skills_before VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  
  -- Outcome
  target_company VARCHAR(255),
  target_role VARCHAR(255),
  level VARCHAR(100), -- 'L3', 'L4', 'L5', 'L6', 'Senior', 'Mid', 'Junior'
  ctc_annual INT, -- Annual salary in base currency
  base_salary INT,
  bonus_amount INT,
  equity_annual_value INT,
  
  -- Prep Details
  total_prep_time_weeks INT,
  hours_per_week INT,
  resources_used VARCHAR[],
  
  -- STAR Story
  situation TEXT,
  task_description TEXT,
  action_taken TEXT,
  result_achieved TEXT,
  key_takeaway TEXT,
  
  -- Verification
  verification_status VARCHAR(50), -- 'pending', 'approved', 'rejected'
  linkedin_verified BOOLEAN DEFAULT FALSE,
  salary_verified_against VARCHAR(100), -- 'h1b', 'levels_fyi', 'user_provided'
  verified_by_admin BOOLEAN DEFAULT FALSE,
  
  -- Publication
  anonymization_level VARCHAR(50), -- 'full_name', 'first_name_only', 'anonymous'
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  
  -- Engagement
  view_count INT DEFAULT 0,
  upvotes INT DEFAULT 0,
  
  -- Media
  resume_sample_url TEXT, -- Redacted resume PDF
  video_testimonial_url TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_success_stories_user_id ON success_stories(user_id);
CREATE INDEX idx_success_stories_company_id ON success_stories(company_id);
CREATE INDEX idx_success_stories_is_published ON success_stories(is_published);
CREATE INDEX idx_success_stories_verification_status ON success_stories(verification_status);

-- ==================== SALARY BENCHMARKS ====================

CREATE TABLE salary_benchmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  
  level VARCHAR(100), -- 'Entry', 'Mid', 'Senior', 'Lead', 'Manager'
  location VARCHAR(100),
  currency VARCHAR(3) DEFAULT 'USD',
  
  -- Salary Statistics
  base_25th_percentile INT,
  base_50th_percentile INT, -- Median
  base_75th_percentile INT,
  
  bonus_avg INT,
  bonus_range_low INT,
  bonus_range_high INT,
  
  equity_annual_value INT,
  equity_type VARCHAR(50), -- 'RSU', 'Stock Options', 'None'
  
  total_compensation_median INT,
  total_compensation_range_low INT,
  total_compensation_range_high INT,
  
  -- Data Quality
  data_points_count INT, -- How many reports this is based on
  data_freshness_days INT,
  
  -- Sources
  sources VARCHAR[] DEFAULT ARRAY[]::VARCHAR[], -- 'levels_fyi', 'h1b_data', 'glassdoor', 'user_submitted'
  confidence_score NUMERIC(2, 1), -- 1.0 to 5.0, based on data points
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_salary_benchmarks_company_id ON salary_benchmarks(company_id);
CREATE INDEX idx_salary_benchmarks_role_id ON salary_benchmarks(role_id);
CREATE INDEX idx_salary_benchmarks_level ON salary_benchmarks(level);

-- ==================== USER SALARY SUBMISSIONS ====================

CREATE TABLE user_salary_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  
  level VARCHAR(100),
  location VARCHAR(100),
  years_of_experience INT,
  
  base_salary INT,
  bonus INT,
  equity_value INT,
  
  verified_against VARCHAR(100), -- 'levels_fyi', 'h1b', 'none'
  consent_to_aggregate BOOLEAN DEFAULT FALSE,
  
  submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_salary_submissions_user_id ON user_salary_submissions(user_id);
CREATE INDEX idx_salary_submissions_company_id ON user_salary_submissions(company_id);

-- ==================== LEARNING RESOURCES ====================

CREATE TABLE learning_resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  
  skill_name VARCHAR(255),
  skill_category VARCHAR(100), -- 'Frontend', 'Backend', 'DevOps', etc.
  
  resource_type VARCHAR(100), -- 'course', 'video', 'documentation', 'practice', 'article'
  title VARCHAR(500),
  description TEXT,
  url TEXT NOT NULL,
  
  platform VARCHAR(100), -- 'freecodecamp', 'coursera', 'youtube', 'leetcode', etc.
  estimated_hours INT,
  difficulty VARCHAR(50), -- 'beginner', 'intermediate', 'advanced'
  
  language VARCHAR(50), -- 'en', 'hindi', etc.
  is_free BOOLEAN DEFAULT TRUE,
  cost_usd INT, -- If paid
  
  rating NUMERIC(2, 1),
  review_count INT DEFAULT 0,
  
  completion_count INT DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_learning_resources_role_id ON learning_resources(role_id);
CREATE INDEX idx_learning_resources_resource_type ON learning_resources(resource_type);
CREATE INDEX idx_learning_resources_platform ON learning_resources(platform);

-- ==================== USER LEARNING PROGRESS ====================

CREATE TABLE user_learning_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id UUID NOT NULL REFERENCES learning_resources(id) ON DELETE CASCADE,
  
  status VARCHAR(50), -- 'not_started', 'in_progress', 'completed', 'bookmarked'
  progress_percentage INT DEFAULT 0,
  
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  
  streak_count INT DEFAULT 0,
  last_accessed_at TIMESTAMP,
  
  notes TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_learning_progress_user_id ON user_learning_progress(user_id);
CREATE INDEX idx_learning_progress_status ON user_learning_progress(status);

-- ==================== USER BOOKMARKS ====================

CREATE TABLE user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  bookmarkable_type VARCHAR(100), -- 'role', 'company', 'question', 'resource', 'success_story'
  bookmarkable_id UUID NOT NULL,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookmarks_user_id ON user_bookmarks(user_id);
CREATE INDEX idx_bookmarks_type_id ON user_bookmarks(bookmarkable_type, bookmarkable_id);

-- ==================== MATCH SCORES ====================

CREATE TABLE match_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  
  overall_match_percentage INT, -- 0-100
  skill_match_percentage INT,
  experience_match_percentage INT,
  role_match_percentage INT,
  
  strength_areas VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  gap_areas VARCHAR[] DEFAULT ARRAY[]::VARCHAR[],
  
  recommendations TEXT,
  
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_match_scores_user_id ON match_scores(user_id);
CREATE INDEX idx_match_scores_role_id ON match_scores(role_id);
CREATE INDEX idx_match_scores_company_id ON match_scores(company_id);

-- ==================== USER DATA REQUESTS ====================

CREATE TABLE user_data_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  request_type VARCHAR(100), -- 'access', 'correction', 'erasure', 'portability', 'restrict'
  status VARCHAR(50), -- 'pending', 'in_progress', 'completed', 'denied'
  
  request_details JSONB,
  response_data JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP
);

CREATE INDEX idx_data_requests_user_id ON user_data_requests(user_id);
CREATE INDEX idx_data_requests_status ON user_data_requests(status);

-- ==================== AUDIT LOG ====================

CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  
  action VARCHAR(255),
  entity_type VARCHAR(100),
  entity_id UUID,
  
  changes JSONB,
  ip_address INET,
  user_agent TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX idx_audit_log_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_log_created_at ON audit_log(created_at);

-- ==================== ANALYTICS EVENTS ====================

CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  
  event_name VARCHAR(255),
  event_properties JSONB,
  
  session_id VARCHAR(255),
  page_url TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);

-- ==================== CONTENT SOURCES (For Attribution) ====================

CREATE TABLE content_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  content_type VARCHAR(100), -- 'question', 'article', 'video', 'code'
  source_url TEXT NOT NULL,
  source_platform VARCHAR(100), -- 'stack_overflow', 'github', 'youtube', 'medium'
  
  license_type VARCHAR(100), -- 'CC-BY-SA', 'MIT', 'Apache', 'Copyright'
  attribution_required BOOLEAN DEFAULT TRUE,
  attribution_text TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_content_sources_url ON content_sources(source_url);
CREATE INDEX idx_content_sources_platform ON content_sources(source_platform);

-- ==================== FINAL SETUP ====================

-- Enable Row Level Security (RLS) for multi-tenant safety
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_data_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Timestamp update triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON roles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Done
