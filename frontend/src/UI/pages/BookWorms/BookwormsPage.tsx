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
import BookwormChartLibraries from "./BookwormChartLibraries";
import BookwormsTable from "./BookwormsTable";

function BookwormsPage() {
  return (
    <>
      <NavigationBar />
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
              <BookwormChartLibraries />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
export default BookwormsPage;
