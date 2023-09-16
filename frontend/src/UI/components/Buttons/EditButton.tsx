import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function EditForm({
  id,
  onCancel,
  onClose,
  formLabel,
  initialValue,
  updateValue,
}: {
  id: string;
  onCancel: () => void;
  onClose: () => void;
  formLabel: string;
  initialValue: string;
  updateValue: (payload: {
    id: string;
    name: string;
  }) => Promise<Promise<void>>;
}) {
  const [value, setValue] = useState(initialValue);

  const submit = () => {
    updateValue({ id, name: value });
    onClose();
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="inputField">{formLabel}</FormLabel>
        <Input
          id="inputField"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={submit}>Save</Button>
      </ButtonGroup>
    </Stack>
  );
}

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
