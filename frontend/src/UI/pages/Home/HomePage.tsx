import { Flex } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import UserDetails from "../../components/Cards/UserDetails";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";

function HomePage() {
  const { user } = useAppState().user;

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

export default HomePage;
