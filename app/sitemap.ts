export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { client } from "../tina/__generated__/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vasilvestre.github.io";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic blog posts
  const posts = await client.queries.postConnection();
  const blogPages: MetadataRoute.Sitemap =
    posts.data?.postConnection?.edges?.map((post: any) => ({
      url: `${baseUrl}/blog/${post?.node?._sys.filename}`,
      lastModified: post?.node?.updatedAt ? new Date(post.node.updatedAt) : new Date(post?.node?.date || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })) || [];

  return [...staticPages, ...blogPages];
}
