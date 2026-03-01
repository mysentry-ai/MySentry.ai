# MySentry.ai SEO + AEO + GEO Optimization Report

**Date**: March 1, 2026
**Scope**: Full-site optimization across 8 phases (P0-P7)

---

## Executive Summary

This report documents all changes made to MySentry.ai to improve search engine visibility (SEO), answer engine optimization (AEO), and generative engine optimization (GEO). The work spans technical foundation, on-page content, structured data, content expansion, and digital marketing strategy.

---

## Phase 0: Hard SEO Foundation

| Item | Before | After |
|------|--------|-------|
| **robots.txt** | Basic file, no admin disallow | Added `Disallow: /admin/`, sitemap directive confirmed |
| **Sitemap system** | Static XML files in `/client/public/` | Dynamic server-side generation from database; `sitemap_index.xml` → `sitemap_pages.xml` + `sitemap_blog.xml` |
| **Sitemap pages count** | ~40 static URLs | 56 static URLs + all published blog posts (dynamic) |
| **Canonical tags** | Present via SEO component | Confirmed on every page via `getCanonicalUrl()` |
| **Rendering** | SPA with react-helmet-async | Confirmed meta tags render correctly for crawlers |

### New Files Created
- `server/sitemaps.ts` — Dynamic sitemap generation from database
- Updated `client/public/robots.txt` — Added admin disallow

---

## Phase 1: Keyword Strategy

| Deliverable | Status |
|-------------|--------|
| **Keyword-to-Page Map** | Created `SEO-Keyword-Page-Map.md` |
| **Pages mapped** | 40+ pages with primary keyword, supporting keywords, and search intent |
| **Keyword categories** | Consumer safety, senior care, employer/lone worker, family, comparison |

---

## Phase 2: On-Page SEO Rebuild

| Item | Before | After |
|------|--------|-------|
| **Meta titles** | Already keyword-rich and unique per page | Verified and optimized; Home page title shortened for better SERP display |
| **Meta descriptions** | Already action-oriented and unique | Verified under 155 chars, includes primary keyword and CTA |
| **Header hierarchy** | SEOPageTemplate enforces H1 + H2/H3 | Confirmed: one H1 per page, logical H2/H3 structure |
| **Internal linking** | `relatedLinks` prop on SEOPageTemplate pages | All 25+ SEOPageTemplate pages have contextual cross-links |

---

## Phase 3: AEO (Answer Engine Optimization)

| Block | Before | After |
|-------|--------|-------|
| **Direct Answer** | Present on all SEOPageTemplate pages | Confirmed — 120-word direct answer in first section |
| **How It Works** | Present (3-step process) | Confirmed on all feature/use-case pages |
| **What Happens After Alert** | Present | Confirmed on all relevant pages |
| **Best For / Not Ideal For** | Present | Confirmed on all pages |
| **Key Takeaways** | Present | Confirmed on all pages |
| **FAQ section** | Present with FAQPage schema | Confirmed — 3-5 questions per page |
| **Setup / Requirements** | **Not present** | **Added to all 25 SEOPageTemplate pages** — lists what users need to get started |

### Setup/Requirements Section (New)
Every feature, use-case, compare, and industry page now includes a "Setup & Requirements" section that lists:
- Device requirements (iPhone/Android/Apple Watch)
- App download steps
- Subscription tier needed
- Setup time estimate

This directly answers "How do I set up [feature]?" queries that AI assistants frequently surface.

---

## Phase 4: GEO (Generative Engine Optimization)

| Item | Before | After |
|------|--------|-------|
| **llms.txt** | Did not exist | **Created** at `/llms.txt` — structured overview for AI crawlers |
| **llms-full.txt** | Did not exist | **Created** at `/llms-full.txt` — full page inventory with descriptions |
| **Cite-ready proof blocks** | Not present | **Added to all 25 SEOPageTemplate pages** |

### Cite-Ready Proof Blocks (New)
Each money page now includes a "Why Trust MySentry" section with factual, cite-ready statements:
- Specific response times (e.g., "Average response time under 30 seconds")
- Feature specifications (e.g., "Monitors HRV, SpO2, and heart rate 24/7")
- Certification claims (e.g., "UL-listed TMA Five Diamond certified monitoring center")
- No hype language — purely factual for AI citation

### llms.txt Structure
```
# MySentry.ai
> Personal safety app with 24/7 professional monitoring, fall detection, crash detection, and live video response.

## Features
- Panic Button App: /features/panic-button-app
- Fall Detection: /features/fall-detection-app
...

## Use Cases
...

## Industries
...
```

---

## Phase 5: Schema / Structured Data

