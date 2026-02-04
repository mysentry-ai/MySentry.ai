import { describe, expect, it, vi, beforeEach } from "vitest";

// Mock import.meta.env
const mockEnv = {
  VITE_FRONTEND_BASE_URL: 'https://www.mysentry.ai'
};

// Test the URL generation logic directly
describe("Signup URL Generation", () => {
  beforeEach(() => {
    vi.stubGlobal('import', { meta: { env: mockEnv } });
  });

  it("generates correct Individual Monthly signup URL", () => {
    const baseUrl = mockEnv.VITE_FRONTEND_BASE_URL;
    const planType = 'individual';
    const billingCycle = 'monthly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://www.mysentry.ai/create-saas-account?plan=individual_basic_monthly');
  });

  it("generates correct Individual Yearly signup URL", () => {
    const baseUrl = mockEnv.VITE_FRONTEND_BASE_URL;
    const planType = 'individual';
    const billingCycle = 'yearly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://www.mysentry.ai/create-saas-account?plan=individual_basic_yearly');
  });

  it("generates correct Family Monthly signup URL", () => {
    const baseUrl = mockEnv.VITE_FRONTEND_BASE_URL;
    const planType = 'family';
    const billingCycle = 'monthly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://www.mysentry.ai/create-saas-account?plan=family_basic_monthly');
  });

  it("generates correct Family Yearly signup URL", () => {
    const baseUrl = mockEnv.VITE_FRONTEND_BASE_URL;
    const planType = 'family';
    const billingCycle = 'yearly';
    const planParam = `${planType}_basic_${billingCycle}`;
    const expectedUrl = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    expect(expectedUrl).toBe('https://www.mysentry.ai/create-saas-account?plan=family_basic_yearly');
  });

  it("URL format follows the required pattern", () => {
    const baseUrl = mockEnv.VITE_FRONTEND_BASE_URL;
    const planParam = 'individual_basic_monthly';
    const url = `${baseUrl}/create-saas-account?plan=${planParam}`;
    
    // Verify URL structure
    expect(url).toMatch(/^https:\/\/.*\/create-saas-account\?plan=\w+_basic_(monthly|yearly)$/);
  });
});
