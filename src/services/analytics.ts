import posthog from 'posthog-js';
import { supabase } from './supabase';

// Initialize PostHog
export function initializeAnalytics() {
  if (import.meta.env.VITE_POSTHOG_API_KEY) {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_API_HOST || 'https://us.posthog.com',
      loaded: (ph: any) => {
        console.log('PostHog initialized');
      },
    });
  }
}

// Analytics Events to track
export async function trackUserSignup(userId: string, email: string, careerLevel?: string) {
  posthog?.capture('user_signup', {
    userId,
    email,
    careerLevel,
  });

  // Also log to database
  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'user_signup',
      event_properties: { email, careerLevel },
    },
  ]);
}

export async function trackRoleSelected(userId: string, roleId: string, roleName: string) {
  posthog?.capture('role_selected', {
    roleId,
    roleName,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'role_selected',
      event_properties: { roleId, roleName },
    },
  ]);
}

export async function trackCompanyViewed(userId: string, companyId: string, companyName: string) {
  posthog?.capture('company_viewed', {
    companyId,
    companyName,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'company_viewed',
      event_properties: { companyId, companyName },
    },
  ]);
}

export async function trackInterviewQuestionViewed(
  userId: string,
  questionId: string,
  difficulty: string,
  category: string
) {
  posthog?.capture('interview_question_viewed', {
    questionId,
    difficulty,
    category,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'interview_question_viewed',
      event_properties: { questionId, difficulty, category },
    },
  ]);
}

export async function trackSuccessStoryViewed(userId: string, storyId: string, companyName: string) {
  posthog?.capture('success_story_viewed', {
    storyId,
    companyName,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'success_story_viewed',
      event_properties: { storyId, companyName },
    },
  ]);
}

export async function trackLearningResourceAccessed(
  userId: string,
  resourceId: string,
  resourceType: string,
  platform: string
) {
  posthog?.capture('learning_resource_accessed', {
    resourceId,
    resourceType,
    platform,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'learning_resource_accessed',
      event_properties: { resourceId, resourceType, platform },
    },
  ]);
}

export async function trackLearningPathCompleted(userId: string, roleId: string, roleName: string) {
  posthog?.capture('learning_path_completed', {
    roleId,
    roleName,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'learning_path_completed',
      event_properties: { roleId, roleName },
    },
  ]);
}

export async function trackSuccessStorySubmitted(
  userId: string,
  companyId: string,
  roleId: string
) {
  posthog?.capture('success_story_submitted', {
    companyId,
    roleId,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'success_story_submitted',
      event_properties: { companyId, roleId },
    },
  ]);
}

export async function trackSalaryDataSubmitted(userId: string, companyId: string) {
  posthog?.capture('salary_data_submitted', {
    companyId,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'salary_data_submitted',
      event_properties: { companyId },
    },
  ]);
}

export async function trackMatchScoreCalculated(
  userId: string,
  roleId: string,
  companyId: string,
  matchPercentage: number
) {
  posthog?.capture('match_score_calculated', {
    roleId,
    companyId,
    matchPercentage,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'match_score_calculated',
      event_properties: { roleId, companyId, matchPercentage },
    },
  ]);
}

export async function trackChatInteraction(userId: string, topic: string) {
  posthog?.capture('chat_interaction', {
    topic,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'chat_interaction',
      event_properties: { topic },
    },
  ]);
}

export async function trackDataExportRequested(userId: string) {
  posthog?.capture('data_export_requested', {});

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'data_export_requested',
    },
  ]);
}

export async function trackConsentGiven(userId: string, consentType: string) {
  posthog?.capture('consent_given', {
    consentType,
  });

  await supabase.from('analytics_events').insert([
    {
      user_id: userId,
      event_name: 'consent_given',
      event_properties: { consentType },
    },
  ]);
}
