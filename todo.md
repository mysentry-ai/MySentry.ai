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
- [x] Create /features/ hub page
- [x] Create /features/panic-button-app/
- [x] Create /features/fall-detection-app/
- [x] Create /features/crash-detection/
- [x] Create /features/24-7-professional-monitoring/
- [x] Create /features/emergency-contacts/
- [x] Create /features/live-video-response/
- [x] Create /features/health-monitoring/
- [x] Create /features/meetsafe-check-ins/
- [x] Create /use-cases/ hub page
- [x] Create /use-cases/safety-app-for-women/
- [x] Create /use-cases/family-safety-app/
- [x] Create /use-cases/medical-alert-app-for-seniors/
- [x] Create /use-cases/lone-worker-safety-app/
- [x] Create /use-cases/home-healthcare-worker-safety/
- [x] Create /industries/ hub page
- [x] Create /industries/home-healthcare/
- [x] Create /industries/construction/
- [x] Create /industries/retail/
- [x] Create /industries/hospitality/
- [x] Create /industries/real-estate/
- [x] Create /industries/education/
- [x] Create /compare/ hub page
- [x] Create /compare/noonlight-vs-mysentry/
- [x] Create /compare/life360-vs-mysentry/
- [x] Create /compare/fallcall-vs-mysentry/
- [x] Create /compare/google-personal-safety-vs-mysentry/

### Phase 4: Sitewide Meta Titles + Descriptions
- [x] Rewrite meta titles and descriptions for all existing pages
- [x] Rewrite meta titles and descriptions for all new pages

### Phase 5: Schema Structured Data
- [x] Add Organization schema sitewide
- [x] Add SoftwareApplication schema sitewide
- [x] Add FAQPage schema on pages with FAQs
- [x] Add HowTo schema on setup/how-to pages

### Phase 6: Blog Topical Map + Posts
- [x] Create topical map with 6 content clusters
- [x] Create 10 new SEO-optimized blog posts
- [x] Update blog sitemap with new posts

### Phase 7-8: Linking Strategy + Dashboard Protection
- [x] Add Features, Use Cases, Industries, Compare navigation entries to navbar More menu
- [x] Add contextual internal links via hub pages and SEOPageTemplate cross-links
- [x] Add Feature, Use-Case, Industries, Compare links to footer Solutions column
- [ ] Create external backlink plan deliverable
- [x] Update sitemaps with all new pages

### Final Deliverable
- [x] Generate comprehensive SEO report
- [x] Fix homepage meta: title should include "24/7 Personal Safety & Health Monitoring with Emergency Response", remove "StoryBrand-based" from description
- [x] Fix broken Explore More internal links on all Use Cases, Industries, and Compare SEO pages (Panic Button, Fall Detection links giving 404) - Fixed 46 broken hrefs across 29 SEO pages

## Blog Management System (CMS)

### Database & Schema
- [x] Create blog_posts table with full schema (title, slug, category, status, excerpt, heroImage, content, SEO fields, etc.)
- [x] Create blog_categories table for single-level categories
- [x] Create blog_redirects table for slug change 301 redirects
- [x] Run database migrations

### Server-Side API
- [x] Admin authentication (session-based, username/password)
- [x] Blog CRUD procedures (create, read, update, delete, duplicate)
- [x] Blog list with search, filters (keyword, category, status, date range)
- [x] Bulk actions (publish, unpublish, delete)
- [x] Category CRUD procedures
- [x] Slug uniqueness validation and redirect creation on slug change
- [x] Auto-compute read time
- [x] Autosave endpoint

### AI Wizard
- [x] AI topic suggestion endpoint (10 ideas based on category + ICP + goal)
- [x] AI outline generation endpoint
- [x] AI full draft generation (humanized, no em dashes)
- [x] AI SEO pack generation (meta title/desc, keywords, tags, slug suggestions)
- [x] AI image generation for hero + inline images
- [x] Compliance check (plagiarism heuristic, repetitive phrasing, reading level, no em dashes)

### Admin Console UI
- [x] Admin login page
- [x] Blog list page with search, filters, table, bulk actions
- [x] Blog editor with split layout (WYSIWYG left, Settings & SEO panel right)
- [x] TipTap WYSIWYG editor with headings, lists, tables, quotes, callouts, image upload
- [x] Reusable blocks (Highlight, Tip, Warning, Checklist)
- [x] Link behavior (brand greenish styling, external link attributes, internal badge)
- [x] Autosave every 15 seconds
- [x] Hero section controls (upload/AI generate, alt text, caption)
- [x] SEO & Discoverability panel (meta title/desc, keywords, tags, OG fields, indexing toggles, geo targeting)
- [x] Category management page
- [x] AI Wizard multi-step flow (7 steps)
- [x] Preview mode (desktop + mobile toggles)
- [x] Sticky top buttons (Save Draft, Save, Preview, Publish, Unpublish)
- [x] Confirmation modals (unpublish confirm, delete typed confirmation)

