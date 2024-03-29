import {
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export function WelcomePage() {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" align="flex-start" spacing={6}>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Welcome bookworm, looking for a book to read?
          </Text>
          <Stack direction="row">
            <Button
              as="a"
              bg="blue.400"
              rounded="full"
              color="white"
              _hover={{ bg: "blue.500" }}
              href="/books"
            >
              Show me more
            </Button>
            <Button
              as="a"
              href="https://www.imdb.com/chart/top/"
              bg="whiteAlpha.300"
              rounded="full"
              color="white"
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Rather watch a movie
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
