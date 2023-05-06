import { ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, useDisclosure } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { SimpleSidebar } from "../../components/Navigation";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import { LibraryDetails } from "./LibraryDetails";

function ShowDetailsButton({ id }: { id: string }) {
  const { getLibraryById } = useActions().library;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUser = async (i: string) => {
    await getLibraryById({ id: i });
    onOpen();
  };

  return (
    <>
      <LibraryDetails isOpen={isOpen} onClose={onClose} />
      <IconButton
        data-tooltip-id="bookworm-tooltip"
        data-tooltip-content="Show details"
        aria-label="Show details"
        onClick={() => getUser(id)}
        icon={<ViewIcon />}
        mx={1}
      />
    </>
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
              actionButtons={[ShowDetailsButton]}
            />
          </Flex>
        </Box>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </SimpleSidebar>
  );
}
