import { ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { SimpleSidebar } from "../../components/Navigation";
import { Search, TableOverview } from "../../components/Table";
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
        variant="unstyled"
      />
    </>
  );
}

export function AdminLibraryPage() {
  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().library;

  return (
    <SimpleSidebar>
      <PageTitle title="Library" />
      {overview?.length ? (
        <Box style={{ backgroundColor: "#fff" }} p={5}>
          <Flex direction="column">
            <Search state={stateSectionsWithTable.library} />
            <TableOverview
              state={stateSectionsWithTable.library}
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
