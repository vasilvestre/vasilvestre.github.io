import Post from "./client-page";
import client from "../../../tina/__generated__/client";
import { baseMetadata } from "@/app/shared-metadata";
import type { Metadata } from "next";

// Extended post type to include featuredImage (added to TinaCMS schema)
// Types will be fully generated after running `tinacms build`
type PostWithImage = {
  title: string;
  date: string;
  updatedAt?: string | null;
  body?: any;
  featuredImage?: string | null;
};

// Helper function to extract plain text from rich text content
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.children) return "";

  const textParts: string[] = [];

  function traverse(node: any) {
    if (typeof node === "string") {
      textParts.push(node);
    } else if (node && typeof node === "object") {
      if (node.text) {
        textParts.push(node.text);
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(traverse);
        // Add space after block-level elements
        if (node.type && ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "code_block"].includes(node.type)) {
          textParts.push(" ");
        }
      }
    }
  }

  if (Array.isArray(richText.children)) {
    richText.children.forEach(traverse);
  }

  return textParts.join("").replace(/\s+/g, " ").trim();
}

// Helper function to create excerpt
function createExcerpt(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "...";
}

export async function generateStaticParams() {
  const pages = await client.queries.postConnection();
  const paths = pages.data?.postConnection?.edges?.map((edge: any) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const filename = resolvedParams.filename.join("/");
  const data = await client.queries.post({
    relativePath: `${resolvedParams.filename}.md`,
  });

  const post = data.data.post as PostWithImage;
  const bodyText = extractTextFromRichText(post.body);
  const excerpt = createExcerpt(bodyText);

  // Build OpenGraph images array if featured image exists
  const openGraphImages = post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : undefined;

  return {
    ...baseMetadata,
    title: post.title,
    description: excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: excerpt,
      locale: "fr_FR",
      publishedTime: post.date,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      authors: ["Valentin Silvestre"],
      url: `/blog/${filename}`,
      ...(openGraphImages && { images: openGraphImages }),
    },
    twitter: {
      card: post.featuredImage ? "summary_large_image" : "summary",
      title: post.title,
      description: excerpt,
      ...(post.featuredImage && { images: [post.featuredImage] }),
    },
    alternates: {
      canonical: `/blog/${filename}`,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ filename: string[] }> }) {
  const resolvedParams = await params;
  const filename = resolvedParams.filename.join("/");
  const data = await client.queries.post({
    relativePath: `${resolvedParams.filename}.md`,
  });

  const post = data.data.post as PostWithImage;
  const bodyText = extractTextFromRichText(post.body);
  const excerpt = createExcerpt(bodyText);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: excerpt,
    inLanguage: "fr",
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    ...(post.featuredImage && { image: post.featuredImage }),
    author: {
      "@type": "Person",
      name: "Valentin Silvestre",
      url: "https://vasilvestre.github.io/",
    },
    publisher: {
      "@type": "Person",
      name: "Valentin Silvestre",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://vasilvestre.github.io/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://vasilvestre.github.io/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vasilvestre.github.io/blog/${filename}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Post {...data}></Post>
    </>
  );
}
