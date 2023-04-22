import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

export function AdminGenrePage() {
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

  if (isLoading) {
    return <Spinner />;
  }

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
            />
          </Flex>
          <IconButton
            mt={5}
            colorScheme="teal"
            aria-label="Add new"
            icon={<AddIcon />}
          />
        </Box>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </SimpleSidebar>
  );
}
