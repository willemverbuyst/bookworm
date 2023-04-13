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
import ChartWithAuthors from "./AuthorsChart";
import TableWithAllAuthors from "./AuthorsTable";

function AuthorsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Authors" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Pages vs Books</Tab>
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
      </Flex>
    </>
  );
}

export default AuthorsPage;
