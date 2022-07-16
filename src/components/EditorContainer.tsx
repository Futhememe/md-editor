import { useColorMode } from "@chakra-ui/react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { SeparatorContainer } from "./SeparatorContainer";

export const EditorContainer = ({ ...rest }: EditorProps) => {
  const { colorMode } = useColorMode();

  const theme = { light: "light", dark: "vs-dark" };

  return (
    <SeparatorContainer
      title={"Markdown"}
      borderRight="2px solid"
      borderRightColor={"gray.200"}
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
