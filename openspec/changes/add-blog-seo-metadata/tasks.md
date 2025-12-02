# Tasks: Blog Post SEO Metadata Implementation

## Task 1: Add helper functions for text extraction
**Estimated effort**: 15 minutes

**Description**: 
Add `extractTextFromRichText` and `createExcerpt` helper functions to `app/blog/[...filename]/page.tsx`. These functions already exist in `app/blog/page.tsx` and can be copied/adapted.

**Acceptance criteria**:
- [x] `extractTextFromRichText` function handles TinaCMS rich text format
- [x] Function recursively traverses nested children nodes
- [x] `createExcerpt` truncates text at 155 characters
- [x] Truncation happens at last complete word
- [x] Functions handle empty/null input gracefully

**Implementation notes**:
- Copy existing helpers from `app/blog/page.tsx` (lines 4-38)
- No changes needed to function logic
- Place above `generateMetadata` function

---

## Task 2: Implement generateMetadata function
**Estimated effort**: 30 minutes

**Description**: 
Create the `generateMetadata` async function export in `app/blog/[...filename]/page.tsx` that fetches post data and generates comprehensive metadata.

**Acceptance criteria**:
- [x] Function signature matches Next.js metadata API
- [x] Fetches post data using `client.queries.post()`
- [x] Handles params correctly (awaits params promise)
- [x] Returns metadata object with all required fields
- [x] Spreads `baseMetadata` for site-wide defaults
- [x] Generates description from post body using helpers

**Implementation notes**:
- Import `baseMetadata` from `@/app/shared-metadata`
- Similar pattern to existing `generateStaticParams` function
- Extract filename from resolved params
- Call helpers to generate description

**Dependencies**: Task 1 must be completed

---

## Task 3: Add OpenGraph metadata fields
**Estimated effort**: 15 minutes

**Description**: 
Add OpenGraph-specific fields to the metadata object returned by `generateMetadata`.

**Acceptance criteria**:
- [x] `openGraph.type` is set to "article"
- [x] `openGraph.title` uses post title
- [x] `openGraph.description` uses generated excerpt
- [x] `openGraph.publishedTime` uses post date field
- [x] `openGraph.modifiedTime` uses post updatedAt field (when present)
- [x] `openGraph.authors` includes ["Valentin Silvestre"]
- [x] `openGraph.url` uses correct blog post path

**Implementation notes**:
- Only include `modifiedTime` if `updatedAt` exists
- URL format: `/blog/${filename}`
- Follow pattern from `app/page.tsx` (lines 21-36)

**Dependencies**: Task 2 must be completed

---

## Task 4: Add Twitter Card metadata fields
**Estimated effort**: 10 minutes

**Description**: 
Add Twitter Card-specific fields to the metadata object.

**Acceptance criteria**:
- [x] `twitter.card` is set to "summary"
- [x] `twitter.title` uses post title
- [x] `twitter.description` uses generated excerpt
- [x] Inherits `twitter.site` and `twitter.creator` from baseMetadata

**Implementation notes**:
- Twitter card type "summary" is appropriate without featured images
- Follow pattern from `app/page.tsx` (lines 37-43)

**Dependencies**: Task 2 must be completed

---

## Task 5: Add canonical URL
**Estimated effort**: 5 minutes

**Description**: 
Add canonical URL to metadata using alternates field.

**Acceptance criteria**:
- [x] `alternates.canonical` uses blog post path
- [x] Path format is `/blog/${filename}`

**Implementation notes**:
- Follow pattern from `app/page.tsx` (line 46-48)

**Dependencies**: Task 2 must be completed

---

## Task 6: Create JSON-LD structured data
**Estimated effort**: 20 minutes

**Description**: 
Create BlogPosting schema structured data object and add it to the page component JSX.

**Acceptance criteria**:
- [x] JSON-LD object uses BlogPosting schema type
- [x] Includes headline, description, datePublished, dateModified
- [x] Author is structured as Person type
- [x] Publisher is structured as Person type
- [x] Falls back to publication date if updatedAt is missing
- [x] Script tag is properly formatted with type="application/ld+json"
- [x] JSON is serialized using JSON.stringify()

**Implementation notes**:
- Add to JSX in default export function (before returning Post component)
- Follow pattern from `app/page.tsx` (lines 51-173, 178)
- Simpler structure than homepage - just BlogPosting, not Person
- Use dangerouslySetInnerHTML for script content

**Dependencies**: Task 2 must be completed

---

## Task 7: Test metadata generation
**Estimated effort**: 20 minutes

**Description**: 
Build the site and verify metadata is correctly generated for blog posts.

**Acceptance criteria**:
- [x] Run `npm run build` successfully
- [x] Inspect HTML output for metadata tags
- [x] Verify title, description, and dates are present
- [x] Check OpenGraph tags (og:type, og:title, etc.)
- [x] Check Twitter Card tags (twitter:card, twitter:title, etc.)
- [x] Validate JSON-LD structure with browser dev tools

**Testing approach**:
1. Run build command
2. Start production server or inspect `.next` output
3. Navigate to a blog post page
4. View page source and inspect `<head>` section
5. Check for presence of all metadata tags
6. Verify values match post content

**Dependencies**: All previous tasks must be completed

---

## Task 8: Validate with external tools
**Estimated effort**: 15 minutes

**Description**: 
Use external validation tools to verify SEO metadata correctness.

**Acceptance criteria**:
- [ ] Google Rich Results Test validates structured data
- [ ] Facebook Sharing Debugger shows correct preview
- [ ] Twitter Card Validator shows correct card
- [ ] No validation errors or warnings

**Testing tools**:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

**Dependencies**: Task 7 must be completed

---

## Summary

**Total estimated effort**: ~2 hours

**Parallelizable tasks**: None - all tasks are sequential

**Critical path**: Tasks 1 → 2 → (3, 4, 5, 6 in parallel) → 7 → 8

**Validation approach**: Manual testing with browser dev tools and external SEO validators
