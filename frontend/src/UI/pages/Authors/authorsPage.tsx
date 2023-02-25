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
import TableWithAllAuthors from "./table";
import ChartWithAuthors from "./chart";
import useGetAllAuthors from "../../hooks/useGetAllAuthors";

export default function AuthorsPage() {
  useGetAllAuthors();

  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Authors
        </Heading>
      </Box>
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Table</Tab>
          <Tab>Chart</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableWithAllAuthors />
          </TabPanel>
          <TabPanel>
            <ChartWithAuthors />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
