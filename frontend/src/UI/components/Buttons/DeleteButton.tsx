import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  id: string;
  nameOfItem: string;
  deleteValue: (payload: { id: string }) => Promise<Promise<void>>;
};

export function DeleteButton({ id, nameOfItem, deleteValue }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="left"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <IconButton
          data-tooltip-id="bookworm-tooltip"
          data-tooltip-content="Delete genre"
          aria-label="Delete genre"
          icon={<DeleteIcon />}
          mx={1}
          variant="unstyled"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader
          display="flex"
          justifyContent="space-between"
          fontWeight="semibold"
        >
          Confirmation
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody display="flex" justifyContent="flex-start">
          {`Are you sure you want to delete ${nameOfItem}?`}
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => deleteValue({ id })} colorScheme="pink">
              Apply
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
