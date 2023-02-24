import {
  Box,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TableWithAllBooks from "./table";
import ChartWithBooks from "./chart";

export default function BooksPage() {
  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Books
        </Heading>
      </Box>
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Table</Tab>
          <Tab>Chart</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableWithAllBooks />
          </TabPanel>
          <TabPanel>
            <ChartWithBooks />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
