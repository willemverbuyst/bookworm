import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
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
      table: { columns, noDataMessage, queryString, sort },
    },
  } = useAppState().library;
  const { search, setSort } = useActions().library;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <SimpleSidebar>
      <PageTitle title="Library" />
      {overview?.length ? (
        <Box style={{ backgroundColor: "#fff" }} p={5}>
          <Flex direction="column">
            <FormControl>
              <Input
                id="search"
                placeholder="search"
                value={queryString}
                onChange={(e) => searchInTable(e)}
                mt={5}
              />
            </FormControl>
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
