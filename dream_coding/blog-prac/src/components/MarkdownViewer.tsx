import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {};

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
