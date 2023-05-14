import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  useId,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers";
import { SimpleSidebar } from "../../components/Navigation";
import { Search, TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesGenres,
  FormFieldsGenres,
  validationSchemaGenres,
} from "./helpers";

function Form({
  id,
  onCancel,
  onClose,
}: {
  id: string;
  onCancel: () => void;
  onClose: () => void;
}) {
  const genres = useAppState().genre.overview || [];
  const { updateGenre } = useActions().genre;
  const nameOfGenre = genres.find((g) => g.id === id)?.["name of genre"] || "";
  const [genre, setGenre] = useState(nameOfGenre);

  const submit = () => {
    updateGenre({ id, name: genre });
    onClose();
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="genre">Genre</FormLabel>
        <Input
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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

function EditButton({ id }: { id: string }) {
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
        <Form onCancel={onClose} id={id} onClose={onClose} />
      </PopoverContent>
    </Popover>
  );
}

function DeleteButton({ id }: { id: string }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { deleteGenre } = useActions().genre;
  const genres = useAppState().genre.overview || [];
  const nameOfGenre = genres.find((g) => g.id === id)?.["name of genre"];

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
          {`Are you sure you want to delete ${nameOfGenre}?`}
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => deleteGenre({ id })} colorScheme="pink">
              Apply
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export function AdminGenrePage() {
  const id = useId();
  const [showForm, setShowForm] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFieldsGenres>({
    defaultValues: defaultValuesGenres,
    resolver: zodResolver(validationSchemaGenres),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "genres",
  });

  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().genre;

  const { postGenres } = useActions().genre;

  const onSubmit: SubmitHandler<FormFieldsGenres> = async (data) => {
    await postGenres(data);
    reset();
    setShowForm(false);
  };

  return (
    <SimpleSidebar>
      <PageTitle title="Genre" />
      {overview ? (
        <Box style={{ backgroundColor: "#fff" }} p={5}>
          <Flex direction="column">
            <Search state={stateSectionsWithTable.genre} />
            <TableOverview
              state={stateSectionsWithTable.genre}
              actionButtons={[EditButton, DeleteButton]}
              pagination
            />
          </Flex>
          <Flex mt={10}>
            {showForm ? (
              <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)} mt={5}>
                <Text fontSize="2xl">Add genre(s)</Text>
                {fields.map((item, index) => (
                  <HStack key={item.id} alignItems="flex-end" mt={5}>
                    <ControlledTextInput
                      name={`genres.${index}.name`}
                      control={control}
                      label="name of genre"
                      error={(errors.genres || [])[index]?.name}
                      required
                    />
                    {index > 0 && (
                      <Button
                        type="button"
                        onClick={() => remove(index)}
                        colorScheme="pink"
                      >
                        Delete
                      </Button>
                    )}
                  </HStack>
                ))}
                <HStack mt={10}>
                  <Button
                    colorScheme="teal"
                    aria-label="Add new"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" colorScheme="teal">
                    Submit
                  </Button>
                  <IconButton
                    colorScheme="telegram"
                    aria-label="Add new"
                    icon={<AddIcon />}
                    onClick={() => append({ name: "" })}
                  />
                </HStack>
              </Box>
            ) : (
              <Button
                mt={5}
                colorScheme="teal"
                aria-label="Add new"
                onClick={() => setShowForm((prev) => !prev)}
              >
                Add Genre
              </Button>
            )}
          </Flex>
        </Box>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </SimpleSidebar>
  );
}
