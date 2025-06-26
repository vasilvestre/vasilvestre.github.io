import { Components } from "tinacms/dist/rich-text";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

export const components: Components<{
  PageSection: {
    heading: string;
    content: string;
  };
  code_block: {
    type: string;
    lang: string;
    value: string;
  };
}> = {
  PageSection: (props) => {
    return (
      <>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </>
    );
  },
  code_block: (props) => {
    if (!props) {
      return <></>;
    }
    return (
      <SyntaxHighlighter language={props.lang || "jsx"} style={atomOneDark}>
        {props.value || ""}
      </SyntaxHighlighter>
    );
  },
};
