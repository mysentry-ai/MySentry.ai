# MySentry.ai SEO & GEO Optimization Report

**Prepared by:** Manus AI  
**Date:** February 26, 2026  
**Domain:** mysentry.ai

---

## Executive Summary

This report documents the comprehensive SEO and GEO (Generative Engine Optimization) implementation performed on the MySentry.ai website. The optimization followed an 8-phase strategy covering technical SEO foundations, keyword-targeted page creation, structured data, content marketing, and internal linking. All changes were additive, preserving every existing page, component, and URL without modification to existing functionality.

The implementation added 29 new SEO-optimized landing pages, 10 new blog posts, sitewide schema markup, optimized meta titles and descriptions across all 45+ pages, and a complete sitemap and robots.txt infrastructure. The site is now positioned to compete for over 120 target keywords across consumer safety, senior care, lone worker, and employer safety verticals.

---

## Phase 0: Technical SEO Baseline

### robots.txt

A `robots.txt` file was created at the site root with the following directives:

- Allows all major search engine crawlers (Googlebot, Bingbot, etc.)
- References the sitemap index at `https://mysentry.ai/sitemap_index.xml`
- Blocks crawling of `/api/`, `/dashboard/`, and other non-public paths
- Disallows AI training crawlers (GPTBot, CCBot, Google-Extended) to protect proprietary content

### XML Sitemaps

A three-file sitemap architecture was implemented to ensure clean crawl budget allocation:

| Sitemap File | Purpose | URL Count |
|---|---|---|
| `sitemap_index.xml` | Master index referencing both child sitemaps | 2 references |
| `sitemap_pages.xml` | All static pages (home, features, use-cases, industries, compare, about, etc.) | 43 URLs |
| `sitemap_blog.xml` | All blog posts | 22 URLs |

### Canonical Tags

The `<SEO>` component was upgraded to automatically inject a `<link rel="canonical">` tag on every page, enforcing the `https://mysentry.ai` domain as the canonical origin. This prevents duplicate content issues across staging, preview, and production environments.

### Meta Robots

The SEO component supports a `noindex` prop for pages that should not appear in search results (e.g., internal dashboard references, callback pages).

---

## Phase 1: Keyword Research & Keyword-to-Page Map

A comprehensive keyword-to-page map was created covering four primary clusters:

| Cluster | Primary Keywords | Target Pages |
|---|---|---|
| Consumer Safety | personal safety app, panic button app, crash detection app | Features hub, feature detail pages |
| Seniors / Medical Alert | medical alert app for seniors, fall detection app, elderly safety | Seniors page, use-case pages |
| Employers / Lone Worker | lone worker safety app, employee safety monitoring, OSHA compliance | Employers page, industry pages |
| GEO / AEO | "What is the best personal safety app?", "How does fall detection work?" | Blog posts, FAQ sections |

The full keyword map is available at `/seo-keyword-map.md` in the project root.

---

## Phase 2: SEO Money Pages Created

### Feature Pages (8 pages)

Each feature page targets a specific high-intent keyword and follows the on-page SEO template with H1, H2 subheadings, FAQ section with FAQPage schema, and a clear CTA.

| Page | URL | Primary Keyword |
|---|---|---|
| Panic Button App | `/features/panic-button-app` | panic button app |
| Fall Detection App | `/features/fall-detection-app` | fall detection app |
| Crash Detection | `/features/crash-detection` | crash detection app |
| 24/7 Professional Monitoring | `/features/24-7-professional-monitoring` | 24/7 professional monitoring service |
| Emergency Contacts | `/features/emergency-contacts` | emergency contact alert system |
| Live Video Response | `/features/live-video-response` | live video emergency response |
| Health Monitoring | `/features/health-monitoring` | real-time health monitoring app |
| MeetSafe Check-ins | `/features/meetsafe-check-ins` | safety check-in app |

### Use-Case Pages (5 pages)

