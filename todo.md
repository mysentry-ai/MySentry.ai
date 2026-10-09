# MySentry Website TODO

## Public Blog Availability Repair (October 2026)
- [x] Create one public-blog lifecycle authority for database-published records, static public fallbacks, editorial holds, reviewed redirects, and retired content.
- [x] Route public blog detail, listing, category, related-content, initial metadata, and sitemap behavior through the shared resolver.
- [x] Replace the Footer's raw blog links with catalog-owned guides and repair canonical internal links in static fallback articles.
- [x] Add an internal server-side managed public-blog read fallback for the separate runtime when its local database is unavailable, including one transient-failure retry.
- [x] Verify all 16 reported URLs without a local database: HTTP 200, canonical, index/follow, Article schema, initial article content, public API content, and one sitemap entry each.
- [ ] Deploy the validated GitHub commit to the custom-domain runtime, then repeat the 16-URL public-domain check.

## SMS Database and Admin Repair (September 2026)
- [x] Confirm that the managed MySentry application database and `contact_submissions` table are available through the application runtime.
- [x] Add an authenticated Website Submissions section to the existing admin panel for contact and SMS communication preference records.
- [x] Preserve the actual SMS and Privacy Policy selection state, including unselected SMS consent.
- [x] Verify authorization, TypeScript, the full test suite, production build, admin rendering, and no Docker or environment-file changes.
- [ ] Configure the separate AWS production runtime with a working `DATABASE_URL`, then deploy and perform the approved persistence verification. Blocked because the previously supplied AWS SSH password was rejected.

## SMS Communication Consent Refinement (September 2026)
- [x] Make the Privacy Policy acknowledgment optional on the SMS communication page and its Privacy Policy embed.
- [x] Keep explicit SMS consent and form submission required before an SMS-consent record can be created.
- [x] Record whether the optional Privacy Policy acknowledgment was selected without representing an unselected acknowledgment as confirmation.
- [x] Verify desktop and mobile presentation, TypeScript, the full test suite, production build, and the local editorial pattern scan.
- [x] Make the SMS consent checkbox optional and treat the form as an explicit communication-preference record.
- [x] Record unselected SMS consent as `not selected` and confirm that MySentry will not use SMS for that request.

## Feature Page Visual Refresh (September 2026)
- [x] Remove the empty generic `Feature` hero label from detailed feature pages and reserve responsive clearance below the fixed navigation.
- [x] Add a relevant, high-resolution app screen or editorial visual to every currently detailed, active feature route.
- [x] Replace the legacy How It Works hero montage and outdated lower-page mockups with supplied current MySentry Panic, Fall Detection, Family Connectivity, Vitals, Live Video, MeetSafe, and app-home screens.
- [x] Verify desktop and mobile visibility, high-contrast copy, responsive header clearance, image delivery, TypeScript, full regression tests, production build, and public-content punctuation policy.

## SEO, AEO, and GEO Master Prompt Implementation (August 2026)
- [x] Extract and classify every requirement in MySentry_Manus_1.6_Max_Website_SEO_AEO_GEO_Master_Prompt.docx
- [x] Audit every registered public route against the document's content, SEO, AEO, GEO, accessibility, conversion, and internal-linking requirements
- [x] Create a page-by-page implementation matrix with required copy, metadata, schema, FAQ, CTA, and structural changes
- [x] Receive explicit Gate A approval for the proposed audit, URL map, overlap analysis, and technical direction
- [x] Reconcile feature status, device compatibility, monitoring, pricing, trial, and integration claims against approved evidence
- [x] Classify testimonials, ratings, user counts, case-study metrics, medical language, and competitor claims by evidence status
- [x] Draft approved, qualified, held, and removal wording for every high-risk claim group
- [x] Create the staging-only Gate C implementation scope and acceptance tests for owner approval
- [x] Receive explicit owner pre-approval for all remaining gates, verified implementation, and final GitHub push
- [x] Implement meaningful route-specific initial HTML, metadata parity, schema foundations, and true 404 handling
- [x] Verify initial and hydrated title, description, canonical, robots, and base schema parity across representative routes
- [x] Apply conservative claim governance across all public source pages and database-backed blog content
- [x] Replace low-contrast light-green text, borders, labels, links, badges, navigation states, Login buttons, and selection controls with accessible dark-green or logo-blue treatments across desktop and mobile
- [x] Verify contrast ratios and visual consistency on representative light-green, white, image, and gradient backgrounds
- [x] Apply approved URL merges, redirects, sitemap rules, navigation changes, and internal-link updates
- [x] Run full-site raw HTML, rendered parity, claim, punctuation, image, accessibility, link, route, schema, and responsive validation
- [x] Push the complete verified implementation to zigroninc/MySentry.ai main
- [x] Implement shared SEO, structured-data, navigation, accessibility, and reusable content improvements
- [x] Refine the homepage and primary conversion pages according to the approved master prompt
- [x] Refine product, feature, comparison, pricing, and integration pages according to the approved master prompt
- [x] Refine audience, worker, employer, senior, family, and personal-safety pages according to the approved master prompt
- [x] Refine company, support, resources, blog, and all remaining indexed pages according to the approved master prompt
- [x] Add or update targeted Vitest coverage for route metadata, structured data, and shared SEO behavior
- [x] Validate TypeScript, production build, tests, links, metadata, structured data, sitemap, robots directives, and prohibited copy patterns
- [x] Visually verify representative desktop and mobile routes and correct regressions
- [x] Save the final checkpoint after explicit owner pre-approval for the GitHub push

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
- Deferred historical request: Contact page backend submission flow was outside the approved master-prompt scope; current contact behavior was preserved.
- Superseded historical request: Trial signup routing was replaced by plan-review and eligibility language pending verified commercial terms.
- Deferred historical request: A submissions administration dashboard was outside the approved master-prompt scope; current admin behavior was preserved.
- Deferred historical request: Email notifications were outside the approved master-prompt scope; existing owner-notification behavior was preserved.
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
- [x] Create Google Search Console readiness checklist
- [x] Optimize images (all public image elements have alt text, intrinsic dimensions, and an explicit eager or lazy loading policy)

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
- [x] Create external backlink plan deliverable
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
- [x] P0.5 Core Web Vitals - optimized local media and verified public image dimensions and loading policies

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
- [x] P2.1c: Update existing /compare/life360-vs-mysentry (superseded by the approved noindex evidence-review treatment until competitor claims are source-verified)
- [x] P2.1d: Update existing /compare/noonlight-vs-mysentry (superseded by the approved noindex evidence-review treatment until competitor claims are source-verified)
- [x] P2.1e: Update existing /compare/fallcall-vs-mysentry (superseded by the approved noindex evidence-review treatment until competitor claims are source-verified)
- [x] P2.1f: Update existing /compare/google-personal-safety-vs-mysentry (superseded by the approved noindex evidence-review treatment until competitor claims are source-verified)
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
- [x] P2.6: Enhance ROI calculator on Employers page with "Email ROI report" lead capture (closed as an unapproved historical enhancement outside the master-prompt scope)

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
- [x] P2.13: Add Solutions and Integrations to main menu navigation (superseded by the approved canonical navigation and direct Ring integration entry)
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
- [x] Add Meta Pixel initialization code to client/index.html (completed Round 31)
- [x] Create Meta Pixel tracking utility function for Lead events (completed Round 31)
- [x] Add Lead event tracking to all signup/CTA buttons (completed Round 31)
- [x] Add Lead event tracking to all contact/demo buttons (completed Round 31)
- [x] Verify PageView tracking works on all pages (completed Round 31)
- [x] Test Lead events fire without affecting site performance (completed Round 31)
- [x] Verify Meta Pixel events in Facebook Events Manager (completed Round 31)


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
- [x] Set canonical host to https://mysentry.ai (301 redirect www → non-www) (completed May 2026)
- [x] Verify/update robots.txt with sitemap directive and proper disallow rules (completed May 2026)
- [x] Update sitemap_index.xml, sitemap_pages.xml, sitemap_blog.xml with all canonical URLs (completed May 2026)
- [x] Add noindex to login/dashboard pages (completed May 2026)
- [x] Create /llms.txt for GEO (LLM-friendly index) (completed May 2026)
- [x] Add <link rel="canonical"> to every page (completed May 2026)
- [x] Lazy-load below-the-fold images sitewide (completed May 2026)
- [x] Add explicit width/height to all images to prevent CLS (completed Jun 2026)

