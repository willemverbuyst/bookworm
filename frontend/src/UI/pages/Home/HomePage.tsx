import { Container } from "@chakra-ui/react";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <Container centerContent>
        <PageTitle title="Home" />
      </Container>
    </>
  );
}

export default HomePage;
