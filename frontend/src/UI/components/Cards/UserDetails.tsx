import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { User } from "../../../business/models";

interface Props {
  user: User;
}

function UserDetails({ user }: Props) {
  return (
    <Card width={400}>
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
            <Box textAlign="right">
              <Heading size="xs" textTransform="uppercase">
                last name
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.last_name}
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                birth date
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.birth_date}
              </Text>
            </Box>
            <Spacer />
            <Box textAlign="right">
              <Heading size="xs" textTransform="uppercase">
                place of birth
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.place_of_birth}
              </Text>
            </Box>
          </HStack>
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
          <Box>
            <Heading size="xs" textTransform="uppercase">
              address
            </Heading>
            <Text pt="2" fontSize="sm">
              {user?.address}
            </Text>
          </Box>
          <HStack>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                city
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.city}
              </Text>
            </Box>
            <Spacer />
            <Box textAlign="right">
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
  );
}

export default UserDetails;
