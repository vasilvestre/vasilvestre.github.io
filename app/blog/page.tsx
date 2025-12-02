import { client } from "../../tina/__generated__/client";
import Link from "next/link";
import type { Metadata } from "next";
import { baseMetadata } from "@/app/shared-metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description: "Articles et réflexions sur le développement web, PHP, Symfony et Sylius par Valentin Silvestre.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blog | Valentin Silvestre",
    description: "Articles et réflexions sur le développement web, PHP, Symfony et Sylius par Valentin Silvestre.",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

// Helper function to extract plain text from rich text content
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.children) return "";

  let text = "";

  function traverse(node: any) {
    if (typeof node === "string") {
      text += node;
    } else if (node && typeof node === "object") {
      if (node.text) {
        text += node.text;
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(traverse);
      }
    }
  }

  if (Array.isArray(richText.children)) {
    richText.children.forEach(traverse);
  }

  return text.trim();
}

// Helper function to create excerpt
function createExcerpt(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "...";
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page() {
  const { data } = await client.queries.postConnection();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-beige mb-8">Blog Posts</h1>

      {data.postConnection?.edges && data.postConnection.edges.length > 0 ? (
        <div className="space-y-8">
          {data.postConnection.edges.map((post) => {
            if (!post?.node) return null;

            const bodyText = extractTextFromRichText(post.node.body);
            const excerpt = createExcerpt(bodyText);

            return (
              <article
                key={post.node.id}
                className="bg-beige rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-2xl font-semibold text-dark-blue mb-3">
                  <Link
                    href={`/blog/${post.node._sys.filename}`}
                    className="hover:text-green-tree transition-colors duration-200"
                  >
                    {post.node.title}
                  </Link>
                </h2>

                <div className="text-sm text-gray-600 mb-3">
                  {post.node.date && <span>Published: {formatDate(post.node.date)}</span>}
                  {post.node.updatedAt && post.node.updatedAt !== post.node.date && (
                    <span className="ml-4">Updated: {formatDate(post.node.updatedAt)}</span>
                  )}
                </div>

                {excerpt && <p className="text-dark-blue mb-4 leading-relaxed">{excerpt}</p>}

                <Link
                  href={`/blog/${post.node._sys.filename}`}
                  className="inline-flex items-center text-dark-blue hover:text-green-tree font-medium transition-colors duration-200"
                >
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-beige text-lg">No blog posts found.</p>
        </div>
      )}
    </div>
  );
}
