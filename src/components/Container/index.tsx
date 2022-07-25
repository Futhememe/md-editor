import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "#1A1A1A" };
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      height={"100vh"}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
