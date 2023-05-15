import { ViewIcon } from "@chakra-ui/icons";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { stateSectionsWithTable, useActions } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { BookwormsDetails } from "./BookwormsDetails";
import { BookwormsFilter } from "./BookwormsFilter";

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
        variant="unstyled"
      />
    </>
  );
}

export function BookwormsTable() {
  const state = stateSectionsWithTable.bookworm;

  return (
    <Box>
      <BookwormsFilter />
      <Search state={state} />
      <TableOverview actionButtons={[ShowDetailsButton]} state={state} />
    </Box>
  );
}
