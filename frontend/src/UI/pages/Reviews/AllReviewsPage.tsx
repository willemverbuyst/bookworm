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
import { PageTitle } from "../../components/Text";
import { useGetReviews } from "../../hooks";

function AllReviewsPage() {
  const { isLoading } = useAppState().app;
  useGetReviews();
  const data = useAppState().review.overview || [];
  const dataforDisplay = Object.entries(data).sort(
    ([k1], [k2]) => Number(k2) - Number(k1)
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Reviews" />
        {dataforDisplay?.length ? (
          <Flex flexDirection="row" alignItems="center">
            {dataforDisplay.map(([k, v]) => (
              <Flex flexDirection="column" alignItems="center">
                <Box>
                  {[...Array(Number(k)).keys()].map((i) => (
                    <StarIcon key={i} color="teal.600" />
                  ))}
                  {[...Array(5 - Number(k)).keys()].map((i) => (
                    <StarIcon key={i} color="gray.300" />
                  ))}
                </Box>

                {v.map((d) => (
                  <Card
                    key={JSON.stringify(d)}
                    width={300}
                    height={300}
                    my={4}
                    mx={6}
                  >
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
            ))}
          </Flex>
        ) : (
          <p>no reviews</p>
        )}
      </Flex>
    </>
  );
}

export default AllReviewsPage;
