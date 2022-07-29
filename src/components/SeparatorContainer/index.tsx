import { ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  FlexProps,
  useColorMode,
  IconButton,
  useBoolean,
} from "@chakra-ui/react";

interface SeparatorContainerProps extends FlexProps {
  title: string;
  children: React.ReactNode;
  isVisible?: boolean;
  onIconClick?: () => void;
  showVisibleIcon?: boolean;
}

export const SeparatorContainer = ({
  title,
  children,
  isVisible = true,
  showVisibleIcon = false,
  onIconClick = () => {},
  ...rest
}: SeparatorContainerProps) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: "gray.200", dark: "gray.600" };
  const headerColor = { light: "gray.100", dark: "gray.600" };
  const fontColor = { light: "black", dark: "#D4D4D4" };

  return (
    <Flex
      flex={1}
      h="100%"
      w="100%"
      direction="column"
      display={isVisible ? "flex" : "none"}
    >
      <Flex
        w="100%"
        p="0.5rem 1rem"
        alignItems="center"
        justify="space-between"
        bgColor={headerColor[colorMode]}
        borderRight="2px solid"
        borderRightColor={borderColor[colorMode]}
      >
        <Text fontWeight={"500"}>{title}</Text>

        {showVisibleIcon && (
          <IconButton
            size={"sm"}
            aria-label="Show"
            icon={<ViewIcon />}
            onClick={onIconClick}
          />
        )}
      </Flex>
      <Flex
        color={fontColor[colorMode]}
        h="100%"
        w="100%"
        direction={"column"}
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
};
