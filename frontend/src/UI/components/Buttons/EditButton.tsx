import { EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { EditForm } from "../Form/EditForm";

type Props = {
  id: string;
  nameOfItem: string;
  updateValue: (payload: {
    id: string;
    name: string;
  }) => Promise<Promise<void>>;
};

export function EditButton({ id, nameOfItem, updateValue }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
      placement="left"
    >
      <PopoverTrigger>
        <IconButton
          data-tooltip-id="bookworm-tooltip"
          data-tooltip-content="Edit details"
          aria-label="Edit details"
          icon={<EditIcon />}
          mx={1}
          variant="unstyled"
        />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <EditForm
          onCancel={onClose}
          id={id}
          onClose={onClose}
          formLabel="Genre"
          initialValue={nameOfItem || ""}
          updateValue={updateValue}
        />
      </PopoverContent>
    </Popover>
  );
}
