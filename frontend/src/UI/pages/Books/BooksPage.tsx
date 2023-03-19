import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";
import BooksChartLanguages from "./BookChartLanguages";
import BooksChartGenres from "./BooksChartGenres";
import BooksTable from "./BooksTable";

function BooksPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Books" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Languages</Tab>
            <Tab>Genres</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BooksTable />
            </TabPanel>
            <TabPanel>
              <BooksChartLanguages />
            </TabPanel>
            <TabPanel>
              <BooksChartGenres />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default BooksPage;
