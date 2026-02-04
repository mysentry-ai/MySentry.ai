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

// Plan signup URL types
export type PlanType = 'individual' | 'family';
export type BillingCycle = 'monthly' | 'yearly';

// Generate signup URL based on plan type and billing cycle
export const getSignupUrl = (planType: PlanType, billingCycle: BillingCycle): string => {
  const baseUrl = getFrontendBaseUrl();
  const planParam = `${planType}_basic_${billingCycle}`;
  return `${baseUrl}/create-saas-account?plan=${planParam}`;
};
