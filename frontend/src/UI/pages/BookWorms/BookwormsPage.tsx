import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";
import { BookwormsChartLibraries } from "./BookwormsChartLibraries";
import { BookwormsTable } from "./BookwormsTable";

export function BookwormsPage() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Bookworms" />
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Libraries</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BookwormsTable />
          </TabPanel>
          <TabPanel>
            <BookwormsChartLibraries />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
