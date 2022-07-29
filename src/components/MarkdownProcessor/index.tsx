import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SeparatorContainer } from "../SeparatorContainer";
import { useColorMode } from "@chakra-ui/react";

interface MarkdownProcessorProps {
  children: string;
  isVisible?: boolean;
  onIconClick?: () => void;
  showVisibleIcon?: boolean;
}

export const MarkdownProcessor = ({
  children,
  isVisible,
  onIconClick,
  showVisibleIcon,
}: MarkdownProcessorProps) => {
  const { colorMode } = useColorMode();

  return (
    <SeparatorContainer
      title="Prévia"
      p={"0.5rem"}
      isVisible={isVisible}
      onIconClick={onIconClick}
      showVisibleIcon={showVisibleIcon}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                style={colorMode === "dark" ? dracula : prism}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </SeparatorContainer>
  );
};
