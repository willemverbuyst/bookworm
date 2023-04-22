import { Flex, Text } from "@chakra-ui/react";
import { Page } from "../../../business/models";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";

export function PageNotFoundPage() {
  const appState = useAppState().app;

  return appState.currentPage === Page.PAGE_NOT_FOUND ? (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="404" />
      <Text fontSize="3xl">Oops...page not found</Text>
    </Flex>
  ) : null;
}
