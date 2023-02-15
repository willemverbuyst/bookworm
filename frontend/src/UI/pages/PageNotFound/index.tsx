import { Box, Container, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const PageNotFound: React.FC = (): ReactElement => {
  return (
    <Container>
      <Box sx={{ mt: 3 }} id="title">
        <Typography variant="h2">404</Typography>
      </Box>
      <Box sx={{ m: 5, textAlign: "center" }}>
        <Typography variant="h3">page not found</Typography>
      </Box>
    </Container>
  );
};
export default PageNotFound;
