import {
  DownloadIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
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
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { useHeader } from "./useHeader";

export const Header = () => {
  const {
    bgColor,
    colorMode,
    isBase,
    documentName,
    setDocumentName,
    normalizeDocumentName,
  } = useHeader();

  return (
    <Flex
      w="100%"
      p="0.5rem 1rem"
      justifyContent="space-between"
      alignItems="center"
      bgColor={bgColor[colorMode]}
    >
      <Flex alignItems="center">
        <Menu closeOnBlur>
          <MenuButton
            as={IconButton}
            bgColor={"gray.200"}
            _hover={{
              bgColor: "gray.300",
            }}
            icon={<HamburgerIcon />}
          />
          <MenuList>
            <MenuGroup title="Arquivo">
              <MenuItem>Salvar</MenuItem>
              <MenuItem>Importar</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        {!isBase && (
          <Heading ml="1rem" fontSize="1.5rem" opacity="0.8">
            MD-EDITOR
          </Heading>
        )}

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
          <Editable value={documentName}>
            <EditablePreview p="0" />
            <EditableInput
              p="0"
              onChange={(e) => setDocumentName(e.currentTarget.value)}
              onBlur={(e) =>
                setDocumentName(normalizeDocumentName(e.currentTarget.value))
              }
            />
          </Editable>
        </Flex>
      </Flex>
      <Flex>
        <IconButton
          aria-label="save"
          colorScheme={"teal"}
          icon={<DownloadIcon />}
        />
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
