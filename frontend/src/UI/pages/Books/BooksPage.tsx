import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BooksTable from "./BooksTable";
import { BooksChartGenre, BooksChartLanguage } from "./BooksChart";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { useGetAllGenres } from "../../hooks/useGetAllGenrs";
import FilterAndSort from "./FilterAndSort";
import { useGetAllLanguages } from "../../hooks/useGetAllLanguages";
import { useGetBookStatsGenre } from "../../hooks/useGetBookStatsGenre";
import { useGetBookStatsLanguage } from "../../hooks/useGetBookStatsLanguage";

function BooksPage() {
  useGetAllBooks();
  useGetAllGenres();
  useGetAllLanguages();
  useGetBookStatsGenre();
  useGetBookStatsLanguage();

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Books" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Table</Tab>
            <Tab>Chart</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FilterAndSort />
              <BooksTable />
            </TabPanel>
            <TabPanel>
              <BooksChartLanguage />
              <BooksChartGenre />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default BooksPage;