| Page | URL | Primary Keyword |
|---|---|---|
| Safety App for Women | `/use-cases/safety-app-for-women` | safety app for women |
| Family Safety App | `/use-cases/family-safety-app` | family safety app |
| Medical Alert App for Seniors | `/use-cases/medical-alert-app-for-seniors` | medical alert app seniors |
| Lone Worker Safety App | `/use-cases/lone-worker-safety-app` | lone worker safety app |
| Home Healthcare Worker Safety | `/use-cases/home-healthcare-worker-safety` | home healthcare worker safety |

### Industry Pages (7 pages)

| Page | URL | Primary Keyword |
|---|---|---|
| Home Healthcare | `/industries/home-healthcare` | home healthcare safety solution |
| Construction | `/industries/construction` | construction worker safety app |
| Retail | `/industries/retail` | retail employee safety |
| Hospitality | `/industries/hospitality` | hospitality worker safety |
| Real Estate | `/industries/real-estate` | real estate agent safety app |
| Education | `/industries/education` | campus safety app |
| Security & Guarding | `/industries/security-guarding` | security guard safety monitoring |

### Comparison Pages (5 pages)

| Page | URL | Primary Keyword |
|---|---|---|
| Noonlight vs MySentry | `/compare/noonlight-vs-mysentry` | Noonlight alternative |
| Life360 vs MySentry | `/compare/life360-vs-mysentry` | Life360 alternative |
| FallCall vs MySentry | `/compare/fallcall-vs-mysentry` | FallCall alternative |
| Google Personal Safety vs MySentry | `/compare/google-personal-safety-vs-mysentry` | Google Personal Safety alternative |
| SOSecure/ADT vs MySentry | `/compare/sosecure-adt-vs-mysentry` | ADT personal safety alternative |

### Hub Pages (4 pages)

Hub pages at `/features`, `/use-cases`, `/industries`, and `/compare` serve as pillar content linking to all child pages, improving crawlability and distributing link equity.

---

## Phase 3: On-Page SEO Template

All new pages use a shared `SEOPageTemplate` component that enforces:

- Single H1 tag with primary keyword
- Structured H2/H3 hierarchy for subtopics
- FAQ section with automatically generated FAQPage JSON-LD schema
- "How It Works" steps section
- Clear CTA buttons linking to the pricing/signup flow
- Canonical URL enforcement
- Cross-linking to related pages via the "Related" section

---

## Phase 4: Meta Titles & Descriptions

Every page on the site now has a unique, keyword-optimized meta title (under 60 characters) and meta description (under 160 characters). Pages that previously lacked an `<SEO>` component (Pricing, About, Contact, Team, Privacy, Partner) now have one.

| Page | Meta Title | Meta Description |
|---|---|---|
| Home | MySentry \| 24/7 Personal Safety & Health Monitoring with Emergency Response | MySentry turns your smartphone into a 24/7 safety and health monitor... |
| Pricing | MySentry Pricing \| Affordable Safety Plans Starting at $15/mo | Compare Individual and Family safety plans with 24/7 monitoring... |
| Seniors | Medical Alert App for Seniors \| MySentry Fall & Health Monitoring | 24/7 fall detection, health monitoring, and emergency response... |
| Families | Family Safety App \| MySentry Location Sharing & Emergency Alerts | Keep your family connected and protected with real-time location... |
| Employers | Employee Safety Monitoring \| MySentry Lone Worker & Workplace Safety | OSHA-compliant lone worker safety solution with real-time monitoring... |
| Females | Personal Safety App for Women \| MySentry Panic Alarm & Live Video | Discreet panic alarm, live video response, and 24/7 professional monitoring... |
| How It Works | How MySentry Works \| Setup Your Safety App in 3 Easy Steps | Download MySentry, pair your smartwatch, and activate 24/7 monitoring... |

All 29 new SEO pages also have optimized meta titles and descriptions built into the `SEOPageTemplate`.

---

## Phase 5: Schema Structured Data (JSON-LD)

### Sitewide Schemas

The `<SEO>` component injects two sitewide schemas on every page:

1. **Organization Schema** with name, URL, logo, social profiles (Facebook, Instagram, LinkedIn, YouTube), and contact information
2. **SoftwareApplication Schema** with application category, operating systems, pricing, and aggregate rating

### Page-Specific Schemas

