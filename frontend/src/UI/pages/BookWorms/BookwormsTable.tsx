import { Box, Input, Spinner, useDisclosure } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions/genericSearch";
import { Bookworm } from "../../../business/models/Bookworm";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetBooksworms } from "../../hooks/useGetBookworms";
import BookwormsDetails from "./BookwormsDetails";
import Filter from "./Filter";

function BookwormsTable() {
  useGetBooksworms();
  const { isLoading } = useAppState().app;
  const {
    getAllApi,
    overview,
    ui: {
      table: { queryString },
    },
  } = useAppState().bookworm;
  const { total } = getAllApi || {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getBookWormById, setQueryString } = useActions().bookworm;

  const columns: Array<{ field: keyof Bookworm }> = [
    { field: "first_name" },
    { field: "last_name" },
    { field: "email" },
    { field: "phone" },
    { field: "library_name" },
  ];

  const getUser = async (id: string) => {
    await getBookWormById({ id });
    onOpen();
  };

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString({ queryString: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Filter />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview?.length ? (
        <>
          <BookwormsDetails isOpen={isOpen} onClose={onClose} />
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(
                a,
                ["first_name", "last_name", "email"],
                queryString,
                false
              )
            )}
            columns={columns}
            title="overview of bookworms"
            action={getUser}
          />
          <Pagination total={total} state={stateSectionsWithTable.bookworm} />
        </>
      ) : (
        <p>no bookworms</p>
      )}
    </Box>
  );
}

export default BookwormsTable;
