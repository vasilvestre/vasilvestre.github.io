"use client";
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "../../../tina/__generated__/types";
import { ContentBlock } from "@/components/blocks/ContentBlock";

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
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {data.post.title}
        </h1>
        <ContentBlock content={data.post.body}></ContentBlock>
      </div>
    </>
  );
}
