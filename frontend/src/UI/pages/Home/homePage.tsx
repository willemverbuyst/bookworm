import { Box, Container, Heading } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Home
        </Heading>
      </Box>
    </Container>
  );
}
