import {
  Flex,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";
import { PaymentsTable } from "./PamentsTable";

export function PaymentsPage() {
  const { isLoading } = useAppState().payment;

  if (isLoading) {
    return <Spinner />;
  }

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
