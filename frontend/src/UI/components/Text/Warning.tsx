import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

function Warning({ text }: Props) {
  return (
    <Box p={10}>
      <Text size="lg" color="orange.500">
        {text}
      </Text>
    </Box>
  );
}

export default Warning;
