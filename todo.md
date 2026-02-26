# MySentry Website TODO

## Completed Features
- [x] Basic homepage layout with hero section
- [x] Navigation menu with all pages
- [x] Pricing page with Free and Premium plans
- [x] Employers page with industry sections
- [x] Seniors page with safety features
- [x] Individual/Family page
- [x] Partners page with multi-step application form
- [x] About Us page
- [x] Team page
- [x] Blog listing and individual post pages
- [x] Privacy Policy page
- [x] Terms & Conditions page
- [x] Contact page
- [x] How It Works page with feature demos
- [x] Footer with social media links (Facebook, Instagram, LinkedIn, YouTube)
- [x] Text visibility fixes on Blog, Privacy, Terms pages
- [x] Footer copyright text visibility fix
- [x] Partner page form styling consistency
- [x] Scroll-to-top behavior for all footer links
- [x] Updated "What We Provide" section with 24/7 Professional Monitoring
- [x] Hero section text updates for comprehensive safety & health monitoring

## Database & Backend (Just Completed)
- [x] Upgraded project to full-stack with database support
- [x] Created database schema for form submissions
- [x] Contact form submissions table
- [x] Partner applications table
- [x] Demo requests table
- [x] Newsletter subscriptions table
- [x] Trial signups table
- [x] Created tRPC API endpoints for all forms
- [x] Connected Partner page form to backend API
- [x] Connected Employer Demo modal to backend API
- [x] Connected Footer newsletter form to backend API
- [x] Added owner notifications for new submissions
- [x] Created vitest tests for all API endpoints

## Image Updates
- [x] Replaced panic feature image with user-provided image (two phones showing Panic Alarm trigger and live video response)
- [x] Adjusted image styling to prevent zoom/crop issues (object-contain, max-h-[600px])

## Pending/Future Features
- [ ] Contact page form connection to backend
- [ ] Trial signup button connections
- [ ] Admin dashboard for viewing submissions
- [ ] Email notifications for form submissions
- [x] Replaced How It Works hero section image with MySentry app interface showing multiple devices
- [x] Replaced Feature 02 (Fall Detection) image with WebMysentry(5).svg showing phone and watch with fall detected alert
- [x] Replaced Feature 03 (Near-Fall Detection) image with WebMysentry(4).svg showing phone and watch with stumble alert
- [x] Replaced How It Works hero section with WebMysentry(6).svg - Multi-device app interface overview
- [x] Replaced Feature 01 (Panic Alarm) image with WebMysentry(7).svg - Panic alarm triggered with live video
- [x] Replaced Feature 04 (Crash Detection) image with WebMysentry(8).svg - Phone and watch showing crash detected
- [x] Replaced Feature 05 (Smart Connectivity) image with WebMysentry(9).svg - Three phones showing location sharing
- [x] Replaced Feature 06 (Health Monitoring) image with WebMysentry(10).svg - Daily Health Vitals with phone and watch
- [x] Replaced Feature 07 (Live Video) image with WebMysentry(12).svg - Video call and chat interface
- [x] Replaced Feature 08 (MeetSafe) image with WebMysentry(11).svg - Meetings and Meet Safe with Voice screens

## Animation and Visual Consistency Updates
- [x] Analyze existing animation patterns in the project
- [x] Clean up SVG backgrounds in Features 6, 7, 8 (remove white/placeholder backgrounds)
- [x] Apply consistent animations to Feature 01 (Panic Alarm) mockup
- [x] Apply consistent animations to Feature 02 (Fall Detection) mockup
- [x] Apply consistent animations to Feature 03 (Near-Fall Detection) mockup
- [x] Apply consistent animations to Feature 04 (Crash Detection) mockup
- [x] Apply consistent animations to Feature 05 (Smart Connectivity) mockup
- [x] Apply consistent animations to Feature 06 (Health Monitoring) mockup
- [x] Apply consistent animations to Feature 07 (Live Video) mockup
- [x] Apply consistent animations to Feature 08 (MeetSafe) mockup
- [x] Ensure visual consistency across all feature sections
- [x] Updated chatbot welcome message to "Hi there! What brings you in today?"

## Pricing Updates
- [x] Update Individual Plan: $15/month, $144/year (20% off, save $36)
- [x] Update Family Plan: $30/month, $288/year (20% off, save $72)
- [x] Add family member note: "Invite up to 6 family members to join your plan (1 admin account holder and 5 family members)"
- [x] Update all pricing instances across all pages (PricingSection.tsx and Pricing.tsx)

## UI Fixes
- [x] Adjust chatbot layout to prevent overlapping with header (reduced height from 600 to 500, increased bottom offset from 20 to 30)
- [x] Add mobile-responsive chatbot size that adjusts dimensions on smaller screens