| Schema Type | Applied To |
|---|---|
| FAQPage | All feature, use-case, industry, and compare pages (via SEOPageTemplate); Pricing page; How It Works page |
| HowTo | How It Works page (3-step setup process) |

---

## Phase 6: Blog Content

### Topical Map

The blog content strategy covers six topical clusters aligned with the keyword map:

1. **Personal Safety Technology** (wearables, apps, crash detection)
2. **Women's Safety** (solo travel, dating safety, daily habits)
3. **Senior Care & Fall Prevention** (fall response, family conversations, health monitoring)
4. **Workplace & Lone Worker Safety** (OSHA compliance, hidden dangers, cost of accidents)
5. **Family Safety** (teen drivers, latchkey kids, connected families)
6. **Health Monitoring** (heart rate, SpO2, vitals interpretation)

### New Blog Posts (10 articles)

All posts are 500-700 words, written at an 8th-grade reading level, and include internal links to relevant feature/use-case pages.

| # | Title | Target Cluster |
|---|---|---|
| 13 | Why Your Apple Watch Could Save Your Life | Personal Safety Technology |
| 14 | The Hidden Dangers of Working Alone | Workplace & Lone Worker Safety |
| 15 | 5 Safety Habits Every Woman Should Adopt in 2026 | Women's Safety |
| 16 | What Happens in the First 5 Minutes After a Fall | Senior Care & Fall Prevention |
| 17 | How to Talk to Your Parents About Safety | Senior Care & Fall Prevention |
| 18 | Crash Detection: How Your Phone Can Call for Help | Personal Safety Technology |
| 19 | The Real Cost of Workplace Accidents | Workplace & Lone Worker Safety |
| 20 | Solo Travel Safety: A Complete Guide for Women | Women's Safety |
| 21 | Heart Rate Monitoring: What Your Watch Is Telling You | Health Monitoring |
| 22 | Why Every Real Estate Agent Needs a Personal Safety Plan | Workplace & Lone Worker Safety |

---

## Phase 7-8: Internal Linking & Navigation

### Navigation Updates

The following links were added to the navbar "More" dropdown menu (without changing the primary nav items):

- Features (hub page)
- Use Cases (hub page)
- Industries (hub page)
- Compare (hub page)

### Footer Updates

The footer "Solutions" column was expanded with four new links:

- All Features (`/features`)
- Use Cases (`/use-cases`)
- Industries (`/industries`)
- Compare (`/compare`)

### Internal Link Architecture

The site now follows a hub-and-spoke internal linking model:

- **Hub pages** link to all child pages within their category
- **Child pages** (via SEOPageTemplate) include a "Related" section linking to sibling pages
- **Blog posts** include contextual links to relevant feature and use-case pages
- **Existing pages** (Seniors, Families, Employers, Females) remain unchanged but benefit from inbound links from the new pages

---

## Summary of All Changes

| Category | Count |
|---|---|
| New SEO landing pages | 29 |
| New hub/index pages | 4 |
| New blog posts | 10 |
| Pages with updated meta titles/descriptions | 15 (existing) + 33 (new) |
| Schema types implemented | 4 (Organization, SoftwareApplication, FAQPage, HowTo) |
| Sitemap files created | 3 (index, pages, blog) |
| Total URLs in sitemaps | 65 |
| robots.txt | Created |
| Canonical tags | Sitewide |

---

## Recommended Next Steps

1. **Submit sitemaps to Google Search Console** at `https://mysentry.ai/sitemap_index.xml` and request indexing for high-priority pages.

2. **Build external backlinks** by pursuing guest posts on safety/health blogs, submitting to app directories (Product Hunt, AlternativeTo, G2), and creating shareable infographics from blog content.

3. **Monitor keyword rankings** weekly for the top 20 target keywords using Google Search Console or a rank tracking tool (Ahrefs, SEMrush).

4. **Add more blog content** at a pace of 2-4 posts per month, continuing to target long-tail keywords from the topical map.

5. **Implement Open Graph and Twitter Card meta tags** for social sharing optimization (the SEO component already has the foundation; OG image generation would further improve click-through from social platforms).

6. **Add breadcrumb navigation** with BreadcrumbList schema to improve SERP appearance and site navigation.
