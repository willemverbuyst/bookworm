import { Box, Container } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { TableWithAllAuthors } from "./table";
import { ChartWithAuthors } from "./chart";

const Authors: React.FC = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(true);

  const displayTable = () => setShowTable(true);

  const displayChart = () => setShowTable(false);

  return (
    <Container>
      <Box>Authors</Box>
      <Box>
        {/* <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              color="secondary"
              variant={showTable ? "contained" : "outlined"}
              disableElevation
              onClick={displayTable}
            >
              TABLE
            </Button>
            <Button
              color="secondary"
              variant={!showTable ? "contained" : "outlined"}
              disableElevation
              onClick={displayChart}
            >
              CHART
            </Button>
          </ButtonGroup>
        </Box> */}
        {showTable ? <TableWithAllAuthors /> : <ChartWithAuthors />}
      </Box>
    </Container>
  );
};

export default Authors;
