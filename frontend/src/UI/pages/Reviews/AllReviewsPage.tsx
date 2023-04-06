import { Flex } from "@chakra-ui/react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";

function AllReviewsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="All Reviews" />
      </Flex>
    </>
  );
}

export default AllReviewsPage;
