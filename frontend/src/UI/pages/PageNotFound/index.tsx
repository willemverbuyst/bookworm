import { Box, Container } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const PageNotFound: React.FC = (): ReactElement => {
  return (
    <Container>
      <Box>404</Box>
      <Box>page not found</Box>
    </Container>
  );
};
export default PageNotFound;
