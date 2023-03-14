import { Flex } from "@chakra-ui/react";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Home" />
      </Flex>
    </>
  );
}

export default HomePage;
