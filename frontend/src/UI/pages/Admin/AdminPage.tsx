import { Flex, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { NavigationBar } from "../../components/Navigation";
import { PageTitle } from "../../components/Text";

export function AdminPage() {
  const { isLoading } = useAppState().app;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Admin" />
      </Flex>
    </>
  );
}
