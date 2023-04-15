import { Flex, Text } from "@chakra-ui/react";
import { PageTitle } from "../../components/Text";

function PageNotFoundPage() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="404" />
      <Text fontSize="3xl">Oops...page not found</Text>
    </Flex>
  );
}

export default PageNotFoundPage;
