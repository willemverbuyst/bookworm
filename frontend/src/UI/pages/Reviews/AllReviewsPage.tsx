import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";
import { useGetReviews } from "../../hooks/useGetReviews";

function AllReviewsPage() {
  const { isLoading } = useAppState().app;
  useGetReviews();
  const data = useAppState().review.overview || [];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="All Reviews" />
        {data?.length ? (
          <Flex flexDirection="row" alignItems="center">
            <Flex flexDirection="column" alignItems="center">
              <Box>
                {[...Array(5).keys()].map((i) => (
                  <StarIcon key={i} color="teal.600" />
                ))}
              </Box>
              {data.map((d) => (
                <Card width={300} my={4} mx={6}>
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
              <Box>
                {[...Array(4).keys()].map((i) => (
                  <StarIcon key={i} color="teal.600" />
                ))}
                <StarIcon color="gray.300" />
              </Box>
              {data.map((d) => (
                <Card width={300} my={4} mx={6}>
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
              <Box>
                {[...Array(3).keys()].map((i) => (
                  <StarIcon key={i} color="teal.600" />
                ))}
                {[...Array(2).keys()].map((i) => (
                  <StarIcon key={i} color="gray.300" />
                ))}
              </Box>
              {data.map((d) => (
                <Card width={300} my={4} mx={6}>
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
              <Box>
                {[...Array(2).keys()].map((i) => (
                  <StarIcon key={i} color="teal.600" />
                ))}
                {[...Array(3).keys()].map((i) => (
                  <StarIcon key={i} color="gray.300" />
                ))}
              </Box>
              {data.map((d) => (
                <Card width={300} my={4} mx={6}>
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
              <Box>
                {[...Array(1).keys()].map((i) => (
                  <StarIcon key={i} color="teal.600" />
                ))}
                {[...Array(4).keys()].map((i) => (
                  <StarIcon key={i} color="gray.300" />
                ))}
              </Box>
              {data.map((d) => (
                <Card width={300} my={4} mx={6}>
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
        ) : (
          <p>no reviews</p>
        )}
      </Flex>
    </>
  );
}

export default AllReviewsPage;
