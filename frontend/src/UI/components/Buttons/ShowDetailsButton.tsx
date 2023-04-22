import { ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  id: string;
  action: (id: string) => void;
}

export function ShowDetailsButton({ id, action }: Props) {
  return (
    <IconButton
      data-tooltip-id="bookworm-tooltip"
      data-tooltip-content="show details"
      aria-label="show details"
      onClick={action ? () => action(id) : () => console.log(id)}
      icon={<ViewIcon />}
    />
  );
}
