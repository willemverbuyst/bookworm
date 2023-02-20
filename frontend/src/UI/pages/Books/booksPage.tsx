import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { TableWithAllBooks } from "./table";
import { ChartWithBooks } from "./chart";

export default function BooksPage() {
  // const [showTable, setShowTable] = useState<boolean>(true);

  // const displayTable = () => setShowTable(true);

  // const displayChart = () => setShowTable(false);

  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Books
        </Heading>
      </Box>
      {/* <Box>
        <Box>
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
        </Box>{" "}
        {showTable ? <TableWithAllBooks /> : <ChartWithBooks />}
      </Box> */}
    </Container>
  );
}
