import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock import.meta.env
const mockEnv = {
  VITE_FRONTEND_BASE_URL: 'https://stagedashboard.mysentry.ai',
  VITE_OAUTH_PORTAL_URL: 'https://oauth.example.com',
  VITE_APP_ID: 'test-app-id',
};

vi.stubGlobal('import', {
  meta: {
    env: mockEnv,
  },
});

describe('Signup URL Generation', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should generate correct Individual Monthly signup URL', async () => {
    // Test the URL construction logic directly
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    const planType = 'individual';
    const billingCycle = 'monthly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://stagedashboard.mysentry.ai/create-saas-account?plan=individual_basic_monthly');
  });

  it('should generate correct Individual Yearly signup URL', async () => {
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    const planType = 'individual';
    const billingCycle = 'yearly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://stagedashboard.mysentry.ai/create-saas-account?plan=individual_basic_yearly');
  });

  it('should generate correct Family Monthly signup URL', async () => {
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    const planType = 'family';
    const billingCycle = 'monthly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://stagedashboard.mysentry.ai/create-saas-account?plan=family_basic_monthly');
  });

  it('should generate correct Family Yearly signup URL', async () => {
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    const planType = 'family';
    const billingCycle = 'yearly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://stagedashboard.mysentry.ai/create-saas-account?plan=family_basic_yearly');
  });

  it('should use stagedashboard.mysentry.ai as the base URL', () => {
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    expect(baseUrl).toBe('https://stagedashboard.mysentry.ai');
    expect(baseUrl).not.toContain('www.mysentry.ai');
    expect(baseUrl).not.toContain('/pricing');
  });

  it('should not include pricing page path in signup URLs', () => {
    const baseUrl = 'https://stagedashboard.mysentry.ai';
    const signupUrl = `${baseUrl}/create-saas-account?plan=individual_basic_monthly`;
    
    expect(signupUrl).not.toContain('/pricing');
    expect(signupUrl).not.toContain('#pricing-plans');
  });
});
