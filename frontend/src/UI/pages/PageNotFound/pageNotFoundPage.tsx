import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function PageNotFoundPage() {
  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          404
        </Heading>
      </Box>
      <Text fontSize="3xl">Oops...page not found</Text>
    </Container>
  );
}
