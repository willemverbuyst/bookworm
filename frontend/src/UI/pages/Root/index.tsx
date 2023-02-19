import { Box, Container, Image } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const Root: React.FC = (): ReactElement => {
  return (
    <Container>
      <Box>Home</Box>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Row of books"
        />
        Welcome bookworm, have a look at our library and leave a book review.
      </Box>
    </Container>
  );
};

export default Root;
