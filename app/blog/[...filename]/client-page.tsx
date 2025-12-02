"use client";
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "../../../tina/__generated__/types";
import { ContentBlock } from "@/components/blocks/ContentBlock";
import Link from "next/link";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <>
      <Link
        href="/blog"
        className="text-3xl m-8 block text-center leading-8 font-extrabold tracking-tight text-beige hover:text-dark-blue transition-colors duration-200 sm:text-4xl"
      >
        ← Blog
      </Link>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="text-2xl mb-6 text-center leading-7 font-bold tracking-tight text-gray-900 sm:text-3xl">
          {data.post.title}
        </h1>
        <ContentBlock content={data.post.body}></ContentBlock>
      </div>
    </>
  );
}
