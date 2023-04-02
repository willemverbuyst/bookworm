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
import RentalsDurationChart from "./RentalsDurationChart";
import RentalsTable from "./RentalsTable";

function RentalsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Rentals" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Duration of Rentals</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RentalsTable />
            </TabPanel>
            <TabPanel>
              <RentalsDurationChart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default RentalsPage;
