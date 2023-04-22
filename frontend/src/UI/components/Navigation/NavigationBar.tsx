import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Page } from "../../../business/models";
import { useAppState } from "../../../business/overmind";
import { NavigationAuth } from "./NavigationAuth";
import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";

export function NavigationBar() {
  const { isOpen, onToggle } = useDisclosure();
  const appState = useAppState().app;

  if (
    appState.currentPage === Page.WELCOME ||
    appState.currentPage === Page.PAGE_NOT_FOUND
  ) {
    return null;
  }

  return (
    <Box minH="3vh">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="3vh"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        position="fixed"
        width="100vw"
        zIndex={9999}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="heading"
            color={useColorModeValue("gray.800", "white")}
          >
            Bookworm
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <NavigationDesktop />
          </Flex>
        </Flex>
        <NavigationAuth />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <NavigationMobile />
      </Collapse>
    </Box>
  );
}
