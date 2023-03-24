import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";

function HomePage() {
  const { user } = useAppState();

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Home" />
        <Card>
          <CardHeader>
            <Heading size="md">User details</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <HStack>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    first name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user?.first_name}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    last name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user?.last_name}
                  </Text>
                </Box>
              </HStack>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  birth date
                </Heading>
                <Text pt="2" fontSize="sm">
                  {user?.birth_date}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  email
                </Heading>
                <Text pt="2" fontSize="sm">
                  {user?.email}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  phone number
                </Heading>
                <Text pt="2" fontSize="sm">
                  {user?.phone}
                </Text>
              </Box>
              <HStack>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    address
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user?.address}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    city
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user?.city}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    country
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user?.country}
                  </Text>
                </Box>
              </HStack>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  library
                </Heading>
                <Text pt="2" fontSize="sm">
                  {user?.library_name}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}

export default HomePage;
