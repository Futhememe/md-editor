import { extendTheme } from "@chakra-ui/react";

const fonts = {
  // PUT YOUR FONTS HERE
  body: "'Inter', sans-serif",
  heading: "Inter",
};

export const colors = {
  // PUT YOUR COLORS HERE
  black: {
    100: "#202020",
  },
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const styles = {
  global: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "600",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "600",
    },
    p: {
      display: "block",
      // marginBlockStart: "1em",
      // marginBlockEnd: "1em",
      // marginInlineStart: "0px",
      // marginInlineEnd: "0px",
    },
    strong: {
      fontWeight: "bolder",
    },
    em: {
      fontStyle: "italic",
    },
    blockquote: {
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "40px",
      margininlineEnd: "40px",
      background: "#f9f9f9",
      borderLeft: "10px solid #ccc",
      margin: "1.5em 10px",
      padding: "1em 10px 1em 10px",
    },
    ul: {
      display: "block",
      listStyleType: "disc",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingInlineStart: "40px",
    },
    ol: {
      display: "block",
      listStyleType: "decimal",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingInlineStart: "40px",
    },
    dl: {
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      marginTop: 0,
      marginBottom: "1rem",
    },
    dt: {
      display: "block",
      fontWeight: "600",
    },
    dd: {
      display: "block",
      marginInlineStart: "40px",
    },
    hr: {
      boxSizing: "content-box",
      height: 0,
      overflow: "visible",
    },
    "*, ::after, ::before": {
      boxSizing: "border-box",
    },
    del: {
      textDecoration: "line-through",
    },
    a: {
      color: "#007bff",
      textDecoration: "none",
      backgroundColor: "transparent",
    },
    "thead, th": {
      verticalAlign: "bottom",
      borderBottom: "2px solid #dee2e6",
    },
    td: {
      padding: "0.75rem",
      verticalAlign: "top",
      borderTop: "1px solid #dee2e6",
    },
    pre: {
      whiteSpace: "pre",
    },
    "pre, code": {
      fontSize: "inherit",
      color: "inherit",
      wordBreak: "normal",
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles,
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export default theme;
