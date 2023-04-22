import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

export function AdminLibraryPage() {
  const { isLoading } = useAppState().app;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys },
    },
  } = useAppState().library;
  const { search } = useActions().library;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <SimpleSidebar>
      <PageTitle title="Library" />
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
              action={() => console.log("testing library button")}
              ariaLabel="Edit details"
              isLoading={isLoading}
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
