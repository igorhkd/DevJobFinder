import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "./style.css";

export type MarkdownEditorProps = {
  children?: string;
};
export const MarkdownEditor = ({ children }: MarkdownEditorProps) => {
  return (
    <div className="markdown">
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]} skipHtml>
        {children}
      </ReactMarkdown>
    </div>
  );
};