### Migration
- [x] Import all 18 existing static blog posts into database
- [x] Preserve slugs, categories, images, content, dates
- [x] Deduplicate by slug

### Public Frontend Integration
- [x] Update /blogs listing to fetch from database API
- [x] Update /blog/:slug to render from database
- [x] Support search + category filter on listing page
- [x] Consistent styling with brand colors
- [x] Slug redirect support (301 for changed slugs)

### Tests
- [x] Vitest tests for blog CRUD operations
- [x] Vitest tests for admin auth
- [x] Vitest tests for AI wizard endpoints

## Blog Admin CMS Redesign
- [x] Add /admin route redirect to /admin/blog
- [x] Redesign admin login page - clean white/light green MySentry branding, high contrast, no dark theme
- [x] Redesign blog list page - proper MySentry color scheme, polished table UX, no gray backgrounds
- [x] Redesign blog editor - clean light theme, brand-consistent sidebar, readable inputs
- [x] Redesign AI Wizard - fix ICP dropdown to show category-relevant options, clean light styling
- [x] Redesign category manager page with brand consistency
- [x] Redesign admin sidebar/layout with MySentry branding
- [x] Hide chatbot widget on all admin pages
- [x] Ensure all admin text is high contrast (black on white/light backgrounds)

## Blog Admin Dropdown Fix
- [x] Fix invisible dropdown items in Categories and Status filters on BlogList page - text not visible against white background
- [x] Fix invisible dropdown text in ALL admin dropdowns (BlogList categories/status, AIWizard category/ICP/goal, BlogEditor category/status) - text not visible against white background
- [x] Fix AI Wizard "Admin authentication required" error when clicking Suggest 10 Topics - token not being passed to API
- [x] Redesign BlogEditor page with proper MySentry brand colors - high contrast black text on white inputs, green accents, clean SEO panel

## Blog Admin UI Fixes (Round 2)
- [x] Fix BlogEditor Replace button not working (file input not triggering on click)
- [x] Fix BlogEditor gray input backgrounds - use white with proper borders
- [x] Make all admin pages professional layout with consistent MySentry branding
- [x] Fix AI Wizard auth token passing for all mutations
- [x] Update AI blog generation prompts to avoid AI detection (Wikipedia guidelines on signs of AI writing)
- [x] Fix chatbot appearing on admin pages
- [x] Fix /admin redirect to /admin/blog
- [x] Run vitest and thorough QA on all admin pages

## Blog Admin UI Fixes (Round 3)
- [x] Fix AI Wizard dropdown showing blank gray box instead of options (Category, ICP, Goal selects)
- [x] Fix "Admin authentication required" error when clicking Suggest 10 Topics
- [x] Make admin UI more colorful with better contrast and visibility
- [x] Fix blog post rendering inconsistency between WYSIWYG editor, preview, and public page

## Blog Content Fixes (Round 4)
- [x] Fix blog content mismatch between WYSIWYG editor and public page (excerpt/first paragraph differs) - Clarified: excerpt is a separate summary field shown as blockquote on public page, content is the full article in editor. This is by design.
- [x] Fix duplicate blog posts appearing on /blogs listing page with same hero images - All 18 posts now have unique CDN-hosted hero images
- [x] Ensure each blog post has unique hero image - Searched and uploaded 18 unique relevant stock images to CDN
- [x] Check for and remove any duplicate blog entries in the database - No duplicates found, all posts are unique

## Blog Admin Enhancements (Round 5)
- [x] Improve AI image generation prompts to avoid artifacts (duplicated people, blurred areas, AI tells)
- [x] Add "Regenerate with AI" button with editable prompt in AI Wizard image step
- [x] Add "Regenerate with AI" button with editable prompt in Blog Editor hero image section
- [x] AI Wizard already saves posts as "draft" by default (Save as Draft button on step 7)
- [x] Blog Editor Save button now shows "Save Draft" when post is in draft status

## Meta & Blog Fixes (Round 6)
- [x] Update site meta description to remove "StoryBrand-based" wording
- [x] Spread blog post dates from December 1, 2025 to today (Feb 27, 2026)
- [x] Sort admin blog list by date descending (latest first)

## Blog Editor/CMS Fixes (Round 7)
- [x] Fix Insert Link text box - text invisible (white on light gray)
- [x] Fix link editing - allow modifying existing links without remove/re-add
- [x] Fix hero image display in editor and preview - image cropped/not fully visible
- [x] All "Start 7-Day Free Trial" links should go to Pricing page (already done)
- [x] Add CTA styling ("Start your 7-day free trial today!") to WYSIWYG editor and preview - BlogCTA now appears in preview, indicator shown below editor
