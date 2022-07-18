import {
  Button,
  Flex,
  useBoolean,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/Container";
import { useEffect, useRef, useState } from "react";
import { MarkdownProcessor } from "../components/MarkdownProcessor";
import { EditorContainer } from "../components/EditorContainer";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const [editorValue, setEditorValue] = useState<string>("");
  const isBase = useBreakpointValue({ base: true, sm: false });

  const [isEditorVisible, setEditorVisible] = useBoolean(true);
  const [isMarkdownVisible, setMarkdownVisible] = useBoolean(true);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;

    if (editorRef.current) {
      // @ts-ignore
      setEditorValue(editorRef?.current.getValue());
    }
  }

  useEffect(() => {
    if (isBase) {
      setMarkdownVisible.off();
    } else {
      setMarkdownVisible.on();
    }
  }, [isBase]);

  return (
    <Container>
      <Head>
        <title>MD-EDITOR | Editor</title>
        <meta
          name="description"
          content="Write your md file and share with others"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flex h="100%">
        <EditorContainer
          isVisible={isEditorVisible}
          onIconClick={() => {}}
          showVisibleIcon={isBase}
          value={editorValue}
          onChange={(text) => setEditorValue(text ?? "")}
          onMount={handleEditorDidMount}
        />
        <MarkdownProcessor
          isVisible={isMarkdownVisible}
          onIconClick={() => {}}
          showVisibleIcon={isBase}
        >
          {editorValue}
        </MarkdownProcessor>
      </Flex>
    </Container>
  );
};

export default Home;
