import { Flex, Text, FlexProps } from "@chakra-ui/react";

interface SeparatorContainerProps extends FlexProps {
  title: string;
  children: React.ReactNode;
}

export const SeparatorContainer = ({
  title,
  children,
  ...rest
}: SeparatorContainerProps) => {
  return (
    <Flex flex={1} h="100%" w="100%" direction="column">
      <Flex
        w="100%"
        p="0.5rem 1rem"
        bgColor="gray.100"
        borderRight="2px solid"
        borderRightColor={"gray.200"}
      >
        <Text fontWeight={"500"}>{title}</Text>
      </Flex>
      <Flex h="100%" w="100%" direction={"column"} {...rest}>
        {children}
      </Flex>
    </Flex>
  );
};
