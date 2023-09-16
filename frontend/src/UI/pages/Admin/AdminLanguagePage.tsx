import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useId, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { stateSectionsWithTable, useActions } from "../../../business/overmind";
import { DeleteButton } from "../../components/Buttons/DeleteButton";
import { EditButton } from "../../components/Buttons/EditButton";
import { ControlledTextInput } from "../../components/Controllers";
import { SimpleSidebar } from "../../components/Navigation";
import { Search, TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesLanguages,
  FormFieldsLanguages,
  validationSchemaLanguages,
} from "./helpers";

function EditBtn({ id }: { id: string }) {
  const { getNameOfLanguage, updateLanguage } = useActions().language;
  const nameOfLanguage = getNameOfLanguage({ id });

  return (
    <EditButton
      id={id}
      nameOfItem={nameOfLanguage || ""}
      updateValue={updateLanguage}
    />
  );
}

function DeleteBtn({ id }: { id: string }) {
  const { getNameOfLanguage, deleteLanguage } = useActions().language;
  const nameOfLanguage = getNameOfLanguage({ id });

  return (
    <DeleteButton
      id={id}
      nameOfItem={nameOfLanguage || ""}
      deleteValue={deleteLanguage}
    />
  );
}

function AddLanguageForm({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const id = useId();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFieldsLanguages>({
    defaultValues: defaultValuesLanguages,
    resolver: zodResolver(validationSchemaLanguages),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  const { postLanguages } = useActions().language;

  const onSubmit: SubmitHandler<FormFieldsLanguages> = async (data) => {
    await postLanguages(data);
    reset();
    setShowForm(false);
  };

  return (
    <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)} mt={5}>
      <Text fontSize="2xl">Add language(s)</Text>
      {fields.map((item, index) => (
        <HStack key={item.id} alignItems="flex-end" mt={5}>
          <ControlledTextInput
            name={`languages.${index}.nameOfLanguage`}
            control={control}
            label="name of language"
            error={(errors.languages || [])[index]?.nameOfLanguage}
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
          onClick={() => append({ nameOfLanguage: "" })}
        />
      </HStack>
    </Box>
  );
}

export function AdminLanguagePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <SimpleSidebar>
      <PageTitle title="Language" />

      <Box style={{ backgroundColor: "#fff" }} p={5}>
        <Flex direction="column">
          <Search state={stateSectionsWithTable.language} />
          <TableOverview
            state={stateSectionsWithTable.language}
            actionButtons={[EditBtn, DeleteBtn]}
          />
        </Flex>
        <Flex mt={10}>
          {showForm ? (
            <AddLanguageForm setShowForm={setShowForm} />
          ) : (
            <Button
              mt={5}
              colorScheme="teal"
              aria-label="Add new"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Add Language
            </Button>
          )}
        </Flex>
      </Box>
    </SimpleSidebar>
  );
}
