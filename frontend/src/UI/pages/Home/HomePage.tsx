import { Flex, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { UserDetails } from "../../components/Cards";
import { PageTitle } from "../../components/Text";

export function HomePage() {
  const { isLoading } = useAppState((state) => state.auth);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Home" />
      <UserDetails />
    </Flex>
  );
}
