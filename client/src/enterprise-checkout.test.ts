/**
 * Enterprise Plan Checkout URL Tests
 *
 * Validates that getEnterpriseSignupUrl() produces the correct checkout URL for
 * all four Enterprise plan variants with dynamic licence counts, and that the
 * minimum-licence guardrail (min = 2) is enforced.
 *
 * Test matrix from spec:
 *  1. Employees+Families Monthly + 5   → plan ...0005, licences=5
 *  2. Employees+Families Yearly  + 11  → plan ...0006, licences=11
 *  3. Employees Only     Monthly + 30  → plan ...0007, licences=30
 *  4. Employees Only     Yearly  + 75  → plan ...0008, licences=75
 *  5. Quantity 1                       → blocked/corrected to 2
 *  6. Non-Enterprise plans unchanged   → getSignupUrl still returns correct URLs
 */

import { describe, it, expect } from 'vitest';
import { getEnterpriseSignupUrl, getSignupUrl } from './const';

const BASE = 'https://dashboard.mysentry.ai/create-saas-account';

describe('Enterprise Plan Checkout URL  -  getEnterpriseSignupUrl()', () => {
  // ── Test 1: Employees+Families Monthly + 5 ────────────────────────────────
  it('Test 1: Employees+Families Monthly + 5 → plan 0005, licences=5', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'monthly', 5);
    const parsed = new URL(url);
    expect(parsed.origin + parsed.pathname).toBe(BASE);
    expect(parsed.searchParams.get('plan')).toBe('550e8400-e29b-41d4-a716-446655440005');
    expect(parsed.searchParams.get('licences')).toBe('5');
  });

  // ── Test 2: Employees+Families Yearly + 11 ────────────────────────────────
  it('Test 2: Employees+Families Yearly + 11 → plan 0006, licences=11', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'yearly', 11);
    const parsed = new URL(url);
    expect(parsed.origin + parsed.pathname).toBe(BASE);
    expect(parsed.searchParams.get('plan')).toBe('550e8400-e29b-41d4-a716-446655440006');
    expect(parsed.searchParams.get('licences')).toBe('11');
  });

  // ── Test 3: Employees Only Monthly + 30 ──────────────────────────────────
  it('Test 3: Employees Only Monthly + 30 → plan 0007, licences=30', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'monthly', 30);
    const parsed = new URL(url);
    expect(parsed.origin + parsed.pathname).toBe(BASE);
    expect(parsed.searchParams.get('plan')).toBe('550e8400-e29b-41d4-a716-446655440007');
    expect(parsed.searchParams.get('licences')).toBe('30');
  });

  // ── Test 4: Employees Only Yearly + 75 ───────────────────────────────────
  it('Test 4: Employees Only Yearly + 75 → plan 0008, licences=75', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'yearly', 75);
    const parsed = new URL(url);
    expect(parsed.origin + parsed.pathname).toBe(BASE);
    expect(parsed.searchParams.get('plan')).toBe('550e8400-e29b-41d4-a716-446655440008');
    expect(parsed.searchParams.get('licences')).toBe('75');
  });

  // ── Test 5: Guardrail  -  quantity 1 is normalised to 2 ────────────────────
  it('Test 5: Quantity 1 is blocked/corrected to 2 (minimum enforcement)', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'monthly', 1);
    const parsed = new URL(url);
    expect(parsed.searchParams.get('licences')).toBe('2');
  });

  // ── Guardrail: quantity 0 is normalised to 2 ─────────────────────────────
  it('Guardrail: Quantity 0 is corrected to 2', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'yearly', 0);
    const parsed = new URL(url);
    expect(parsed.searchParams.get('licences')).toBe('2');
  });

  // ── Guardrail: negative quantity is normalised to 2 ──────────────────────
  it('Guardrail: Negative quantity is corrected to 2', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'monthly', -10);
    const parsed = new URL(url);
    expect(parsed.searchParams.get('licences')).toBe('2');
  });

  // ── Guardrail: query param name must be `licences`, NOT `licenses` ────────
  it('Guardrail: Query param is named "licences" (not "licenses")', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'monthly', 10);
    expect(url).toContain('licences=');
    expect(url).not.toContain('licenses=');
  });

  // ── Guardrail: large quantity (500+) passes through unchanged ────────────
  it('Guardrail: Large quantity (500) passes through unchanged', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'yearly', 500);
    const parsed = new URL(url);
    expect(parsed.searchParams.get('licences')).toBe('500');
  });

  // ── Exact URL validation for default licences=2 ──────────────────────────
  it('Exact URL: Employee+Families Monthly with licences=2', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'monthly', 2);
    expect(url).toBe('https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440005&licences=2');
  });

  it('Exact URL: Employee+Families Yearly with licences=2', () => {
    const url = getEnterpriseSignupUrl('employees_families', 'yearly', 2);
    expect(url).toBe('https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440006&licences=2');
  });

  it('Exact URL: Employee Only Monthly with licences=2', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'monthly', 2);
    expect(url).toBe('https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440007&licences=2');
  });

  it('Exact URL: Employee Only Yearly with licences=2', () => {
    const url = getEnterpriseSignupUrl('employees_only', 'yearly', 2);
    expect(url).toBe('https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440008&licences=2');
  });
});

describe('Non-Enterprise Plans  -  getSignupUrl() unchanged', () => {
  it('Individual Monthly → plan 0001 (no licences param)', () => {
    const url = getSignupUrl('individual', 'monthly');
    expect(url).toContain('550e8400-e29b-41d4-a716-446655440001');
    expect(url).not.toContain('licences');
  });

  it('Individual Yearly → plan 0002 (no licences param)', () => {
    const url = getSignupUrl('individual', 'yearly');
    expect(url).toContain('550e8400-e29b-41d4-a716-446655440002');
    expect(url).not.toContain('licences');
  });

  it('Family Monthly → plan 0003 (no licences param)', () => {
    const url = getSignupUrl('family', 'monthly');
    expect(url).toContain('550e8400-e29b-41d4-a716-446655440003');
    expect(url).not.toContain('licences');
  });

  it('Family Yearly → plan 0004 (no licences param)', () => {
    const url = getSignupUrl('family', 'yearly');
    expect(url).toContain('550e8400-e29b-41d4-a716-446655440004');
    expect(url).not.toContain('licences');
  });
});
