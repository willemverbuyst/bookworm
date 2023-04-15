import { FormErrorMessage } from "@chakra-ui/react";

type Props = {
  text: string;
};

export function ErrorMessage({ text }: Props) {
  return (
    <FormErrorMessage style={{ color: "#e53e3e" }}>{text}</FormErrorMessage>
  );
}
