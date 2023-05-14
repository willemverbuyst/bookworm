import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";
import { BooksChartGenres } from "./BooksChartGenres";
import { BooksChartLanguages } from "./BooksChartLanguages";
import { BooksChartYearPublished } from "./BooksChartYearPublished";
import { BooksTable } from "./BooksTable";

export function BooksPage() {
  return (
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
            <BooksChartYearPublished />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
