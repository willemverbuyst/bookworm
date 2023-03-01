import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TableWithAllAuthors from "./AuthorsTable";
import ChartWithAuthors from "./AuthorsChart";
import useGetAllAuthors from "../../hooks/useGetAllAuthors";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";

function AuthorsPage() {
  useGetAllAuthors();

  return (
    <>
      <NavigationBar />
      <Container centerContent>
        <PageTitle title="Authors" />
        <Tabs variant="soft-rounded" colorScheme="teal" align="center">
          <TabList>
            <Tab>Table</Tab>
            <Tab>Chart</Tab>
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
      </Container>
    </>
  );
}

export default AuthorsPage;