| Schema Type | Before | After |
|-------------|--------|-------|
| **Organization** | Present sitewide | Confirmed — includes name, URL, logo, social profiles |
| **SoftwareApplication** | Present sitewide | Confirmed — includes name, OS, category, offers |
| **FAQPage** | Auto-generated on SEOPageTemplate pages | Confirmed — every page with FAQs gets schema |
| **HowTo** | **Not present** | **Added** — auto-generated from `howItWorksSteps` on every SEOPageTemplate page |
| **Article** | **Not present on blog posts** | **Added** — JSON-LD Article schema on every blog post with headline, author, datePublished, dateModified, image |

### New Schema: HowTo
Generated automatically from the "How It Works" steps on each page. Includes:
- Step name and description
- Total step count
- Proper `@type: HowTo` markup

### New Schema: Article (Blog Posts)
Every blog post now includes:
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "MySentry" },
  "publisher": { "@type": "Organization", "name": "MySentry", "logo": "..." },
  "datePublished": "...",
  "dateModified": "...",
  "image": "...",
  "mainEntityOfPage": "..."
}
```

---

## Phase 6: Content Expansion

### New Money Pages Created

| Page | URL | Primary Keyword |
|------|-----|----------------|
| Safety Check-In App | `/features/safety-check-in-app` | safety check-in app |
| Teen Driver Safety | `/use-cases/teen-driver-safety` | teen driver safety app |

Both pages follow the full SEOPageTemplate structure with all AEO blocks, setup/requirements, cite-ready proof blocks, FAQPage schema, and HowTo schema.

### 40-Topic Blog Plan
Created `Blog-40-Topic-Plan.md` with:
- 12 consumer safety topics
- 10 senior health/emergency topics
- 8 employer/lone worker topics
- 6 family/women safety topics
- 4 comparison/decision topics
- Each mapped to long-tail keywords, PAA questions, and internal link targets
- 11-week publishing schedule at 3-4 posts per week

---

## Phase 7: Digital Marketing Layer

### Event Tracking
- Site uses built-in platform analytics via `VITE_ANALYTICS_ENDPOINT`
- Page views and user interactions tracked automatically

### Backlink Strategy
Created `Backlink-Strategy.md` with:
- **10 linkable assets** (downloadable guides, infographics, comparison tools)
- **6 outreach target categories** (lone worker, senior care, HR, safety directories, women's safety, industry publications)
- **Priority-ordered execution plan**
- **Success metrics**: 20-30 referring domains within 6 months, DA 30+ threshold

---

## Total Pages Inventory

| Category | Count | Examples |
|----------|-------|---------|
| Core pages | 7 | Home, How It Works, Pricing, Females, Seniors, Families, Employers |
| Feature pages | 9 | Panic Button, Fall Detection, Crash Detection, Health Monitoring, Safety Check-In, etc. |
| Use-case pages | 6 | Safety App for Women, Family Safety, Medical Alert, Lone Worker, Teen Driver, etc. |
| Industry pages | 7 | Home Healthcare, Construction, Retail, Hospitality, Real Estate, Education, Security |
| Compare pages | 5 | Noonlight, Life360, FallCall, Google Personal Safety, SOSecure ADT |
| Hub pages | 4 | Features Hub, Use Cases Hub, Industries Hub, Compare Hub |
| Blog pages | 19+ | Dynamic from database |
| Info pages | 6 | About, Contact, Team, Partner, Privacy, Terms |
| **Total** | **63+** | |

---

## Deliverables Summary

| Deliverable | File |
|-------------|------|
| Keyword-to-Page Map | `SEO-Keyword-Page-Map.md` |
| 40-Topic Blog Plan | `Blog-40-Topic-Plan.md` |
| Backlink Strategy | `Backlink-Strategy.md` |
| llms.txt | `client/public/llms.txt` |
| llms-full.txt | `client/public/llms-full.txt` |
| Dynamic sitemaps | `server/sitemaps.ts` |
| This report | `SEO-AEO-GEO-Optimization-Report.md` |

---

## Recommended Next Steps

1. **Submit sitemaps** to Google Search Console at `https://mysentry.ai/sitemap_index.xml`
2. **Begin blog publishing** following the 40-topic plan schedule (3-4 posts/week)
3. **Create linkable assets** starting with the Lone Worker Safety Checklist and Fall Risk Assessment Tool
4. **List on directories** (G2, Capterra, Product Hunt) for immediate backlink wins
5. **Monitor rankings** for primary keywords weekly using Google Search Console
6. **Test structured data** using Google Rich Results Test for each page type
7. **Set up Google Business Profile** if not already done for local SEO signals
