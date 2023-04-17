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
import { LibraryDetails } from "../../../business/models";

interface Props {
  library: LibraryDetails;
}

export function LibraryDetails({ library }: Props) {
  return (
    <Card width={400}>
      <CardHeader>
        <Heading size="md">{library.library}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              phone
            </Heading>
            <Text pt="2" fontSize="sm">
              {library?.phone}
            </Text>
          </Box>

          <HStack>
            <Box textAlign="right">
              <Heading size="xs" textTransform="uppercase">
                address
              </Heading>
              <Text pt="2" fontSize="sm">
                {library?.address}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                postal code
              </Heading>
              <Text pt="2" fontSize="sm">
                {library?.postalCode}
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box textAlign="right">
              <Heading size="xs" textTransform="uppercase">
                city
              </Heading>
              <Text pt="2" fontSize="sm">
                {library?.city}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                country
              </Heading>
              <Text pt="2" fontSize="sm">
                {library?.country}
              </Text>
            </Box>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}
