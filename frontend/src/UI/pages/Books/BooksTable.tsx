import { Box, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions/genericSearch";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetBooks } from "../../hooks/useGetBooks";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import Filter from "./Filter";

function BooksTable() {
  useGetGenres();
  useGetLanguages();
  useGetBooks();
  const { isLoading } = useAppState().app;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, queryString },
    },
  } = useAppState().book;
  const { total } = getAllApi || {};
  const { setQueryString } = useActions().book;

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
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(a, ["title", "author"], queryString, false)
            )}
            columns={columns}
            title="overview of books"
          />
          <Pagination total={total} state={stateSectionsWithTable.book} />
        </>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BooksTable;
