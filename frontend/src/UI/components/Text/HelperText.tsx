import { FormHelperText } from "@chakra-ui/react";

type Props = {
  text: string;
};

export function HelperText({ text }: Props) {
  return (
    <FormHelperText fontSize="xs" color="gray.400" mb={2}>
      {text}
    </FormHelperText>
  );
}