### Phase 1+2: Keyword Strategy + On-Page Rebuild
- [x] Create keyword-to-page map (25-60 pages, all clusters A/B/C/D) (completed May 2026)
- [x] Rewrite Title + Meta Description for every indexable page (completed May 2026)
- [x] Enforce one H1 per page, H2s as questions (AEO) (completed May 2026)
- [x] Build internal linking graph (ICP → Features → Compare → Blog) (completed May 2026)
- [x] Update /females page with full SEO treatment (completed May 2026)

### Phase 3+4: AEO + GEO Blocks
- [x] Add AEO answer blocks to all Feature pages (20+) (completed May 2026)
- [x] Add AEO answer blocks to all Use-Case pages (completed May 2026)
- [x] Add AEO answer blocks to all Compare pages (completed May 2026)
- [x] Add GEO cite-ready proof blocks on top pages (completed May 2026)
- [x] Add Setup/Requirements section to all feature pages (completed May 2026)

### Phase 5: Schema Structured Data
- [x] Add/verify Organization schema sitewide (completed May 2026)
- [x] Add/verify SoftwareApplication schema sitewide (completed May 2026)
- [x] Add FAQPage schema on all pages with FAQs (completed May 2026)
- [x] Add HowTo schema (emergency contacts, MeetSafe, panic alarm) (completed May 2026)
- [x] Add Article schema on all blog posts (completed May 2026)

### Phase 6: Content Expansion
- [x] Create /features/safety-check-in-app/ (MeetSafe) (completed May 2026)
- [x] Create /use-cases/teen-driver-safety/ (completed May 2026)
- [x] Verify /features/panic-button-app/ exists and is fully optimized (completed May 2026)
- [x] Write 40 new SEO-optimized blog posts (completed May 2026)
- [x] Update sitemap with all new pages and posts (completed May 2026)


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

## Nurse ICP Vertical Expansion

- [x] Create /nurses primary landing page (completed May 2026)
- [x] Create /nurses/travel-nurses subpage (completed May 2026)
- [x] Create /nurses/home-health subpage (completed May 2026)
- [x] Create /nurses/er-trauma subpage (completed May 2026)
- [x] Create /nurses/night-shift subpage (completed May 2026)
- [x] Add "Nurses" to top nav (completed May 2026)
- [x] Add nurses to WhoWeProtect section on homepage (completed May 2026)
- [x] Add nurse pages to sitemap (completed May 2026)
- [x] Update llms.txt with nurse pages (completed May 2026)
- [x] Add internal links from /families, /seniors, /employers to /nurses (completed May 2026)
- [x] Publish 12 nurse blog posts with hero images (completed May 2026)
- [x] Add nurse blog category/tag (completed May 2026)
- [x] Add FAQPage schema to all nurse pages (completed May 2026)

## Wi-Fi Fix + Mega-Menu Redesign
- [x] Fix all incorrect Wi-Fi references across all pages (completed May 2026)
- [x] Redesign navbar with mega-menu: grouped 2-column dropdowns with icons and descriptions for Features, Who We Protect, Solutions, Compare, and Learn (completed May 2026)

## Nurse ICP Vertical + Wi-Fi Fix + Mega-Menu (May 2026)
- [x] Build /nurses primary ICP landing page with hero image, AEO blocks, FAQs, schema
- [x] Build /nurses/travel-nurses subpage
- [x] Build /nurses/home-health subpage
- [x] Build /nurses/er-trauma subpage
- [x] Build /nurses/night-shift subpage
- [x] Generate and attach photorealistic hero images to all 5 nurse landing pages
- [x] Add Nurses to navbar navigation
- [x] Add all 5 nurse pages to sitemap
- [x] Write and publish 12 nurse-focused blog posts with hero images
- [x] Fix all incorrect Wi-Fi references sitewide (54 replacements across 41 files)
- [x] Redesign navbar with mega-menu (grouped 2-column dropdowns with icons and descriptions)
- [x] Redistribute all 88 blog post dates from Jan 2, 2026 with natural intervals
- [x] Attach hero images to all 12 nurse blog posts

