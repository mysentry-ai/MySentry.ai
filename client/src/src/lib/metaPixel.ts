/**
 * Meta Pixel Event Tracking Utility
 * Tracks user interactions with CTA buttons (signup, contact, demo)
 */

declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Track a "Lead" event for CTA button clicks
 * This is called when users interact with signup, contact, or demo buttons
 */
export const trackLeadEvent = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'Lead');
    } catch (error) {
      console.warn('Meta Pixel Lead event tracking failed:', error);
    }
  }
};

/**
 * Track a custom event with optional parameters
 * @param eventName - Name of the event to track
 * @param params - Optional parameters for the event
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (error) {
      console.warn(`Meta Pixel ${eventName} event tracking failed:`, error);
    }
  }
};

export default {
  trackLeadEvent,
  trackCustomEvent,
};
