import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useBoolean, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export const useHeader = () => {
  const isBase = useBreakpointValue({ base: true, sm: false });
  const { colorMode } = useColorMode();
  const icons = { light: <MoonIcon />, dark: <SunIcon /> };
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const hoverColor = { light: "gray.300", dark: "gray.600" };
  const [documentName, setDocumentName] = useState<string>("document.md");

  const normalizeDocumentName = (text: string): string =>
    text.includes(".md") ? text : text.concat(".md");

  return {
    isBase,
    colorMode,
    icons,
    bgColor,
    hoverColor,
    normalizeDocumentName,
    documentName,
    setDocumentName,
  };
};
