export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Frontend base URL for signup links
// Uses VITE_FRONTEND_BASE_URL if set, otherwise defaults to https://www.mysentry.ai
export const getFrontendBaseUrl = () => {
  const envUrl = import.meta.env.VITE_FRONTEND_BASE_URL;
  // If the env URL contains a path or hash, extract just the origin
  if (envUrl) {
    try {
      const url = new URL(envUrl);
      return url.origin;
    } catch {
      // If it's not a valid URL, return as-is or use default
      return envUrl || 'https://www.mysentry.ai';
    }
  }
  return 'https://www.mysentry.ai';
};

// Generate login URL pointing to the MySentry dashboard
export const getMySentryLoginUrl = (): string => {
  return 'https://dashboard.mysentry.ai/website-auth?redirect_url=login';
};

// Plan signup URL types
export type PlanType = 'individual' | 'family';
export type BillingCycle = 'monthly' | 'yearly';
export type EnterpriseCoverage = 'employees_only' | 'employees_families';

// UUID mapping for each plan type and billing cycle
const PLAN_UUIDS: Record<PlanType, Record<BillingCycle, string>> = {
  individual: {
    monthly: '550e8400-e29b-41d4-a716-446655440001',
    yearly: '550e8400-e29b-41d4-a716-446655440002',
  },
  family: {
    monthly: '550e8400-e29b-41d4-a716-446655440003',
    yearly: '550e8400-e29b-41d4-a716-446655440004',
  },
};

// UUID mapping for Enterprise plans (coverage × billing)
const ENTERPRISE_PLAN_UUIDS: Record<EnterpriseCoverage, Record<BillingCycle, string>> = {
  employees_families: {
    monthly: '550e8400-e29b-41d4-a716-446655440005',
    yearly:  '550e8400-e29b-41d4-a716-446655440006',
  },
  employees_only: {
    monthly: '550e8400-e29b-41d4-a716-446655440007',
    yearly:  '550e8400-e29b-41d4-a716-446655440008',
  },
};

// Generate signup URL based on plan type and billing cycle
export const getSignupUrl = (planType: PlanType, billingCycle: BillingCycle): string => {
  const planUuid = PLAN_UUIDS[planType][billingCycle];
  return `https://dashboard.mysentry.ai/website-auth/create-account?plan=${planUuid}`;
};

// Generate Enterprise checkout URL with dynamic licence count.
// Minimum enforced: 5. Query parameter name is `licences` (not `licenses`).
export const getEnterpriseSignupUrl = (
  coverage: EnterpriseCoverage,
  billingCycle: BillingCycle,
  licences: number,
): string => {
  const planUuid = ENTERPRISE_PLAN_UUIDS[coverage][billingCycle];
  const safeLicences = Math.max(5, Math.floor(licences));
  const url = new URL('https://dashboard.mysentry.ai/website-auth/create-account');
  url.searchParams.set('plan', planUuid);
  url.searchParams.set('licences', String(safeLicences));
  return url.toString();
};
