import { Box, Container } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { TableWithAllBooks } from "./table";
import { ChartWithBooks } from "./chart";

const Books: React.FC = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(true);

  const displayTable = () => setShowTable(true);

  const displayChart = () => setShowTable(false);

  return (
    <Container>
      <Box>Books</Box>
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
        {showTable ? <TableWithAllBooks /> : <ChartWithBooks />}
      </Box>
    </Container>
  );
};

export default Books;
