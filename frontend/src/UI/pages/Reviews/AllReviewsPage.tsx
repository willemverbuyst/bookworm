import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";
import { useGetReviews } from "../../hooks/useGetReviews";

function AllReviewsPage() {
  useGetReviews();
  const data = useAppState().reviewsOverview || [];
  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="All Reviews" />
        <Flex flexDirection="row" alignItems="center">
          <Flex flexDirection="column" alignItems="center">
            <Text>Rating: ***</Text>
            {data.map((d) => (
              <Card width={300} m={2}>
                <CardHeader>
                  <Heading size="md">{d.book_title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text noOfLines={3}>{d.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button>Read here</Button>
                </CardFooter>
              </Card>
            ))}
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Text>Rating: **</Text>
            {data.map((d) => (
              <Card width={300} m={2}>
                <CardHeader>
                  <Heading size="md">{d.book_title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text noOfLines={3}>{d.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button>Read here</Button>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default AllReviewsPage;
