import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Book } from "../../../business/models/Book";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import { useGetAllGenres } from "../../hooks/useGetAllGenrs";
import { useGetAllLanguages } from "../../hooks/useGetAllLanguages";
import FilterAndSort from "./FilterAndSort";

function BooksTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [genre, setGenre] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const { getAllBooks } = useActions();
  const total = useAppState().booksApi?.total_number_of_books;
  useGetAllBooks();
  useGetAllGenres();
  useGetAllLanguages();

  const data = useAppState().bookOverview;

  useEffect(() => {
    getAllBooks({ genre, language, limit, page });
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
      <FilterAndSort updateGenre={setGenre} updateLanguage={setLanguage} />
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of books"
          />
          <Pagination
            total={total}
            limit={limit}
            updatePage={setPage}
            updateLimit={setLimit}
          />
        </>
      ) : (
        <p>No books</p>
      )}
    </Box>
  );
}

export default BooksTable;