## Pricing Signup Links
- [x] Add VITE_FRONTEND_BASE_URL environment variable
- [x] Update Individual Monthly CTA to link to /create-saas-account?plan=individual_basic_monthly
- [x] Update Individual Yearly CTA to link to /create-saas-account?plan=individual_basic_yearly
- [x] Update Family Monthly CTA to link to /create-saas-account?plan=family_basic_monthly
- [x] Update Family Yearly CTA to link to /create-saas-account?plan=family_basic_yearly
- [x] Ensure dynamic routing based on plan selection
- [x] Update frontend base URL to https://stagedashboard.mysentry.ai for all pricing CTA signup links
- [x] Rename About page route from /about to /about-us and update all internal links
- [x] Add Login button to navbar next to Start a Free Trial, using environment-based URL (VITE_FRONTEND_BASE_URL + /login)
- [x] Update Pricing CTA URLs to include currency=USD and price parameters for all four plan/billing combinations
- [x] Update Pricing CTA prices: Individual Monthly $15, Individual Yearly $144, Family Monthly $30, Family Yearly $288
- [x] Add favicon using provided Group630.svg file
- [x] Move Login button to the right side of Start 7-Day Free Trial button in header
- [x] Update pricing CTA base URL from stagedashboard.mysentry.ai to dashboard.eagleeyeai.ai
- [x] Update pricing CTA links to use UUID-based plan parameters instead of plan key strings
- [x] Fix Login button visibility on mobile navbar (show directly, not only inside hamburger menu)

## SEO & GEO Optimization

### Phase 0: Baseline Audit + P0 Fixes
- [x] Create robots.txt at site root with sitemap reference
- [x] Create sitemap_index.xml, sitemap_pages.xml, sitemap_blog.xml
- [x] Add canonical tags on every page (enforce https://mysentry.ai)
- [x] Add noindex meta to dashboard/login references
- [ ] Create Google Search Console readiness checklist
- [ ] Optimize images (lazy-load, width/height attributes)

### Phase 1: Keyword Research + Keyword-to-Page Map
- [x] Create keyword-to-page map for all clusters (Consumer Safety, Seniors/Medical Alert, Employers/Lone Worker, GEO/AEO)

### Phase 2: Build SEO Money Pages
- [ ] Create /features/ hub page
- [ ] Create /features/panic-button-app/
- [ ] Create /features/fall-detection-app/
- [ ] Create /features/crash-detection/
- [ ] Create /features/24-7-professional-monitoring/
- [ ] Create /features/emergency-contacts/
- [ ] Create /features/live-video-response/
- [ ] Create /features/health-monitoring/
- [ ] Create /features/meetsafe-check-ins/
- [ ] Create /use-cases/ hub page
- [ ] Create /use-cases/safety-app-for-women/
- [ ] Create /use-cases/family-safety-app/
- [ ] Create /use-cases/medical-alert-app-for-seniors/
- [ ] Create /use-cases/lone-worker-safety-app/
- [ ] Create /use-cases/home-healthcare-worker-safety/
- [ ] Create /industries/ hub page
- [ ] Create /industries/home-healthcare/
- [ ] Create /industries/construction/
- [ ] Create /industries/retail/
- [ ] Create /industries/hospitality/
- [ ] Create /industries/real-estate/
- [ ] Create /industries/education/
- [ ] Create /compare/ hub page
- [ ] Create /compare/noonlight-vs-mysentry/
- [ ] Create /compare/life360-vs-mysentry/
- [ ] Create /compare/fallcall-vs-mysentry/
- [ ] Create /compare/google-personal-safety-vs-mysentry/

### Phase 4: Sitewide Meta Titles + Descriptions
- [ ] Rewrite meta titles and descriptions for all existing pages
- [ ] Rewrite meta titles and descriptions for all new pages

### Phase 5: Schema Structured Data
- [ ] Add Organization schema sitewide
- [ ] Add SoftwareApplication schema sitewide
- [ ] Add FAQPage schema on pages with FAQs
- [ ] Add HowTo schema on setup/how-to pages

### Phase 6: Blog Topical Map + Posts
- [ ] Create topical map with 6 content clusters
- [ ] Create 10 new SEO-optimized blog posts

### Phase 7-8: Linking Strategy + Dashboard Protection
- [ ] Add Features navigation entry to navbar
- [ ] Add contextual internal links in existing pages
- [ ] Add Feature + Use-Case links to footer
- [ ] Create external backlink plan deliverable
- [ ] Add "Secure checkout" microcopy to dashboard CTAs

### Final Deliverable
- [ ] Generate comprehensive SEO report
- [x] Fix homepage meta: title should include "24/7 Personal Safety & Health Monitoring with Emergency Response", remove "StoryBrand-based" from description
