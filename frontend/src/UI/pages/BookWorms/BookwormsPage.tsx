import { Flex } from "@chakra-ui/react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";

function BookwormsPage() {
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Bookworms" />
      </Flex>
    </>
  );
}
export default BookwormsPage;
