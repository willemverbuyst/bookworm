import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
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
import { DeleteButton } from "../../components/Buttons/DeleteButton";
import { EditButton } from "../../components/Buttons/EditButton";
import { ControlledTextInput } from "../../components/Controllers";
import { SimpleSidebar } from "../../components/Navigation";
import { Search, TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesGenres,
  FormFieldsGenres,
  validationSchemaGenres,
} from "./helpers";

function EditBtn({ id }: { id: string }) {
  const { getNameOfGenre, updateGenre } = useActions().genre;
  const nameOfGenre = getNameOfGenre({ id });

  return (
    <EditButton
      id={id}
      nameOfItem={nameOfGenre || ""}
      updateValue={updateGenre}
    />
  );
}

function DeleteBtn({ id }: { id: string }) {
  const { getNameOfGenre, deleteGenre } = useActions().genre;
  const nameOfGenre = getNameOfGenre({ id });

  return (
    <DeleteButton
      id={id}
      nameOfItem={nameOfGenre || ""}
      deleteValue={deleteGenre}
    />
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
              actionButtons={[EditBtn, DeleteBtn]}
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
