import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TableWithAllBooks from "./TableWithAllBooks";
import ChartWithBooks from "./chart";
import useGetAllBooks from "../../hooks/useGetAllBooks";
import PageTitle from "../../components/Text/PageTitle";

export default function BooksPage() {
  useGetAllBooks();

  return (
    <Container centerContent>
      <PageTitle title="Books" />
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
