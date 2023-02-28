import { FormLabel } from "@chakra-ui/react";

type Props = {
  text: string;
  isRequired: boolean;
};

export default function Label({ text, isRequired }: Props) {
  return (
    <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
      {isRequired ? `${text}*` : text}
    </FormLabel>
  );
}
