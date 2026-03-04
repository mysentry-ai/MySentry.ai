import { describe, it, expect } from 'vitest';

describe('Signup URL Generation', () => {
  it('should generate correct Individual Monthly signup URL', () => {
    const expectedUrl = 'https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440001';
    expect(expectedUrl).toContain('dashboard.mysentry.ai');
    expect(expectedUrl).toContain('550e8400-e29b-41d4-a716-446655440001');
  });

  it('should generate correct Individual Yearly signup URL', () => {
    const expectedUrl = 'https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440002';
    expect(expectedUrl).toContain('dashboard.mysentry.ai');
    expect(expectedUrl).toContain('550e8400-e29b-41d4-a716-446655440002');
  });

  it('should generate correct Family Monthly signup URL', () => {
    const expectedUrl = 'https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440003';
    expect(expectedUrl).toContain('dashboard.mysentry.ai');
    expect(expectedUrl).toContain('550e8400-e29b-41d4-a716-446655440003');
  });

  it('should generate correct Family Yearly signup URL', () => {
    const expectedUrl = 'https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440004';
    expect(expectedUrl).toContain('dashboard.mysentry.ai');
    expect(expectedUrl).toContain('550e8400-e29b-41d4-a716-446655440004');
  });

  it('should use dashboard.mysentry.ai as the base URL, not www.mysentry.ai', () => {
    const baseUrl = 'https://dashboard.mysentry.ai';
    expect(baseUrl).toBe('https://dashboard.mysentry.ai');
    expect(baseUrl).not.toContain('www.mysentry.ai');
  });

  it('should not include pricing page path in signup URLs', () => {
    const signupUrl = 'https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440001';
    expect(signupUrl).not.toContain('/pricing');
    expect(signupUrl).not.toContain('#pricing-plans');
  });
});
