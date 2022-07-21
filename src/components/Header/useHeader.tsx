import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useBoolean, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { useDocumentStore } from "../../store";

export const useHeader = () => {
  const isBase = useBreakpointValue({ base: true, sm: false });
  const { colorMode } = useColorMode();
  const icons = { light: <MoonIcon />, dark: <SunIcon /> };
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const hoverColor = { light: "gray.300", dark: "gray.600" };
  const { documentName, setDocumentName } = useDocumentStore();

  const normalizeDocumentName = (text: string): string =>
    text.includes(".md") ? text : text.concat(".md");

  const downloadFile = (filename: string, text: string) => {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

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
