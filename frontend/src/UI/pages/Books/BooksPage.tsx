import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BooksTable from "./BooksTable";
import BooksChart from "./BooksChart";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { useGetAllGenres } from "../../hooks/useGetAllGenrs";
import FilterAndSort from "./FilterAndSort";

function BooksPage() {
  useGetAllBooks();
  useGetAllGenres();

  return (
    <>
      <NavigationBar />
      <Container centerContent>
        <PageTitle title="Books" />
        <FilterAndSort />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Table</Tab>
            <Tab>Chart</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BooksTable />
            </TabPanel>
            <TabPanel>
              <BooksChart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}

export default BooksPage;
