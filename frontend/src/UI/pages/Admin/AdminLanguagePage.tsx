import { AddIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesLanguage,
  FormFieldsLanugage,
  validationSchemaLanguage,
} from "./helpers";
import SimpleSidebar from "./SideMenu";

export function AdminLanguagePage() {
  const id = useId();
  const [showForm, setShowForm] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFieldsLanugage>({
    defaultValues: defaultValuesLanguage,
    resolver: zodResolver(validationSchemaLanguage),
  });
  const { isLoading } = useAppState().app;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys },
    },
  } = useAppState().language;
  const { search } = useActions().language;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  const onSubmit: SubmitHandler<FormFieldsLanugage> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <SimpleSidebar>
      <PageTitle title="Language" />
      {overview?.length ? (
        <Box style={{ backgroundColor: "#fff" }} p={5}>
          <Flex direction="column">
            <Input onChange={searchInTable} placeholder="search" />
            <TableOverview
              rows={overview.filter((a) =>
                genericSearch(a, searchKeys, queryString, false)
              )}
              columns={columns}
              icon={<EditIcon />}
              action={() => console.log("testing language button")}
              ariaLabel="Edit details"
              isLoading={isLoading}
            />
          </Flex>
          <Button
            mt={5}
            colorScheme="teal"
            aria-label="Add new"
            onClick={() => setShowForm((prev) => !prev)}
          >
            {showForm ? "Cancel" : "Add Language"}
          </Button>
          {showForm ? (
            <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)} mt={5}>
              <VStack spacing={6}>
                <ControlledTextInput
                  name="language"
                  control={control}
                  label="name of language"
                  error={errors.language}
                  required
                />
                <HStack>
                  <Button type="submit" colorScheme="teal">
                    Submit
                  </Button>
                  <IconButton
                    mt={5}
                    colorScheme="telegram"
                    aria-label="Add new"
                    icon={<AddIcon />}
                    onClick={() => console.log("action to add another input")}
                  />
                </HStack>
              </VStack>
            </Box>
          ) : null}
        </Box>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </SimpleSidebar>
  );
}
