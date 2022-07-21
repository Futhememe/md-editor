import { border, useColorMode } from "@chakra-ui/react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { SeparatorContainer } from "../SeparatorContainer";

interface EditorContainerProps extends EditorProps {
  isVisible?: boolean;
  onIconClick?: () => void;
  showVisibleIcon?: boolean;
}

export const EditorContainer = ({
  isVisible,
  onIconClick,
  showVisibleIcon,
  ...rest
}: EditorContainerProps) => {
  const { colorMode } = useColorMode();

  const theme = { light: "light", dark: "vs-dark" };
  const borderColor = { light: "gray.200", dark: "gray.700" };

  return (
    <SeparatorContainer
      title={"Markdown"}
      borderRight="2px solid"
      borderRightColor={borderColor[colorMode]}
      isVisible={isVisible}
      onIconClick={onIconClick}
      showVisibleIcon={showVisibleIcon}
    >
      <Editor
        height="100%"
        width="100%"
        defaultLanguage="markdown"
        theme={theme[colorMode]}
        {...rest}
      />
    </SeparatorContainer>
  );
};
