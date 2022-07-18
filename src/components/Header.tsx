import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  color,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Text,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icons = { light: <MoonIcon />, dark: <SunIcon /> };
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const hoverColor = { light: "gray.300", dark: "gray.600" };

  return (
    <Flex
      w="100%"
      p="0.5rem 1rem"
      justifyContent="space-between"
      alignItems="center"
      bgColor={bgColor[colorMode]}
    >
      <Flex alignItems="center">
        <IconButton
          bgColor={"gray.200"}
          _hover={{
            bgColor: "gray.300",
          }}
          aria-label="More"
          icon={<HamburgerIcon />}
        />
        <Heading ml="1rem" fontSize="1.5rem" opacity="0.8">
          MD-EDITOR
        </Heading>

        <Flex
          direction="column"
          ml="1rem"
          pl="1rem"
          borderLeft="1px solid"
          borderLeftColor={"gray.300"}
        >
          <Text opacity={0.8} fontSize="0.75rem">
            NOME DO DOCUMENTO
          </Text>
          <Editable defaultValue="document.md">
            <EditablePreview p="0" />
            <EditableInput p="0" />
          </Editable>
        </Flex>
      </Flex>
      <Flex>
        {/* <IconButton
          bgColor={bgColor[colorMode]}
          _hover={{
            bgColor: hoverColor[colorMode],
          }}
          aria-label="More"
          onClick={toggleColorMode}
          icon={icons[colorMode]}
        /> */}
      </Flex>
    </Flex>
  );
};
