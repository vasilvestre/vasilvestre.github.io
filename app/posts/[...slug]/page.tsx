import { redirect } from "next/navigation";
import client from "../../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.postConnection();
  const paths = pages.data?.postConnection?.edges?.map((edge: any) => ({
    slug: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function PostsSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  redirect(`/blog/${resolvedParams.slug.join("/")}`);
}
