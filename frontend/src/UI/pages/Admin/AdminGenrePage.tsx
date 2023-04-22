import { AddIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  useId,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesGenre,
  FormFieldsGenre,
  validationSchemaGenre,
} from "./helpers";
import SimpleSidebar from "./SideMenu";

export function AdminGenrePage() {
  const id = useId();
  const [showForm, setShowForm] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFieldsGenre>({
    defaultValues: defaultValuesGenre,
    resolver: zodResolver(validationSchemaGenre),
  });
  const { isLoading } = useAppState().app;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys },
    },
  } = useAppState().genre;
  const { search } = useActions().genre;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  const onSubmit: SubmitHandler<FormFieldsGenre> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <SimpleSidebar>
      <PageTitle title="Genre" />
      {overview?.length ? (
        <Box style={{ backgroundColor: "#fff" }} p={5}>
          <Flex direction="column">
            <Input onChange={searchInTable} placeholder="search" />
            <TableOverview
              rows={overview.filter((a) =>
                genericSearch(a, searchKeys, queryString, false)
              )}
              columns={columns}
              action={() => console.log("testing genre button")}
              icon={<EditIcon />}
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
                  name="genre"
                  control={control}
                  label="name of genre"
                  error={errors.genre}
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
