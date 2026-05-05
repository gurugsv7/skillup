import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY || '');

export async function sendVerificationEmail(email: string, verificationLink: string) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: 'Verify your QuickJob account',
      html: `
        <h2>Welcome to QuickJob!</h2>
        <p>Click the link below to verify your email address:</p>
        <a href="${verificationLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Verify Email
        </a>
        <p>Link expires in 24 hours.</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email: string, resetLink: string) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: 'Reset your QuickJob password',
      html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}" style="background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Reset Password
        </a>
        <p>Link expires in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    throw error;
  }
}

export async function sendSuccessStoryAcceptanceEmail(
  email: string,
  storyTitle: string
) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: 'Your success story has been accepted!',
      html: `
        <h2>Congratulations!</h2>
        <p>Your success story "${storyTitle}" has been approved and published on QuickJob.</p>
        <p>You can now help other job seekers by sharing your experience!</p>
        <p>You've earned a "Verified Member" badge on your profile.</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send success story email:', error);
    throw error;
  }
}

export async function sendSalaryDataThankYouEmail(email: string) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: 'Thank you for sharing your salary data!',
      html: `
        <h2>Thank You!</h2>
        <p>Your salary submission helps other job seekers understand market rates.</p>
        <p>We've added your data to our salary benchmarks (anonymously).</p>
        <p>You've earned 10 QuickJob points!</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send salary data email:', error);
    throw error;
  }
}

export async function sendWeeklyLearningReminder(
  email: string,
  userName: string,
  completedLessons: number,
  streakDays: number
) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: `Hi ${userName}, keep your learning streak going! 🔥`,
      html: `
        <h2>Your Learning Progress</h2>
        <p>Great work! You've completed <strong>${completedLessons}</strong> lessons this week.</p>
        <p>Your current streak: <strong>${streakDays} days</strong> 🔥</p>
        <p>Continue learning to unlock achievements and badge!</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send reminder email:', error);
    throw error;
  }
}

export async function sendInterviewTipsEmail(email: string, companyName: string, roleName: string) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@quickjob.app',
      to: email,
      subject: `Interview tips for ${roleName} at ${companyName}`,
      html: `
        <h2>Interview Tips for ${companyName}</h2>
        <p>Based on your profile, here are personalized tips for your upcoming interview:</p>
        <ul>
          <li>Focus on system design questions</li>
          <li>Practice behavioral interviews with the STAR method</li>
          <li>Review the company's tech blog for recent technologies</li>
        </ul>
        <p>Good luck! 🚀</p>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send interview tips email:', error);
    throw error;
  }
}
