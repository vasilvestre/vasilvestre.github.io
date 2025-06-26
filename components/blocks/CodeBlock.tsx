import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import { CodeBlockElement } from "@tinacms/mdx";

const CodeBlock = (props: CodeBlockElement) => {
  return (
    <SyntaxHighlighter language={props.lang || "jsx"} style={atomOneDark}>
      {props.value || ""}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
