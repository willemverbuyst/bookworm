import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";
import { AuthorsChart } from "./AuthorsChart";
import { AuthorsTable } from "./AuthorsTable";

export function AuthorsPage() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Authors" />
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Pages vs Books</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AuthorsTable />
          </TabPanel>
          <TabPanel>
            <AuthorsChart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
