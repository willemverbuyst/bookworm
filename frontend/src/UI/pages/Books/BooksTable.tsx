import { Box, Spinner } from "@chakra-ui/react";
import { Book } from "../../../business/models/Book";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetBooks } from "../../hooks/useGetBooks";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import FilterAndSort from "./FilterAndSort";

function BooksTable() {
  useGetGenres();
  useGetLanguages();
  useGetBooks();
  const { isLoading } = useAppState().app;
  const { overview, getAllApi } = useAppState().book;
  const { total } = getAllApi || {};

  const columns: Array<{ field: keyof Book }> = [
    { field: "title" },
    { field: "author" },
    { field: "year_published" },
    { field: "genre" },
    { field: "language" },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <FilterAndSort />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview}
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
