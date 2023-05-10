import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { FormLabel, IconButton } from "@chakra-ui/react";

type Props = {
  text: string;
  isRequired?: boolean;
  informAction?: () => void;
};

export function Label({ text, isRequired = false, informAction }: Props) {
  return (
    <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
      {isRequired ? `${text}*` : text}
      {informAction && (
        <IconButton
          variant="unstyled"
          aria-label="show details"
          onClick={informAction}
          icon={<QuestionOutlineIcon />}
        />
      )}
    </FormLabel>
  );
}
