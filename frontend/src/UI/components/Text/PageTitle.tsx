import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return (
    <Box p={10}>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
    </Box>
  );
}
