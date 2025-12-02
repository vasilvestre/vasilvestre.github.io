# Design: Blog Post SEO Metadata

## Architecture

### Component Structure
```
app/blog/[...filename]/
├── page.tsx              # Add generateMetadata export (server component)
└── client-page.tsx       # No changes (client component)
```

### Metadata Generation Flow
1. Next.js calls `generateMetadata` during page generation
2. Fetch post data using TinaCMS client (same as existing page data fetch)
3. Extract plain text from rich text body for description
4. Construct metadata object with OpenGraph, Twitter, and base fields
5. Return metadata to Next.js for rendering in `<head>`

## Technical Decisions

### 1. Description Generation
**Decision**: Extract first 155 characters from post body rich text content

**Rationale**: 
- 155 characters is optimal for search engine snippets
- Reuse existing `extractTextFromRichText` pattern from blog listing page
- Avoids adding new fields to TinaCMS schema

**Implementation**:
```typescript
// Move helper to shared location or duplicate in page.tsx
function extractTextFromRichText(richText: any): string { /* ... */ }
function createExcerpt(text: string, maxLength: number = 155): string { /* ... */ }
```

### 2. Metadata Structure
**Decision**: Follow homepage metadata pattern with OpenGraph and Twitter cards

**Rationale**:
- Consistency with existing site metadata approach
- Comprehensive social media coverage
- Proven pattern already working on homepage

**Structure**:
```typescript
{
  ...baseMetadata,
  title: post.title,
  description: excerpt,
  openGraph: {
    type: 'article',
    title: post.title,
    description: excerpt,
    publishedTime: post.date,
    modifiedTime: post.updatedAt,
    authors: ['Valentin Silvestre'],
    url: `/blog/${filename}`,
  },
  twitter: {
    card: 'summary',
    title: post.title,
    description: excerpt,
  }
}
```

### 3. Structured Data (JSON-LD)
**Decision**: Add Article schema structured data in page component

**Rationale**:
- Enables rich search results
- Follows Google's structured data guidelines
- Consistent with existing Person schema on homepage

**Schema**:
```typescript
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": excerpt,
  "datePublished": post.date,
  "dateModified": post.updatedAt || post.date,
  "author": {
    "@type": "Person",
    "name": "Valentin Silvestre",
    "url": "https://vasilvestre.github.io/"
  },
  "publisher": {
    "@type": "Person",
    "name": "Valentin Silvestre"
  }
}
```

### 4. Date Handling
**Decision**: Include both publication and modification times when available

**Rationale**:
- SEO benefit for showing content freshness
- OpenGraph supports both `publishedTime` and `modifiedTime`
- Falls back gracefully if `updatedAt` is missing

## Data Flow

```
generateMetadata(params)
  ↓
Fetch post via client.queries.post()
  ↓
Extract text from body (extractTextFromRichText)
  ↓
Create excerpt (first 155 chars)
  ↓
Construct metadata object
  ↓
Return to Next.js
  ↓
Rendered in <head> tags
```

## File Changes

### Modified Files
1. `app/blog/[...filename]/page.tsx`
   - Add `generateMetadata` export function
   - Add helper functions or import from shared location
   - Add JSON-LD script to component JSX

### No New Files Required
All functionality can be added to existing file structure.

## Performance Considerations

- **Static Generation**: Metadata generated at build time (not runtime)
- **Build Time Impact**: Minimal - one additional query per post (same as existing page generation)
- **No Client-Side Cost**: All metadata generation happens server-side

## Testing Strategy

### Manual Testing
1. Build site and verify `<head>` tags include metadata
2. Test with social media debuggers:
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector
3. Verify structured data with Google Rich Results Test

### Validation
- Check that all posts have proper title and description
- Verify dates are properly formatted (ISO 8601)
- Confirm structured data passes validation

## Future Enhancements (Out of Scope)

1. **Featured Images**: Add image field to TinaCMS schema for OpenGraph images
2. **Custom Descriptions**: Add optional description field instead of auto-generating
3. **Tags/Categories**: Add taxonomy fields for article:section metadata
4. **Author Field**: Make author configurable per post
5. **Blog Listing Metadata**: Add metadata to `/blog` listing page
