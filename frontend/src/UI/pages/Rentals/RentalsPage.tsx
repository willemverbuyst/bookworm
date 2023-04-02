import { Flex, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";

function RentalsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Rentals" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Overview</Tab>
          </TabList>
          <TabPanels>
            {/* <TabPanel>
              <BooksTable />
            </TabPanel>
            <TabPanel>
              <BooksChartLanguages />
            </TabPanel>
            <TabPanel>
              <BooksChartGenres />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default RentalsPage;
