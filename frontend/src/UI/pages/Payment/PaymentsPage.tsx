import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";
import { PaymentsTable } from "./PaymentsTable";

export function PaymentsPage() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Payments" />
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Overview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PaymentsTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
