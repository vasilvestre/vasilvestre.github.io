# Spec: Blog Post SEO Metadata

## ADDED Requirements

### Requirement: Page Title Metadata
The system SHALL generate page title metadata for blog post pages using the post title from TinaCMS.

#### Scenario: Basic page title
```gherkin
Given a blog post exists with title "Hello, World!"
When the post page is generated
Then the HTML <title> tag SHALL contain "Hello, World!"
And the title SHALL use Next.js metadata title field
```

#### Scenario: Title for social sharing
```gherkin
Given a blog post exists with title "Understanding SEO"
When the page metadata is generated
Then OpenGraph title SHALL be "Understanding SEO"
And Twitter card title SHALL be "Understanding SEO"
```

---

### Requirement: Description Metadata
The system SHALL generate description metadata by extracting plain text from the post body rich text content.

#### Scenario: Description from body content
```gherkin
Given a blog post has body content with text "Lorem ipsum dolor sit amet..."
When the post page is generated
Then the description SHALL be the first 155 characters of plain text
And the description SHALL be trimmed at the last complete word
And the description SHALL end with "..." if truncated
```

#### Scenario: Description for social sharing
```gherkin
Given a post has a generated description "This is a post about SEO..."
When the page metadata is generated
Then OpenGraph description SHALL contain the generated description
And Twitter card description SHALL contain the generated description
```

#### Scenario: Short body content
```gherkin
Given a blog post has body content with only 50 characters
When the post page is generated
Then the description SHALL use all 50 characters without truncation
And the description SHALL NOT end with "..."
```

---

### Requirement: Publication Date Metadata
WHEN a blog post has a publication date THEN the system SHALL include the date in page metadata.

#### Scenario: OpenGraph publication time
```gherkin
Given a blog post has date "2024-01-15T10:00:00.000Z"
When the page metadata is generated
Then OpenGraph publishedTime SHALL be "2024-01-15T10:00:00.000Z"
```

#### Scenario: Structured data publication date
```gherkin
Given a blog post has date "2024-01-15T10:00:00.000Z"
When JSON-LD structured data is generated
Then datePublished SHALL be "2024-01-15T10:00:00.000Z"
And the schema SHALL use BlogPosting type
```

---

### Requirement: Last Modified Date Metadata
IF a blog post has an updatedAt date THEN the system SHALL include the modified date in page metadata.

#### Scenario: OpenGraph modified time
```gherkin
Given a blog post has updatedAt "2024-01-20T14:30:00.000Z"
When the page metadata is generated
Then OpenGraph modifiedTime SHALL be "2024-01-20T14:30:00.000Z"
```

#### Scenario: Modified date in structured data
```gherkin
Given a blog post has updatedAt "2024-01-20T14:30:00.000Z"
When JSON-LD structured data is generated
Then dateModified SHALL be "2024-01-20T14:30:00.000Z"
```

#### Scenario: Missing updatedAt field
```gherkin
Given a blog post has no updatedAt field
And the post has date "2024-01-15T10:00:00.000Z"
When JSON-LD structured data is generated
Then dateModified SHALL fallback to the publication date
And OpenGraph modifiedTime SHALL be omitted
```

---

### Requirement: OpenGraph Metadata
The system SHALL generate OpenGraph metadata for blog post pages.

#### Scenario: Article type metadata
```gherkin
Given a blog post page is being generated
When OpenGraph metadata is created
Then og:type SHALL be "article"
And og:url SHALL be the full URL path "/blog/{filename}"
And og:locale SHALL be inherited from baseMetadata
```

#### Scenario: Article author metadata
```gherkin
Given a blog post page is being generated
When OpenGraph metadata is created
Then article:author SHALL include "Valentin Silvestre"
```

---

### Requirement: Twitter Card Metadata
The system SHALL generate Twitter Card metadata for blog post pages.

#### Scenario: Summary card type
```gherkin
Given a blog post page is being generated
When Twitter card metadata is created
Then twitter:card SHALL be "summary"
And twitter:site SHALL be inherited from baseMetadata
And twitter:creator SHALL be inherited from baseMetadata
```

---

### Requirement: Structured Data (JSON-LD)
The system SHALL generate BlogPosting structured data for blog post pages.

#### Scenario: Basic BlogPosting schema
```gherkin
Given a blog post exists with title "Hello World" and date "2024-01-15T10:00:00.000Z"
When JSON-LD structured data is generated
Then @type SHALL be "BlogPosting"
And headline SHALL be "Hello World"
And author SHALL be a Person type with name "Valentin Silvestre"
And publisher SHALL be a Person type with name "Valentin Silvestre"
```

#### Scenario: JSON-LD script tag
```gherkin
Given a blog post page is rendered
When the HTML is generated
Then a <script type="application/ld+json"> SHALL be present
And the script SHALL contain valid JSON
And the script SHALL be placed in the page body
```

---

### Requirement: Canonical URL
The system SHALL include canonical URL metadata for blog post pages.

#### Scenario: Canonical URL in metadata
```gherkin
Given a blog post with filename "hello-world"
When the page metadata is generated
Then the canonical URL SHALL be "/blog/hello-world"
And the canonical SHALL use the alternates.canonical metadata field
```

---

### Requirement: Base Metadata Inheritance
The system SHALL inherit base metadata configuration for all blog post pages.

#### Scenario: Metadata base URL
```gherkin
Given baseMetadata exists with metadataBase "https://vasilvestre.github.io/"
When a blog post page metadata is generated
Then the metadata SHALL spread baseMetadata properties
And metadataBase SHALL be "https://vasilvestre.github.io/"
```

#### Scenario: Robots configuration
```gherkin
Given baseMetadata includes robots configuration
When a blog post page metadata is generated
Then robots.index SHALL be true
And robots.follow SHALL be true
```

---

### Requirement: Plain Text Extraction
The system SHALL extract plain text from TinaCMS rich text body content.

#### Scenario: Rich text traversal
```gherkin
Given a post body contains rich text with nested children
When plain text is extracted
Then the system SHALL traverse all text nodes recursively
And the system SHALL concatenate all text content
And the result SHALL be trimmed of leading/trailing whitespace
```

#### Scenario: Empty or missing body
```gherkin
Given a post has no body content
When plain text extraction is performed
Then the system SHALL return an empty string
And no error SHALL be thrown
```

---

### Requirement: Static Generation
The system SHALL generate metadata at build time for static pages.

#### Scenario: Build-time metadata generation
```gherkin
Given blog posts exist in the content directory
When the site build process runs
Then generateMetadata SHALL be called for each post
And metadata SHALL be embedded in the static HTML output
And no runtime metadata generation SHALL occur
```
