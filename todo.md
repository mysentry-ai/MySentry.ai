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

## Features Page Redesign (Round 8)
- [x] Redesign Features page to be consistent with other pages - remove dark cards, use light greenish bg with white cards, green accents, high-contrast black text

## Blog Post Hero Image Mobile Fix (Round 9)
- [x] Fix blog post hero image on mobile - changed aspect ratio from 21/9 to 4/3 on mobile, 16/9 on tablet, 2/1 on desktop; removed horizontal padding and border-radius on mobile for edge-to-edge display

## SEO + AEO + GEO Optimization (Round 10)

### Phase 0: Hard SEO Foundation
- [x] P0.1 Canonical host unification - already enforced via SEO component getCanonicalUrl()
- [x] P0.2 robots.txt - added /admin/ disallow, sitemap directive already present
- [x] P0.3 Sitemap system - converted to dynamic server-side generation, blog sitemap pulls from DB
- [x] P0.4 Rendering/crawlability audit - SPA with SSR-like meta tags via react-helmet-async
- [ ] P0.5 Core Web Vitals - images already use width/height, lazy-load on below-fold (ongoing)

### Phase 1: Keyword Strategy
- [x] P1.1 Create Keyword-to-Page Map document with primary/supporting keywords per page (SEO-Keyword-Page-Map.md)

### Phase 2: On-Page SEO Rebuild
- [x] P2.1 Sitewide Title tag + Meta description overhaul - already optimized with unique keyword-rich titles/descriptions
- [x] P2.2 Header hierarchy enforcement - SEOPageTemplate enforces single H1 and logical H2/H3 structure
- [x] P2.3 Internal linking - relatedLinks prop on all 25 SEOPageTemplate pages + hub pages provide cross-links

### Phase 3: AEO Template
- [x] P3.1 Answer Engine blocks already present on all 25 pages (Direct Answer, How It Works, What Happens After Alert, Best For, Key Takeaways, FAQs)
- [x] P3.2 Added Setup/Requirements sections to all 25 SEOPageTemplate pages

### Phase 4: GEO Layer
- [x] P4.1 Created /llms.txt and /llms-full.txt for AI citation
- [x] P4.2 Added cite-ready proof blocks to all 25 SEOPageTemplate pages

### Phase 5: Schema/Structured Data
- [x] P5.1 Organization + SoftwareApplication schema already sitewide via SEO component
- [x] P5.2 FAQPage schema auto-generated on every SEOPageTemplate page
- [x] P5.3 HowTo schema auto-generated on every SEOPageTemplate page from steps
- [x] P5.4 Article schema for blog posts - added JSON-LD Article schema to BlogPost.tsx

### Phase 6: Content Expansion
- [x] P6.1 Created missing money pages: /features/safety-check-in-app, /use-cases/teen-driver-safety (medical-alert-app-for-seniors already existed)
- [x] P6.2 Created 40 blog topic plan (Blog-40-Topic-Plan.md) mapped to long-tail keywords with publishing schedule

### Phase 7: Digital Marketing Layer
- [x] P7.1 Event tracking - site already has analytics via VITE_ANALYTICS_ENDPOINT (built-in platform analytics)
- [x] P7.2 Created Backlink-Strategy.md with 10 linkable assets, 6 outreach categories, and priority plan

### Final Deliverables
- [x] Generated SEO-AEO-GEO-Optimization-Report.md with complete Before vs After analysis

## Pricing, Chatbot & Trial Button Updates (Round 10)
- [x] P1: Update Individual Monthly CTA to https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440001
- [x] P1: Update Individual Yearly CTA to https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440002
- [x] P1: Update Family Monthly CTA to https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440003
- [x] P1: Update Family Yearly CTA to https://dashboard.mysentry.ai/create-saas-account?plan=550e8400-e29b-41d4-a716-446655440004
- [x] P2: Remove "Start a 7-Day Free Trial" hero button on Pricing page (desktop + mobile)
- [x] P3: Set chatbot autoOpen to false, remove autoOpenDelay and auto-trigger configs
- [x] P4: All sitewide "Start a 7-Day Free Trial" buttons redirect to /pricing#pricing-plans with smooth scroll

