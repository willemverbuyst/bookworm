import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

function EditButton({ id }: { id: string }) {
  return (
    <IconButton
      data-tooltip-id="bookworm-tooltip"
      data-tooltip-content="Edit details"
      aria-label="Edit details"
      onClick={() => console.log("test", id)}
      icon={<EditIcon />}
    />
  );
}

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
              isLoading={isLoading}
              actionButton={EditButton}
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
