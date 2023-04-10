import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Book } from "../../../business/models/Book";
import {
  stateSections,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import FilterAndSort from "./FilterAndSort";

function BooksTable() {
  useGetGenres();
  useGetLanguages();
  const { isLoading } = useAppState().app;
  const {
    ui: {
      table: { limit, page },
    },
    overview,
    getAllApi,
  } = useAppState().book;
  const { getBooks } = useActions().book;
  const { total } = getAllApi || {};

  useEffect(() => {
    if (!getAllApi) {
      getBooks({ genre: null, language: null, limit, page });
    }
  }, [getAllApi]);

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
          <Pagination total={total} state={stateSections.book} />
        </>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BooksTable;
