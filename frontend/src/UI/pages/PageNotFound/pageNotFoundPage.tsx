import { Container, Text } from "@chakra-ui/react";
import PageTitle from "../../components/Text/PageTitle";

export default function PageNotFoundPage() {
  return (
    <Container centerContent>
      <PageTitle title="404" />
      <Text fontSize="3xl">Oops...page not found</Text>
    </Container>
  );
}
