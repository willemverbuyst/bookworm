import { FormLabel } from "@chakra-ui/react";

type Props = {
  text: string;
};

export default function Label({ text }: Props) {
  return (
    <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
      {text}
    </FormLabel>
  );
}
