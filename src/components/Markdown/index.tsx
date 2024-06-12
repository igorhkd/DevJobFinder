import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  body?: string;
};
export const Markdown = ({ body }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      className="whitespace-pre-wrap"
      children={body}
    />
  );
};
