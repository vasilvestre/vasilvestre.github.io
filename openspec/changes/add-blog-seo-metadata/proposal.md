# Proposal: Add SEO Metadata for Blog Posts

## Overview
Add comprehensive SEO metadata (Open Graph, Twitter Cards, structured data) to individual blog post pages using existing TinaCMS content fields.

## Problem
Currently, blog post pages at `/blog/[...filename]` routes lack SEO metadata. When shared on social media or indexed by search engines, they display default/generic information instead of post-specific title, description, and dates.

## Solution
Implement `generateMetadata` function in the blog post page component to:
- Use post `title` for page title and Open Graph/Twitter title
- Generate description from post `body` content (first 155 characters)
- Include publication date (`date`) and last modified date (`updatedAt`)
- Add structured data (JSON-LD) for Article schema
- Leverage existing `baseMetadata` for site-wide defaults

## Scope
- **In scope**: Individual blog post pages (`/blog/[...filename]`)
- **Out of scope**: Blog listing page metadata, adding new TinaCMS fields, image metadata

## Benefits
- Improved social media sharing appearance
- Better search engine visibility and rankings
- Accurate publication/modification dates for SEO
- Structured data for rich search results

## Dependencies
- Existing TinaCMS fields: `title`, `date`, `updatedAt`, `body`
- Existing `baseMetadata` configuration in `app/shared-metadata.tsx`
- Next.js 15 App Router metadata API

## Risks & Mitigations
- **Risk**: Rich text body parsing complexity
  - **Mitigation**: Reuse existing `extractTextFromRichText` helper from blog listing page
- **Risk**: Missing or invalid dates
  - **Mitigation**: Graceful fallbacks, only include dates when present

## Implementation Approach
Straightforward implementation by adding `generateMetadata` export to existing page component, following the pattern already established in `app/page.tsx`.
