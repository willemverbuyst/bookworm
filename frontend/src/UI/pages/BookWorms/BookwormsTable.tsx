import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
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
import { Pagination, TableOverview } from "../../components/Table";
import { BookwormsDetails } from "./BookwormsDetails";
import { Filter } from "./Filter";

function ShowDetailsButton({ id }: { id: string }) {
  const { getBookworm } = useActions().bookworm;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUser = async (i: string) => {
    await getBookworm({ id: i });
    onOpen();
  };

  return (
    <>
      <BookwormsDetails isOpen={isOpen} onClose={onClose} />
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

export function BookwormsTable() {
  const {
    getAllApi,
    overview,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().bookworm;
  const { total } = getAllApi || {};
  const { search } = useActions().bookworm;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Filter />
      <FormControl>
        <Input
          id="search"
          placeholder="search"
          value={queryString}
          onChange={(e) => searchInTable(e)}
          mt={5}
        />
      </FormControl>
      {overview ? (
        <>
          <TableOverview actionButtons={[ShowDetailsButton]} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.bookworm} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
