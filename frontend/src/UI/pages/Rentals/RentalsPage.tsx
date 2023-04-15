import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NavigationBar } from "../../components/Navigation";
import { PageTitle } from "../../components/Text";
import { RentalsDayChart } from "./RentalsDayChart";
import { RentalsDurationChart } from "./RentalsDurationChart";
import { RentalsTable } from "./RentalsTable";

export function RentalsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Rentals" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Duration of Rentals</Tab>
            <Tab>Rentals and Returns per Day</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RentalsTable />
            </TabPanel>
            <TabPanel>
              <RentalsDurationChart />
            </TabPanel>
            <TabPanel>
              <RentalsDayChart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
