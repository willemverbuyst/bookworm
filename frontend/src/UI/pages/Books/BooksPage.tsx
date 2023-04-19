import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";
import { BooksChartLanguages } from "./BookChartLanguages";
import { BookChartYearPublished } from "./BookChartYearPublished";
import { BooksChartGenres } from "./BooksChartGenres";
import { BooksTable } from "./BooksTable";

export function BooksPage() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Books" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Languages</Tab>
            <Tab>Genres</Tab>
            <Tab>Year Published</Tab>
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
            <TabPanel>
              <BookChartYearPublished />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