## Category Pill Overlay Fixes (Round 11)
- [x] Add category pill overlay to featured story card on /blogs listing page (same style as grid cards)
- [x] Add category pill overlay to hero image on individual blog post pages (/blog/:slug)
- [x] Add category pill overlay to related posts cards on individual blog post pages

## Google Search Console Duplicate Content Fixes (Round 12)
- [x] Investigate current sitemap.xml vs sitemaps.xml setup
- [x] Consolidate to single sitemap.xml (remove static XML files, keep dynamic server routes)
- [x] Canonical tags already present via SEO component (enforcing https://mysentry.ai)
- [x] Added www-to-non-www 301 redirect in server middleware
- [x] Added /sitemap.xml → /sitemap_index.xml 301 redirect, all URLs use https://mysentry.ai

## Login Button URL Update (Round 13)
- [x] Update Login button URL to https://dashboard.mysentry.ai/login across all pages (desktop + mobile)
- [x] Ensure only the Login button uses this URL, no other elements affected
- [x] Verify Login button works on both desktop and mobile layouts

## Google Search Console - "Page with redirect" Fix (Round 14)
- [x] Investigate which redirects are causing "Page with redirect" indexing issue
- [x] Fix /sitemap.xml redirect (serve content directly instead of 301 redirect)
- [x] Review www-to-non-www redirect (kept - correct behavior, Google will stop flagging once it re-crawls)
- [x] Ensure sitemap only lists final canonical URLs (robots.txt now references single /sitemap.xml)

## Growth Strategy Phase 1: Homepage Conversion Optimization (Round 15)
- [x] P1.1: Add ICP Selector below hero text ("I am looking for safety for... Myself / My Family / My Team")
- [x] P1.1: Dynamic CTA - "My Team" changes CTA to "Book a Demo", others show "Start 7-Day Free Trial"
- [x] P1.2: Add "Trusted By" / "As Featured In" banner below hero section with metric
- [x] P1.3: Consolidate "Who We Protect" from 12 items to 4 tabs (Seniors, Families, Women, Employers)
- [x] P1.3: Use tabbed interface so only one segment visible at a time
- [x] Typography: Verify hero max 55px, menu items 28px
- [x] Mobile: Ensure all new components are fully responsive

## Growth Strategy Phase 2: Massive Content Expansion (Round 16)

### Part 1: BOFU & Comparison Pages
- [x] P2.1a: Create /compare/medical-alert-devices (modern app vs stigmatizing lanyard)
- [x] P2.1b: Enhanced existing /compare/sosecure-adt-vs-mysentry page
- [ ] P2.1c: Update existing /compare/life360-vs-mysentry with enhanced comparison table (deferred - existing pages already have comparison tables)
- [ ] P2.1d: Update existing /compare/noonlight-vs-mysentry with enhanced comparison table (deferred)
- [ ] P2.1e: Update existing /compare/fallcall-vs-mysentry with enhanced comparison table (deferred)
- [ ] P2.1f: Update existing /compare/google-personal-safety-vs-mysentry with enhanced comparison table (deferred)
- [x] P2.2a: Create /solutions/home-healthcare (PEACE framework)
- [x] P2.2b: Create /solutions/real-estate (PEACE framework)
- [x] P2.2c: Create /solutions/delivery-drivers (PEACE framework)
- [x] P2.2d: Create /solutions/construction (PEACE framework)
- [x] P2.2e: Create /solutions/retail-workers (PEACE framework)
- [x] P2.3a: Create /safety-for/women-living-alone (StoryBrand framework)
- [x] P2.3b: Create /safety-for/seniors-aging-in-place (StoryBrand framework)
- [x] P2.3c: Create /safety-for/solo-travelers (StoryBrand framework)

### Part 2: B2B Sales Enablement
- [x] P2.4a: Create /case-studies/home-healthcare
- [x] P2.4b: Create /case-studies/real-estate
- [x] P2.4c: Create /case-studies/field-services
- [x] P2.5: Create /resources/employer-one-pager (PDF-ready visual page)
- [ ] P2.6: Enhance ROI calculator on Employers page with "Email ROI report" lead capture (deferred)

### Part 3: Wearable Integration Pages
- [x] P2.7a: Create /integrations/apple-watch
- [x] P2.7b: Create /integrations/samsung-galaxy-watch
- [x] P2.7c: Create /integrations/oura-ring

### Part 4: Authority Content Guides
- [x] P2.8a: Create /guides/lone-worker-safety (OSHA deep dive)
- [x] P2.8b: Create /guides/professional-monitoring
- [x] P2.8c: Create /guides/senior-safety-planning

### Part 5: SEO & Internal Linking
- [x] P2.9: Internal linking - all new pages include relatedLinks to BOFU and comparison pages
- [x] P2.10: All new pages include CTA buttons linking to pricing/trial
- [x] P2.11: FAQPage schema auto-generated via SEOPageTemplate on all new pages
- [x] P2.12: Article/HowTo schema auto-generated via SEOPageTemplate on all guides
- [ ] P2.13: Add Solutions and Integrations to main menu navigation (deferred to next round)
- [x] P2.14: Update sitemaps with all new pages (64 total URLs in sitemap_pages.xml)

## Remove Disclaimer/Warning Banner (Round 17)
- [x] Remove "If you feel unsafe, use the MySentry panic alarm..." disclaimer from all pages (37 files)
- [x] Remove from SEOPageTemplate (prop, destructuring, and rendering code removed)
- [x] Remove from any blog post templates (blog posts don't use SEOPageTemplate, no disclaimers found)
- [x] Verify removal across all pages (zero disclaimer= matches, zero TS errors, 42 tests pass)

## Buying Process Explanation (Round 18)
- [x] Audit site for places where the signup/buying process needs to be explained
- [x] Add "How to Get Started" section to Pricing page explaining online-only signup (3-step visual section)
- [x] Add buying process explanation to FAQ sections (2 new FAQs on Pricing page)
- [x] How It Works page already has correct online-first signup steps (ActivationSteps component + schema updated)
- [x] Ensure no pages imply in-app purchases exist (14 files updated with online-first messaging)

## Credit Card Messaging & Step Card Link Fix (Round 19)
- [x] Remove all "No credit card required" messaging sitewide (credit card IS required) - confirmed no instances exist
- [x] Replace with accurate messaging: "Cancel within 7 days and you won't be charged" - already present in FAQ and schema
- [x] Link "Choose Your Plan" step card on Pricing page to Individual Monthly create-account URL

## SEO Meta Title Update (Round 20)
- [x] Update homepage SEO meta title to include "Personal" to match hero tagline

## New Pricing Page Replacement (Round 21)
- [x] Rename current Pricing.tsx to PricingLegacy.tsx (preserve for future reactivation)
- [x] Create new Pricing.tsx from provided HTML configurator design
- [x] Implement B2C/B2B toggle with Individual/Family/Employer modes
- [x] Implement step-based configurator (coverage type, plan, billing duration)
- [x] Implement sticky summary sidebar with dynamic pricing
- [x] Implement B2B employee slider and custom quote modal
- [x] Wire CTA buttons to correct UUID-based signup URLs
- [x] Update routing to use new Pricing page, keep legacy route hidden
- [x] Ensure full responsiveness (desktop, tablet, mobile)
- [x] Maintain consistent site styling (Layout wrapper, SEO component, background colors)

## Employer Pricing Fix (Round 22)
- [x] Fix employer pricing: both Individual and Family should be $15/user/month, $12/user/month yearly (superseded by full pricing logic overhaul)

## Pricing Logic Overhaul (Round 22)
- [x] Update pricing: Individual $15/mo or $120/yr per license, Family $30/mo or $288/yr per license
- [x] Same logic for B2C (1 license) and B2B (multiple licenses)
- [x] Dynamic update based on plan type, billing duration, and number of licenses

## Pricing Page Overhaul Round 23
- [x] Fix pricing: Individual $15/mo, $144/yr (15×12×0.8); Family $30/mo, $288/yr (30×12×0.8)
- [x] Same logic for B2C (1 license) and B2B (multiple licenses)
- [x] Add proper top spacing between nav bar and main heading
- [x] Change toggle background from grey to white
- [x] Create custom quotation form matching provided screenshot exactly
- [x] Connect "Customized Quotation" button to the form modal
- [x] Ensure full responsiveness (desktop, tablet, mobile)
- [x] Verify all pricing combinations work correctly

## Pricing Page UI/UX Defaults & Input Fixes (Round 24)
- [x] Set Personal Plan default to Individual Monthly
- [x] Set Employer Plan default to Individual Monthly
- [x] Set default employee count to 5 (editable, not locked)
- [x] Fix employee count input to be fully editable (remove min value restriction)
- [x] Set default Coverage Type to Individual for both B2C and B2B
- [x] Apply text updates: (Employer plans) → (Enterprise Plans)
- [x] Apply text updates: (Select Coverage Type) → (Who is this plan for?)
- [x] Apply text updates: (Individual) → (Just Me), (Family) → (My Family)
- [x] Apply text updates: (Select subscription plan) → (Select your plan)
- [x] Apply text updates: (Commit to long-term safety and save) → (Save more with annual billing)
- [x] Update B2B Coverage Type labels: (Individual) → (Employees Only), (Family) → (Employees + Families)
- [x] Update B2B Coverage Type descriptions
- [x] Apply Proxima Nova font throughout (no Black variant)
- [x] Verify all defaults and editable fields work correctly

## Pricing Page Button & Form Styling Updates (Round 25)
- [x] Change "Get Offer" button to "Proceed with Payment"
- [x] Remove grey background highlighting from all form input fields in custom quotation modal
- [x] Ensure form fields display with white background (no color fill)

## Custom Quotation Form Styling & Content Updates (Round 26)
- [x] Change all form field backgrounds from grey to white
- [x] Add black outline/border to all form fields
- [x] Update description text: remove "enterprise safety" from the form description
- [x] Replace "Specific Safety Requirements (Optional)" with "Other requirements (Optional)"
- [x] Verify all changes are implemented correctly

## Privacy Policy Page Expansion (Round 27)
- [x] Add Section 1: How We Use Personal Information (ID: how-we-use-personal-information)
- [x] Add Section 2: AI Features and Model Training (ID: ai-features-model-training)
- [x] Add Section 3: Data Retention (ID: data-retention)
- [x] Add Section 4: Sharing with Third Parties (ID: third-party-sharing)
- [x] Add Section 5: Privacy Rights and Data Requests (ID: privacy-rights-requests)
- [x] Add Section 6: User Choices and Opt-Out Options (ID: opt-out-options)
- [x] Add Section 7: Effect of Opting Out (ID: effect-of-opting-out)
- [x] Add Section 8: Authorized Personnel Access (ID: authorized-access)
- [x] Add Section 9: User Data Control (ID: user-data-control)
- [x] Add Section 10: AI Updates (ID: ai-updates)
- [x] Create table of contents with anchor links at top of page
- [x] Ensure smooth scrolling and mobile responsiveness
- [x] Verify all anchor links work correctly

## Privacy Policy Sticky TOC (Round 28)
- [x] Add IDs to all existing and new section headings on Privacy page
- [x] Create sticky TOC component with left-side positioning
- [x] Implement smooth scrolling to sections when TOC links are clicked
- [x] Add active section highlighting as user scrolls
- [x] Add mobile collapse/toggle for TOC on smaller screens
- [x] Ensure TOC is accessible (keyboard navigation, screen readers)
- [x] Add hover effects and visual feedback for TOC links
- [x] Test TOC functionality across all screen sizes
- [x] Verify all anchor links work correctly

## Privacy Policy Section IDs Update (Round 29)
- [x] Update section IDs to match exact user specifications (20 sections total)
- [x] Add ID #collection-user-information to "Collection of User Information"
- [x] Add ID #utilization-collected-information to "Utilization of Collected Information"
- [x] Add ID #sharing-information to "Sharing of Information"
- [x] Add ID #permission-access-contacts to "Permission to Access Contacts"
- [x] Add ID #data-security-compliance to "Data Security & Compliance"
- [x] Add ID #rights-choices-users to "Rights and Choices for Users"
- [x] Add ID #requesting-data-deletion to "Requesting Data Deletion"
- [x] Add ID #privacy-children to "Privacy for Children"
- [x] Verify all 20 sections have matching IDs in TOC
- [x] Test all TOC links for smooth scrolling
- [x] Verify active section highlighting works correctly
- [x] Test mobile collapse functionality


## Meta Pixel Event Tracking (Round 31)
- [ ] Add Meta Pixel initialization code to client/index.html
- [ ] Create Meta Pixel tracking utility function for Lead events
- [ ] Add Lead event tracking to all signup/CTA buttons
- [ ] Add Lead event tracking to all contact/demo buttons
- [ ] Verify PageView tracking works on all pages
- [ ] Test Lead events fire without affecting site performance
- [ ] Verify Meta Pixel events in Facebook Events Manager


## Meta Pixel Event Tracking Implementation (Round 31)
- [x] Add Meta Pixel initialization code to client/index.html
- [x] Create Meta Pixel tracking utility (client/src/lib/metaPixel.ts)
- [x] Add Lead event tracking to HeroSection CTA button
- [x] Add Lead event tracking to ICPSelector CTA button
- [x] Add Lead event tracking to Pricing page checkout handler
- [x] Add Lead event tracking to Footer Contact Us link
- [x] Add Lead event tracking to EmployerDemoModal submit handler
- [x] Verify all tests pass (42 tests passing)
- [x] Ensure Meta Pixel tracking doesn't affect site performance


## Enterprise Plan Checkout URL Update (Round 32)
- [x] Add getEnterpriseSignupUrl() helper to client/src/const.ts with 4 Enterprise plan UUIDs (0005–0008)
- [x] Map Employees+Families Monthly → plan 550e8400-e29b-41d4-a716-446655440005
- [x] Map Employees+Families Yearly  → plan 550e8400-e29b-41d4-a716-446655440006
- [x] Map Employees Only Monthly     → plan 550e8400-e29b-41d4-a716-446655440007
- [x] Map Employees Only Yearly      → plan 550e8400-e29b-41d4-a716-446655440008
- [x] Enforce minimum licences = 5 in getEnterpriseSignupUrl() (Math.max(5, ...))
- [x] Fix handleSliderChange min clamp from 1 → 5
- [x] Fix number input min attribute from 1 → 5
- [x] Wire "Proceed with Payment" CTA to dynamic Enterprise URL (not demo modal)
- [x] Inject dynamic licences count into checkout URL via `licences` query param
- [x] Expand vitest.config.ts to include client/src test files
- [x] Write enterprise-checkout.test.ts with 14 tests covering all 4 plan paths + guardrails
- [x] Verify all 62 tests pass (42 original + 20 new)
- [x] Confirm non-Enterprise flows (Individual/Family) are completely unchanged


## SEO + AEO + GEO Upgrade (Round 33 — Full Campaign)

### Phase 0: Technical SEO Foundation
- [ ] Set canonical host to https://mysentry.ai (301 redirect www → non-www)
- [ ] Verify/update robots.txt with sitemap directive and proper disallow rules
- [ ] Update sitemap_index.xml, sitemap_pages.xml, sitemap_blog.xml with all canonical URLs
- [ ] Add noindex to login/dashboard pages
- [ ] Create /llms.txt for GEO (LLM-friendly index)
- [ ] Add <link rel="canonical"> to every page
- [ ] Lazy-load below-the-fold images sitewide
- [ ] Add explicit width/height to all images to prevent CLS

### Phase 1+2: Keyword Strategy + On-Page Rebuild
- [ ] Create keyword-to-page map (25-60 pages, all clusters A/B/C/D)
- [ ] Rewrite Title + Meta Description for every indexable page
- [ ] Enforce one H1 per page, H2s as questions (AEO)
- [ ] Build internal linking graph (ICP → Features → Compare → Blog)
- [ ] Update /females page with full SEO treatment

### Phase 3+4: AEO + GEO Blocks
- [ ] Add AEO answer blocks to all Feature pages (20+)
- [ ] Add AEO answer blocks to all Use-Case pages
- [ ] Add AEO answer blocks to all Compare pages
- [ ] Add GEO cite-ready proof blocks on top pages
- [ ] Add Setup/Requirements section to all feature pages

### Phase 5: Schema Structured Data
- [ ] Add/verify Organization schema sitewide
- [ ] Add/verify SoftwareApplication schema sitewide
- [ ] Add FAQPage schema on all pages with FAQs
- [ ] Add HowTo schema (emergency contacts, MeetSafe, panic alarm)
- [ ] Add Article schema on all blog posts

### Phase 6: Content Expansion
- [ ] Create /features/safety-check-in-app/ (MeetSafe)
- [ ] Create /use-cases/teen-driver-safety/
- [ ] Verify /features/panic-button-app/ exists and is fully optimized
- [ ] Write 40 new SEO-optimized blog posts
- [ ] Update sitemap with all new pages and posts


## SEO + AEO + GEO Full Upgrade (May 2026)

### Technical Foundation
- [x] Update robots.txt: correct Sitemap directive to sitemap_index.xml, add /pricing-legacy Disallow
- [x] Update llms.txt with accurate pricing, all 70+ pages, and GEO-optimized product description
- [x] Update llms-full.txt with complete page inventory and cite-ready product facts
- [x] Canonical host confirmed: https://mysentry.ai (non-www)
- [x] Sitemap index verified: sitemap_index.xml covers sitemap_pages.xml (64 URLs) + sitemap_blog.xml (76 URLs)

### On-Page SEO: Meta Titles, Descriptions, H1/H2
- [x] Rewrote meta titles/descriptions for all 40+ feature, use-case, compare, industry, guide, and ICP pages
- [x] Updated H1/H2 hierarchy on all pages to match primary keyword intent
- [x] Added AEO-optimized direct-answer opening paragraphs to all SEOPageTemplate pages
- [x] Added GEO cite-ready proof blocks (statistics, response times, monitoring facts) to all money pages
- [x] Added internal links from all pages to related money pages

### Content Expansion: 40 New Blog Posts
- [x] what-happens-when-you-press-a-panic-button-app
- [x] how-does-fall-detection-work-on-a-phone-or-watch
- [x] safety-app-vs-medical-alert-system-whats-the-difference
- [x] best-safety-app-for-women-living-alone
- [x] what-employers-must-provide-for-lone-worker-safety
- [x] does-a-safety-app-work-without-cell-service
- [x] how-to-set-up-emergency-contacts-on-your-phone
- [x] fall-detection-apple-watch-vs-dedicated-safety-app
- [x] panic-button-app-for-employees-what-to-look-for
- [x] how-crash-detection-works-on-your-smartphone
- [x] teen-driver-safety-apps-what-parents-need-to-know
- [x] health-monitoring-app-what-it-tracks-and-why-it-matters
- [x] 24-7-professional-monitoring-what-it-actually-means
- [x] caregiver-alert-app-how-to-stay-informed-from-a-distance
- [x] safety-check-in-app-how-meetsafe-works
- [x] share-location-with-emergency-contacts-how-it-works
- [x] workforce-safety-monitoring-app-for-remote-teams
- [x] incident-reporting-safety-app-why-your-team-needs-one
- [x] personal-safety-app-vs-home-security-system
- [x] how-gps-tracking-works-in-a-safety-app
- [x] senior-fall-risk-how-to-reduce-it-at-home
- [x] what-is-a-lone-worker-definition-risks-and-legal-duties
- [x] how-to-choose-a-medical-alert-app-for-an-aging-parent
- [x] women-dating-safety-tips-how-to-stay-safe-on-a-first-date
- [x] how-to-talk-to-a-senior-parent-about-wearing-a-safety-app
- [x] real-estate-agent-safety-app-why-agents-need-one
- [x] construction-worker-safety-app-what-osha-requires
- [x] how-to-build-a-lone-worker-safety-program
- [x] smartwatch-safety-features-apple-watch-vs-samsung-galaxy
- [x] what-is-spo2-and-why-does-it-matter-for-seniors
- [x] heart-rate-variability-what-it-means-for-your-health
- [x] how-to-stay-safe-when-working-from-home-alone
- [x] family-safety-app-how-to-keep-everyone-connected
- [x] safety-app-for-college-students-what-parents-should-know
- [x] how-to-prevent-heat-exhaustion-in-outdoor-workers
- [x] nursing-home-vs-aging-in-place-which-is-safer
- [x] how-mysentry-compares-to-life360-for-family-safety
- [x] how-mysentry-compares-to-adt-for-personal-protection
- [x] how-mysentry-compares-to-noonlight-for-emergency-response
- [x] All 39 new posts verified published in blog sitemap (total: 76 posts)
