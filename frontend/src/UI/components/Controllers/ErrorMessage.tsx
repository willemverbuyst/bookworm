import { FormErrorMessage } from "@chakra-ui/react";

type Props = {
  text: string;
};

export default function ErrorMessage({ text }: Props) {
  return <FormErrorMessage>{text}</FormErrorMessage>;
}
