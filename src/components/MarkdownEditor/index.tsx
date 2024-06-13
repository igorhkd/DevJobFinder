import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./style.css";

type MarkdownEditorProps = {
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