## Production Deployment Fix
- [x] Diagnosed blank page issue: Manus platform CDN intercepts /assets/* path before reaching Express server
- [x] Changed Vite build.assetsDir from 'assets' to '_app' so built JS/CSS are served at /_app/* which reaches Express
- [x] Updated serveStatic() in vite.ts to serve /_app/ with immutable cache headers
- [x] Verified production build outputs to dist/public/_app/ with correct HTML references
- [x] Confirmed all 62 tests pass
- [x] Verified local production server serves /_app/* assets with correct MIME types

## URL Redirects
- [x] Add 301 redirect from /blog/protecting-teen-drivers to /blogs

## URL Updates (Login & Plan Signup)
- [x] Update login URL to https://dashboard.mysentry.ai/website-auth?redirect_url=login (Navbar + 5 Nurses pages)
- [x] Update Personal plan signup base URL to https://dashboard.mysentry.ai/website-auth/create-account (getSignupUrl in const.ts)
- [x] Update Family plan signup base URL to https://dashboard.mysentry.ai/website-auth/create-account (getSignupUrl in const.ts)
- [x] Update Enterprise plan signup base URL to https://dashboard.mysentry.ai/website-auth/create-account (getEnterpriseSignupUrl in const.ts)
- [x] Update enterprise-checkout.test.ts BASE constant to match new URL
- [x] All 62 tests pass

## Enterprise Pricing URL Updates
- [x] Change Enterprise base URL from /website-auth/create-account to /create-saas-account
- [x] Change minimum licences from 5 to 2 in getEnterpriseSignupUrl()
- [x] Change initial licenses state from 5 to 2 in Pricing.tsx slider
- [x] Change slider and input min attribute from 5 to 2 in Pricing.tsx
- [x] Update enterprise-checkout.test.ts: new BASE URL, min=2 guardrail tests, 4 exact URL tests
- [x] All 65 tests pass (3 new exact URL tests added)

## Knowledgebase-Driven Content Refinement (Jun 2026)
- [x] Save screenshot inventory and knowledgebase notes to reference file
- [x] Refine homepage hero, monitoring story, and onboarding CTA to improve conversion
- [x] Update features page to use real app screenshots (app-home.png, iphone-168.png, iphone-175.png, frame-1.png, frame-8.png, watch-home.png, watch-vitals.png, watch-panic.png)
- [x] Add/refine user onboarding section explaining setup steps (download, create account, add contacts, start monitoring)
- [x] Strengthen core monitoring narrative across homepage and features page
- [x] Add chatbot CTA prompts in strategic locations to encourage questions
- [x] Review and update pricing/plan descriptions to match knowledgebase features
- [x] Verify all feature descriptions match the actual app capabilities from screenshots

## Smart Connectivity Rename + Content Rules (Jun 2026)
- [x] Rename "Smart Connectivity" to "Family Connectivity" in every file across the codebase
- [x] Apply StoryBrand zero-cognitive-load copy to all new and updated sections
- [x] Ensure no em-dashes and no AI writing patterns in any content
- [x] Wire SafetyAdvisorWidget into App.tsx so it appears on all public pages
- [x] Add SafetyAdvisorWidget to Layout.tsx (exclude admin pages)

## AEO / SEO / GEO Improvement Plan (Jun 21 2026 Analysis)

### Modify Existing Pages
- [x] Homepage: rewrite H1 to single promise, add pricing line near CTA, per-audience CTA adaptation
- [x] /features/fall-detection-app: expand with fall detection device/watch/seniors/elderly/iPhone sections, Quick Answer, FAQ schema, comparison table, internal links
- [x] /features/panic-button-app: add women's safety, iPhone, Android language; add comparison table; deepen FAQs
- [x] /compare/life360-vs-mysentry: deepen comparison table, add crash detection angle, add alternatives framing, FAQ schema
- [x] /compare/sosecure-adt-vs-mysentry: add AEO framing, deepen table, add alternatives language, FAQ schema

### Build New Pages (Priority Order)
- [x] /personal-safety-app: flagship landing page (2,400/mo), Quick Answer, FAQ schema, comparison table vs location apps/senior alerts/wearables
- [x] /compare/oura-ring-vs-mysentry: 6,600/mo KD 6, honest feature table, Quick Answer, FAQ schema, no-subscription angle
- [x] /compare/whoop-vs-mysentry: 2,400/mo KD 0, honest feature table, Quick Answer, FAQ schema, no-subscription angle
- [x] /health-monitoring: pillar landing page, real-time heart rate/HRV/SpO2/health alerts, Quick Answer, FAQ schema
- [x] /features/health-monitoring: expand existing page with deep-dive, device compatibility, HRV/SpO2 details, FAQ schema
- [x] /medical-alert-system-for-seniors: 14,800/mo senior cluster, comparison table vs Life Alert/Medical Guardian/Lively, Quick Answer, FAQ schema
- [x] /who-we-protect/seniors: audience landing page with pain points, relevant features, CTA
- [x] /who-we-protect/women: audience landing page targeting safety app for women (260/mo KD 0)
- [x] /who-we-protect/employers: audience landing page targeting lone worker safety (140/mo KD 0)
- [x] /who-we-protect/drivers: audience landing page targeting crash detection (40/mo KD 0)
- [x] /compare/medical-guardian-vs-mysentry: AEO comparison page
- [x] /compare/lively-vs-mysentry: AEO comparison page
- [x] /compare/apple-watch-fall-detection-vs-mysentry: AEO comparison page (5,400/mo KD 9)

### AEO Blog Posts
- [x] /blog/best-personal-safety-apps: roundup/listicle (NCOA/SafeWise structure), comparison table, MySentry as all-in-one pick
- [x] /blog/best-medical-alert-systems: roundup/listicle, comparison table, MySentry as modern pick
- [x] /blog/best-oura-and-whoop-alternatives: roundup article, comparison table, MySentry as health + safety pick

### Sitemap & Routing
- [x] Register all new routes in App.tsx
- [x] Add all new pages to sitemaps.ts STATIC_PAGES array
- [x] Add internal links from related pages to new pages
- [x] Update CompareHub and FeaturesHub to include new pages

## Navbar Restructure + New Audience Pages (Jun 21 2026)
- [x] Remove Nurses from Individuals & Families column in Navbar
- [x] Add Students entry to Individuals & Families column in Navbar
- [x] Add Children & Teens entry to Individuals & Families column in Navbar
- [x] Rename Solutions label to Industries in Navbar
- [x] Create /who-we-protect/students page
- [x] Create /who-we-protect/children-and-teens page
- [x] Register new routes in App.tsx
- [x] Add new pages to sitemaps.ts
- [x] Add new pages to llms.txt

## Tagline and Positioning Fix (Jun 22, 2026)
- [x] Add "Live Safe. Stay Healthy." tagline visually in the homepage hero below the H1
- [x] Add tagline to Footer brand column below the logo
- [x] Update homepage hero H1 to lead with Personal Safety AND Health Monitoring
- [x] Update ICPSelector descriptions to include health monitoring angle
- [x] Update Footer brand description to full positioning phrase
- [x] Sitewide: replace bare "personal safety" with "personal safety and health monitoring" in key copy
- [x] Update SEO default meta description to include full positioning
- [x] Update AppDashboardShowcase heading to include health monitoring
- [x] Update WhatWeProvide section heading to include health monitoring

## Hero Typography and Tagline Improvements (Jun 22, 2026)
- [x] Add tagline "Live Safe. Stay Healthy." under the logo in the Navbar
- [x] Restructure homepage hero: StoryBrand-aligned H1 with zero cognitive load
- [x] Add h1Sub prop to SEOPageTemplate for subtitle on new line with smaller font
- [x] Update all 11 compare pages to use h1Sub for the subtitle part
- [x] Update all SEO feature/use-case/who-we-protect pages to use h1Sub where applicable

## Duplicate Widget and Hero Section Overhaul (Jun 23, 2026)
- [x] Remove/hide the duplicate Manus platform green-leaf widget circle overlapping the chat button
- [x] Refine Features hub and all individual feature page hero sections with StoryBrand zero-cognitive-load copy
- [x] Refine all Who We Protect page hero sections with StoryBrand zero-cognitive-load copy
- [x] Refine all Industries page hero sections with StoryBrand zero-cognitive-load copy
- [x] Refine all Compare page hero sections with StoryBrand zero-cognitive-load copy

## Hero CTA Visibility Fix (Jun 23, 2026)
- [x] SEOPageTemplate: strip hero to H1 + subtitle + CTAs only, move problem/empathy/steps below fold
- [x] Homepage: ensure H1 + ICP selector + CTA visible on laptop without scrolling
- [x] All hub pages (CompareHub, IndustriesHub, UseCasesHub): strip hero to title + subtitle + CTA
- [x] Pricing page: strip hero to title + subtitle + toggle only
- [x] Custom pages (Students, ChildrenAndTeens, SeniorsAgingInPlace): strip hero to title + subtitle + CTAs
- [x] FieldServicesCaseStudy: strip hero to title + subtitle only

## Who We Protect Hero Section Updates (Jun 23, 2026)
- [x] HeroSection component: use imageSrc prop for background (was hardcoded to hero-desktop.webp)
- [x] HeroSection component: add optional subtitle prop rendered below title
- [x] Females.tsx: add subtitle to HeroSection ("Panic alarm, live monitoring, and real-time location sharing...")
- [x] Families.tsx: add subtitle to HeroSection ("Real-time location, fall detection, and instant alerts...")
- [x] Seniors.tsx: add subtitle to HeroSection ("Fall detection, health monitoring, and 24/7 emergency response...")
- [x] Employers.tsx: add subtitle to HeroSection ("Real-time monitoring and instant emergency response...")
- [x] Verify all four pages render correctly with contextual background images and subtitles

## Em Dash Removal (Jun 23, 2026)
- [x] Remove all em dashes (—) from user-facing content across the entire website

## Who We Protect Subpages Full Update (Jun 23, 2026)
- [x] Students.tsx: Add heroDescription (1-2 line summary below subtitle), add hero image
- [x] ChildrenAndTeens.tsx: Add heroDescription (1-2 line summary below subtitle), add hero image
- [x] Drivers.tsx: Add hero image
- [x] Women.tsx: Add hero image
- [x] Seniors.tsx (who-we-protect): Add hero image
- [x] Employers.tsx (who-we-protect): Add hero image
- [x] Review all pages for content sense and consistency
- [x] Add heroImage + h1Sub + heroDescription to all use-cases pages (LoneWorker, HomeHealthcare, FamilySafety, MedicalAlert, SafetyForWomen, TeenDriver)
- [x] Add heroImage to all industries pages (Construction, Education, HomeHealthcare, Hospitality, RealEstate, Retail, SecurityGuarding)
- [x] Fix Team.tsx TypeScript error (sub prop not in type definition)

## Nurses Pages - Add Subtitle/Explanation (Jun 23, 2026)
- [x] /nurses: Add subtitle to HeroSection explaining what the page offers
- [x] /nurses/travel-nurses: Add subtitle to HeroSection explaining what the page offers
- [x] /nurses/home-health: Check and add subtitle if missing
- [x] /nurses/er-trauma: Check and add subtitle if missing
- [x] /nurses/night-shift: Check and add subtitle if missing

## Oura Ring Integration Page Fix (Jul 8, 2026)
- [x] Change Oura Ring page to "Coming Soon" - not yet integrated
- [x] Fix broken hero image on /integrations/oura-ring

## Full KB Sync Audit - Jul 8, 2026

### Critical Inaccuracies to Fix
- [x] Apple Watch: Removed unverified exact-series claims and require compatibility verification during setup
- [x] Samsung Watch: Removed unverified exact-series claims and require compatibility verification during setup
- [x] Pricing: Removed unsupported $9.99/month references from public source and metadata
- [x] Pricing: Removed Mental Health Coach and StressGuru references not supported by the knowledgebase
- [x] Fall Detection: Removed unverified response-time promises and qualified delivery by device, permissions, configuration, and connectivity
- [x] Fall Detection: Clarified supported-device and wearable eligibility without claiming phone-only detection
- [x] Crash Detection: Clarified eligible-device sensor requirements without guaranteeing detection
- [x] Panic Alarm: Omitted unverified iPhone trigger roadmap claims and retained only evidence-safe current behavior
- [x] Panic Alarm: Omitted unverified Android assistant claims and retained only evidence-safe current behavior
- [x] Live video: Added foreground, permission, device, connectivity, and plan limitations where the workflow is described

### Feature Pages to Update with Accurate KB Content
- [x] /features/panic-button-app - Rebuilt with evidence-safe current trigger behavior, requirements, and limitations; unsupported roadmap details held
- [x] /features/fall-detection-app - Rebuilt with wearable eligibility, device conditions, platform-neutral limitations, and no response-time promise
- [x] /features/health-monitoring - Rebuilt as non-medical wellness context with supported-device and baseline qualification
- [x] /features/meet-safe-check-ins - Consolidated into the canonical Safety Check page; unverified calendar and AI-avatar claims held
- [x] /features/crash-detection - Rebuilt with eligible-device sensor and detection limitations
- [x] /features/emergency-contacts - Rebuilt with permission-based contact roles and no unsupported Loud Check-In claim
- [x] /features/safety-check-in-app - Rebuilt with current Safety Check workflow, escalation limits, and connectivity requirements

### Integration Pages to Fix
- [x] /integrations/apple-watch - Removed unverified exact-model and metric assumptions; added compatibility verification and evidence-safe wellness framing
- [x] /integrations/samsung-galaxy-watch - Removed unverified exact-model and metric assumptions; added compatibility verification and evidence-safe wellness framing

### Compare Pages to Fix
- [x] All compare pages: Removed unsupported pricing and competitor assertions and moved detail pages to noindex evidence review
- [x] /compare/apple-watch-fall-detection - Removed unverified exact-series and competitor assertions and moved the page to noindex evidence review

### New Pages to Create
- [x] /features/secure-route - Added a transparent noindex held-feature status page pending product verification
- Superseded historical request: Automated Call remains held and was not promoted as a live feature without verified evidence.
- [x] /features/family-connectivity - Rebuilt as permission-based, privacy-aware family connectivity content
- [x] /integrations/ring - Reconciled the canonical Ring integration with current eligibility, consent, and offer-verification language

### Pricing Page Updates
- [x] Remove StressGuru and Mental Health Coach from features list
- Superseded historical request: Exact trial duration, billing, and logout promises were replaced with plan-review language until commercial terms are verified.
- Superseded historical request: Exact Family seat allocation was removed from public pricing until plan ownership and seat terms are verified.

## MySentry x Ring Integration (Jul 14, 2026)
- [x] Add Ring announcement pill banner to homepage hero section (superseded by the later reviewed Ring banner treatment)
- [x] Add Ring announcement section to homepage with a two-column workflow layout
- [x] Create the complete Ring landing experience and consolidate `/ring` to `/integrations/ring`
- [x] Section 1: Hero, CTA, trust context, and product visual
- [x] Section 2: Evidence-safe reasons to add MySentry to a Ring setup
- [x] Section 3: Qualified alert and monitoring workflow
- [x] Section 4: Connected home and personal-safety context
- [x] Section 5: Offer eligibility and pricing review
- [x] Section 6: Permission-based family safety context
- [x] Section 7: Real-life household use cases
- [x] Section 8: Final CTA block
- [x] Section 9: FAQ accordion
- [x] Register Ring routing and canonical consolidation in App.tsx and the server redirect map
- [x] Mobile-responsive design with reviewed mobile CTA behavior
- [x] Route-specific SEO metadata for the canonical Ring page

## MySentry x Ring Integration Pages (Jul 29, 2026)
- [x] Add Ring announcement pill banner to homepage hero section
- [x] Create RingAnnouncementSection component (homepage, after TrustBanner)
- [x] Create /ring dedicated landing page (9 sections: Hero, Why Add MySentry, How It Works, More Than a Camera Alert, Pricing, Family Safety, Use Cases, Final CTA, FAQ)
- [x] Register /ring route in App.tsx
- [x] Add SEO component with title/description/canonical to /ring page
- [x] Fix CTA section background to use brand-compliant dark green (not black)
- [x] TypeScript check passed (exit 0)

## Ring Navbar Item (Jul 29, 2026)
- [x] Add "RING" as standalone top-level nav item linking to /ring

## Ring Homepage Redesign (Jul 30, 2026)
- [x] Create RingTopBanner component with a full-width homepage treatment
- [x] Rewrite RingAnnouncementSection with reviewed copy, two-column layout, and animated workflow
- [x] Create RingReminderBanner component with current offer-verification language
- [x] Wire all three Ring components into Home.tsx at the approved positions
- [x] Remove the superseded pill banner from HeroSection children in Home.tsx
- [x] QA Round 1: Copy and messaging verified through claim-policy audits
- [x] QA Round 2: UX and conversion verified through the 6,570-link rendered crawl
- [x] QA Round 3: Design and responsiveness verified across 120 desktop and mobile routes

## Ring Homepage Redesign (Session 2)
- [x] Create RingTopBanner.tsx - animated scrolling marquee, full-width below navbar, $4.99/month offer
- [x] Rewrite RingAnnouncementSection.tsx - two-column layout, approved copy, animated step infographic
- [x] Create RingReminderBanner.tsx - later-in-page reminder with price comparison card ($15 vs $4.99)
- [x] Wire all three Ring components into Home.tsx at correct positions
- [x] Remove old Ring pill banner from HeroSection children in Home.tsx
- [x] Confirmed zero TypeScript errors
- [x] Confirmed zero em dashes in all Ring components and Home.tsx

## Ring Appstore Co-Marketing Homepage Redesign (Session 3)
- [x] Read and extract approved copy from MySentry x Ring co-marketing Word document
- [x] Upload all four visual assets to S3 (main app mockup, emotional background, storytelling visual, trust badge)
- [x] Create RingHeroBottomBanner.tsx - premium offer banner at bottom of hero section ($4.99/month, soft styling, no marquee)
- [x] Redesign RingAnnouncementSection.tsx - two-column layout with approved copy, layered visuals, floating cards showing 5-step panic response journey
- [x] Redesign RingReminderBanner.tsx - later-in-page reminder with Group1000007976.png and refined price comparison card
- [x] Update Navbar.tsx - remove NEW icon from Ring nav item, change label to "Ring Appstore"
- [x] Wire all components into Home.tsx in correct order
- [x] QA Round 1: Content Accuracy - no forbidden phrases, correct pricing ($4.99, $15, Save 67%)
- [x] QA Round 2: Layout Accuracy - components in correct order, visual assets properly integrated
- [x] QA Round 3: Design Quality - TypeScript 0 errors, no em-dashes, no placeholder text, animations and premium styling present
- [x] Save checkpoint version 6572fbcf

## GitHub Website Image Archive (August 2026)
- [x] Inventory, archive, validate, and push every image currently referenced by the live website to GitHub with a tracked manifest

## Blog Page Visibility Fix (August 2026)
- [x] Diagnose and restore blog posts on the /blogs page, verify rendering, and synchronize the correction to GitHub

## SSR_TITLE Rendering Bug Fix (August 2026)
- [x] Diagnose root cause of visible SSR_TITLE on the website
- [x] Fix the SSR_TITLE rendering without breaking SEO metadata
- [x] Verify fix across all major pages
- [x] Confirm SEO metadata (title, meta description, OG tags) remains intact

## Oura Ring Coming Soon Page Redesign (September 2026)
- [x] Audit the current Oura route, metadata, local assets, noindex treatment, and related wearable pages
- [x] Remove the accidental tracked `client/src/src` duplicate tree that conflicts with the real application source and blocks TypeScript compilation
- [x] Define an honest customer story that clearly states Oura Ring integration is not currently available
- [x] Build a polished hero with a visible Coming Soon status, aspirational value proposition, and current-feature CTA
- [x] Add story-driven problem, future-value, expected workflow, privacy, compatibility, and availability sections without promising unverified capabilities
- [x] Add visible FAQs and eligible structured data that clearly distinguish current MySentry features from possible future Oura support
- [x] Preserve noindex status until the integration, supported models, permissions, regional availability, and launch terms are verified
- [x] Add or update targeted tests for Oura status language, metadata, indexability, links, local images, and prohibited claims
- [x] Verify the complete Oura page on desktop and mobile, save a checkpoint, and push the approved update to GitHub

## Nurse Specialty and Senior Buyer Journey Rebuild (September 2026)
- [x] Audit the nurse hub and the four existing specialty routes for content depth, search intent, metadata, links, images, contrast, and conversion gaps
- [x] Research current safety challenges and buyer considerations for home health, travel, ER and trauma, and night-shift nurses using authoritative sources
- [x] Rebuild `/nurses/home-health` as a complete conversion page for nurses working alone in patient homes and community settings
- [x] Rebuild `/nurses/travel-nurses` as a complete conversion page for temporary assignments, unfamiliar locations, housing, parking, and commutes
- [x] Rebuild `/nurses/er-trauma` as a complete conversion page for high-pressure clinical settings, workplace violence planning, and employer coordination
- [x] Rebuild `/nurses/night-shift` as a complete conversion page for after-hours parking, corridors, commutes, fatigue-aware planning, and check-ins
- [x] Link every nurse-hub specialty card to its canonical page and fix all pale-green card text to use accessible dark-green or logo-blue treatments
- [x] Audit the canonical senior routes to prevent duplicate search intent and establish one clear hierarchy for older adults, adult children, caregivers, and family-plan buyers
- [x] Research older-adult safety, aging-in-place, caregiver burden, family decision-making, privacy, and product-selection concerns using authoritative sources
- [x] Strengthen the senior hub for the protected older adult and the adult daughter or family caregiver who often evaluates and buys the service
- [x] Strengthen the canonical senior conversion page with individual and family-plan pathways, objections, setup, privacy, limitations, FAQs, and clear calls to action
- [x] Add targeted tests for nurse and senior metadata, page structure, links, contrast, images, claims, and responsive behavior
- [x] Verify all affected nurse, senior, Oura, and pricing paths on desktop and mobile, save a checkpoint, and push the complete update to GitHub

## Approved Tagline Consistency and Mobile Visibility Fix (September 2026)
- [x] Audit all public source, metadata, manifest, title, alt-text, and navigation occurrences of `Your Vital Companion`
- [x] Replace remaining customer-facing `Your Vital Companion` branding with `Live Safe. Stay Healthy.` without altering unrelated product copy
- [x] Ensure the approved tagline is visible with accessible contrast in desktop and mobile navigation and other branded mobile surfaces
- [x] Add or update targeted tests that prevent the retired tagline from returning and enforce the approved tagline in shared branding
- [x] Validate TypeScript, tests, production build, raw metadata, desktop rendering, mobile rendering, and horizontal overflow on affected routes
- [x] Save a verified checkpoint and synchronize the completed tagline fix to `zigroninc/MySentry.ai` main

## Traffic Analytics and Organic Growth Release (September 2026)
- [x] Establish a documented MySentry traffic and conversion baseline using available website analytics, public traffic estimates, and current measurement limitations
- [x] Benchmark a confirmed set of relevant personal-safety, family-safety, medical-alert, wearable, and workforce-safety competitors across traffic, channels, engagement, and geography
- [x] Audit the current sitemap and public content inventory against high-opportunity audience, problem, feature, comparison, and decision-stage search clusters
- [x] Build a prioritized keyword-to-page and intent-to-conversion map tied to the 2 million monthly impression and 100,000 monthly download targets without guaranteeing results
- [x] Improve existing pages and create the highest-priority missing pages supported by traffic, search-intent, product-evidence, and claim-safety findings
- [x] Strengthen internal linking, navigation, metadata, schema, sitemaps, and AI discovery for every new or materially improved page
- [x] Add targeted automated tests for new routes, metadata, schema, links, local images, claim safety, contrast, mobile behavior, and prohibited punctuation
- [x] Validate the complete release in production mode across raw HTML, hydrated metadata, desktop, mobile, links, images, accessibility, overflow, robots, and sitemap governance
- [x] Deliver a visual analytics and growth report with baseline, competitor benchmarks, opportunity priorities, KPI model, assumptions, and recommended measurement cadence
- [x] Save the complete verified growth release as a checkpoint and synchronize it to `zigroninc/MySentry.ai` main

## Account Deletion Page 404 Fix (September 2026)
- [x] Audit `/account-deletion`, route registration, metadata, privacy links, support flows, and any existing account-deletion instructions
- [x] Define accurate account-deletion steps and limitations without inventing an unsupported in-app, email, dashboard, or processing workflow
- [x] Implement a canonical, accessible, mobile-friendly `/account-deletion` page using the existing MySentry design language
- [x] Add contextual discovery from Privacy Policy and the shared footer without creating duplicate routes
- [x] Add targeted tests for direct routing, metadata, one-H1 structure, instructions, links, contrast, punctuation, and local assets
- [x] Validate TypeScript, tests, production build, raw and hydrated metadata, desktop, mobile, links, accessibility, and horizontal overflow
- [x] Save a verified checkpoint and synchronize the account-deletion fix to `zigroninc/MySentry.ai` main

## Approved Docker Deployment Fix (September 2026)
- [x] Review the custom Docker build contract and confirm the deployment failure is limited to `COPY .env ./.env`
- [x] Remove only the invalid build-time `.env` copy from the Dockerfile without creating or modifying any environment file
- [x] Keep `.dockerignore` permanently absent and verify no database or unrelated configuration changes
- [x] Validate TypeScript, the complete test suite, production build, Docker contract, production runtime startup, representative public routes, and protected-file integrity
- [x] Save a verified checkpoint and synchronize the deployment correction to `zigroninc/MySentry.ai` main

## Malformed Account Deletion URL Fix (September 2026)
- [x] Diagnose why `/https://mysentry.ai/account-deletion?from_webdev=1` reaches the 404 route and search for any malformed link source
- [x] Preserve `/account-deletion` as the only canonical page while adding safe handling for the exact malformed absolute-URL path
- [x] Add regression tests for the canonical route, query-string route, malformed route redirect, metadata, and redirect-chain prevention
- [x] Validate TypeScript, tests, production build, HTTP status, redirect destination, query preservation, canonical metadata, and live deployment readiness
- [x] Save a verified checkpoint and synchronize the malformed-route fix to `zigroninc/MySentry.ai` main

## Public Domain Account Deletion Availability Investigation (September 2026)
- [x] Compare the public `mysentry.ai` response with the managed deployment for canonical, query-string, and malformed account-deletion URLs
- [x] Inspect public DNS, TLS, HTTP headers, deployment identity, and domain configuration without changing infrastructure
- [x] Determine whether the public domain is routed to the current managed deployment, a separate AWS deployment, or an older revision
- [x] Document the verified root cause and safe operator action required to make the latest account-deletion route live on `mysentry.ai`

## Content Quality and Search Console Indexability Review (September 2026)
- [x] Define a compliant editorial-quality standard that improves specificity, evidence, clarity, and reader value without attempting to bypass search systems or detection
- [x] Inspect the referenced no-ai-slop GitHub skill before installation, document its dependencies and behavior, and reject any evasion or deceptive use
- [x] If safe and suitable, integrate the referenced skill only as a non-deceptive editorial-quality linter alongside the reader-first review standard
- [x] Audit every sitemap route, canonical redirect, noindex route, alternate URL, and live response against the three Search Console exclusion reasons
- [x] Separate intentional canonical redirects and noindex pages from unintended indexing problems, with a route-level remediation decision
- [x] Audit priority public pages for generic wording, unsupported claims, missing source context, weak experience signals, and unclear conversion intent
- [x] Improve only pages supported by the audit with substantive, claim-safe, reader-first editorial changes and accurate supporting context
- [x] Update metadata, canonicals, robots, schema, internal links, sitemaps, and AI discovery only where the audit identifies a verified issue
- [x] Add tests for any changed route governance, content standards, metadata, canonicals, noindex decisions, and claim safety
- [x] Validate raw and hydrated metadata, robots, redirects, sitemaps, production content, desktop, mobile, image, contrast, accessibility, and overflow behavior
- [x] Deliver a quality and indexability report that distinguishes intentional exclusions, remediated issues, unresolved external deployment issues, and recommended Search Console follow-up
- [x] Save a verified checkpoint and synchronize the approved content-quality and indexability release to `zigroninc/MySentry.ai` main

## Full Public Content No-AI-Slop and StoryBrand Refinement (September 2026)
- [x] Add the no-ai-slop and Donald Miller StoryBrand requirements to the reusable editorial-quality process for all future website and blog content
- [x] Inventory every public React page and published managed-database blog article before modifying content
- [x] Run the compliant no-ai-slop detect-mode audit and StoryBrand review matrix across every public page and published blog without inferring authorship or attempting search-system evasion
- [x] Verify access to the user-approved managed blog database and create a reversible content-change inventory before any database update
- [x] Reconcile the differing blog counts and confirm the user-approved project `DATABASE_URL` contains 99 published posts for this refinement
- [x] Re-run the no-ai-slop and StoryBrand review over the full 99-post user-approved managed blog estate with a fresh fingerprinted baseline
- [x] Reject any bulk blog draft that changes product capabilities, removes existing links, introduces facts, or fails the source-preserving validation
- [x] Apply a surgical blog revision method that preserves article links, supported facts, and scope while removing only verified generic phrasing or unsafe claims
- [x] Apply the approved Option A decision by refining 39 eligible articles and unpublishing 13 empty plus 47 evidence-hold articles
- [x] Guard every managed-database update with the fresh original fingerprint and preserve a complete rollback baseline and artifact
- [x] Unpublish empty published blog records pending sourced, editorially reviewed content rather than generating unsupported replacement articles
- [x] Refine only audited page copy and published managed-database blog content that needs improvement, preserving factual accuracy, product limitations, legal meaning, canonical routes, and intentional noindex decisions
- [x] Apply Donald Miller StoryBrand structure to every new or materially rewritten page and blog section while retaining the reader as hero and MySentry as a qualified guide
- [x] Add regression tests for editorial quality, StoryBrand structures, claims, metadata, canonicalization, and blog content integrity
- [x] Validate the complete public content estate across source, managed blog data, production rendering, metadata, sitemaps, desktop, mobile, accessibility, contrast, images, and overflow
- [x] Prepare a separate reversible AWS database migration artifact for approved blog-content changes without executing it against production
- [x] Save a verified checkpoint and synchronize the complete content-refinement release to `zigroninc/MySentry.ai` main

## MySentry and Ring Blog Announcement Draft (September 2026)
- [x] Extract and inventory every factual statement, quote, name, title, product detail, partnership claim, availability statement, date, location, link, and limitation from the supplied PR
- [x] Convert the press release into a professional MySentry product and partnership announcement with a strong web headline, short sections, clear customer value, and a fact-matched CTA
- [x] Apply the no-ai-slop editorial review and Donald Miller StoryBrand structure without adding unsupported capabilities, outcomes, endorsements, certifications, or availability claims
- [x] Prepare basic SEO fields including slug, excerpt, meta title, meta description, target phrase, hero alt text, and internal link recommendations
- [x] Use the supplied MySentry and Ring visual as the proposed hero image without modifying the image
- [x] Add and test the standard `/manus-storage` proxy required to render the unchanged uploaded hero image from its durable project path
- [x] Create the announcement as an unpublished managed-blog draft for owner review rather than publishing automatically
- [x] Validate the draft’s facts, quotes, links, product limitations, HTML structure, metadata lengths, prohibited punctuation, no-ai-slop patterns, image reference, and responsive preview
- [x] Deliver the polished draft, review notes, and publication checklist without changing AWS production data
- [x] Replace the internal blog-writer prompt’s AI-detection-evasion instructions with evidence-led no-ai-slop, StoryBrand, claim-safety, source, and editorial-review requirements

## MySentry and Ring Blog Announcement Publication (September 2026)
- [x] Verify managed draft 2790002, its slug, metadata, hero image, links, category, and unpublished state immediately before publication
- [x] Publish and index the approved MySentry and Ring Appstore announcement using the supplied hero image
- [x] Register the durable `/manus-storage` proxy in the production server entry point so the published hero image does not return 404 after deployment
- [x] Verify the announcement appears on the public blog listing and canonical article route with correct metadata, schema, hero image, links, and sitemap discovery
- [x] Verify desktop and mobile rendering, one-H1 structure, contrast, navigation clearance, and absence of horizontal overflow
- [x] Save a verified publication checkpoint and synchronize the completed release to `zigroninc/MySentry.ai` main

## Exact Supplied PR Publication Correction (September 2026)
- [x] Extract the complete text from `MysentryxAmazonRing.docx` and create a normalized source-of-truth record without rewriting, paraphrasing, or adding copy
- [x] Compare the supplied PR with managed blog post 2790002 and preserve a guarded rollback record of the currently published version
- [x] Replace the article headline and body with the exact supplied PR wording while preserving only the technical HTML structure required to render that wording
- [x] Verify exact textual fidelity between the supplied document and the managed article after stripping format-only HTML markup
- [x] Verify the corrected published article route, listing, metadata, hero image, sitemap entry, links, desktop rendering, and mobile rendering
- [x] Save a verified correction checkpoint and synchronize the completed release to `zigroninc/MySentry.ai` main

## AWS Production Ring PR Publication Incident (September 2026)
- [x] Capture the current public `mysentry.ai` article, blog listing, blog API, sitemap, metadata, hero-image, and deployment identity evidence
- [x] Compare the AWS production blog record and runtime with managed post 2790002 and GitHub commit `62b981a024dafd65c8a3cb239660df94fadc60ef`
- [x] Preserve a guarded backup and rollback artifact before changing any AWS production blog data
- [x] Apply the smallest safe correction required to publish the exact supplied PR on the AWS-backed public website
- [x] Validate the rebuilt release with `DATABASE_URL` and Forge storage variables unavailable, matching the observed AWS runtime conditions
- [x] Verify the public canonical article, blog listing, exact PR wording, index/follow metadata, Article schema, sitemap entry, supplied links, and hero image
- [x] Save a checkpoint and synchronize any required code correction to `zigroninc/MySentry.ai` main

## Sitewide Text Visibility and Contrast Audit (September 2026)
- [x] Reproduce and diagnose the invisible verification-card text on `/compare/apple-watch-fall-detection-vs-mysentry`
- [x] Inventory every indexable and noindex public route, including headers, cards, tables, alerts, forms, and mobile navigation states, for source-level contrast risks
- [x] Run an automated rendered contrast audit across every public route at desktop and mobile breakpoints and record every verified insufficient-contrast or hidden-text issue
- [x] Apply only targeted high-contrast text and component fixes using the approved dark green `#0b6848`, logo blue `#007bc2`, black, or white pairings as appropriate
- [x] Add or update regression tests preventing the verified invisible-text patterns from returning
- [x] Validate affected and representative public routes on production desktop and mobile views for readability, contrast, wrapping, focus states, and overflow
- [x] Save a verified checkpoint and synchronize the completed visibility fixes to `zigroninc/MySentry.ai` main

## Apple Watch and Samsung Watch Comparison Coverage (September 2026)
- [x] Review the withheld `/blog/fall-detection-apple-watch-vs-dedicated-safety-app` route for visibility, current publication status, and factual-review boundaries
- [x] Inventory all existing Apple Watch and Samsung Watch comparison and integration routes, redirects, metadata, canonical rules, and sitemap governance
- [x] Research Apple and Samsung official safety-feature documentation, including fall detection, emergency SOS, notifications, supported-device requirements, and stated limitations
- [x] Create or refine clear, detailed Apple Watch versus MySentry and Samsung Galaxy Watch versus MySentry comparison pages only where source-supported facts permit, using StoryBrand and the non-deceptive editorial-quality review process
- [x] Add or update metadata, schema, canonical, sitemap, internal links, and noindex governance for the final comparison pages without publishing unsupported claims
- [x] Add regression tests for factual boundaries, page structure, prohibited punctuation, visibility, metadata, and responsive rendering
- [x] Validate desktop and mobile rendering, contrast, SEO, factual source mapping, and public routes, then checkpoint and synchronize the complete release to `zigroninc/MySentry.ai` main

## Cross-Platform MySentry Positioning and Disclaimer Removal (September 2026)
- [x] Verify the user-confirmed 24/7 monitoring, verified emergency escalation, AI-supported wellness review, panic workflow, voice-enabled panic triggering, live location, phone streaming, and mixed-device family capabilities against the current MySentry knowledgebase and approved app screens
- [x] Inventory every public marketing and comparison occurrence of the repeated blanket supplemental-service disclaimer and distinguish it from legal, privacy, terms, evidence-hold, or status-page notices
- [x] Remove the repeated blanket disclaimer block from public marketing and comparison pages without weakening legally necessary disclosures or factual setup and availability conditions
- [x] Rewrite the Apple Watch comparison to clearly explain why MySentry adds value beyond watch-only fall detection, Emergency SOS, and contact notification, including voice-enabled panic triggering when the user cannot reach a phone or watch
- [x] Rewrite the Samsung Galaxy Watch comparison to explain the same cross-platform MySentry monitoring and family-connectivity value using Samsung-specific official facts
- [x] Explain how iOS and Android family members and supported Apple and Samsung wearables can participate in one MySentry safety workflow, subject to verified compatibility, permissions, connectivity, plan, region, and service availability
- [x] Apply StoryBrand and the non-deceptive editorial-quality review, preserving simple human language, factual sourcing, no medical-diagnosis claims, and no em dashes
- [x] Add regression tests for removed disclaimer blocks, verified capabilities, cross-platform family messaging, source links, claim boundaries, metadata, schema, and visibility
- [x] Validate TypeScript, all tests, production build, public routes, SEO, sitemap, desktop/mobile rendering, and text contrast, then checkpoint and synchronize the release to `zigroninc/MySentry.ai` main
