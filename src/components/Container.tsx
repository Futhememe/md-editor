import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.900" };
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="row"
      height={"100vh"}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
