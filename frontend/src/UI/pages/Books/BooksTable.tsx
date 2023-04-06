import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Book } from "../../../business/models/Book";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import FilterAndSort from "./FilterAndSort";

function BooksTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [genre, setGenre] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const data = useAppState().bookOverview;
  const total = useAppState().booksApi?.total_number_of_books;
  const { getBooks } = useActions();
  useGetGenres();
  useGetLanguages();

  useEffect(() => {
    getBooks({ genre, language, limit, page });
  }, [genre, language, limit, page]);

  const columns: Array<{ field: keyof Book }> = [
    { field: "title" },
    { field: "author" },
    { field: "year_published" },
    { field: "genre" },
    { field: "language" },
  ];

  return (
    <Box>
      {data?.length ? (
        <>
          <FilterAndSort
            updateGenre={setGenre}
            updateLanguage={setLanguage}
            updatePage={setPage}
          />
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of books"
          />
          <Pagination
            total={total}
            limit={limit}
            page={page}
            updatePage={setPage}
            updateLimit={setLimit}
          />
        </>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BooksTable;
