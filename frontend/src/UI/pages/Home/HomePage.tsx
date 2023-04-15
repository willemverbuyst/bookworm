import { Flex, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { UserDetails } from "../../components/Cards";
import { NavigationBar } from "../../components/Navigation";
import { PageTitle } from "../../components/Text";

export function HomePage() {
  const { isLoading } = useAppState().app;
  const { user } = useAppState().user;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Home" />
        {user ? <UserDetails user={user} /> : null}
      </Flex>
    </>
  );
}
