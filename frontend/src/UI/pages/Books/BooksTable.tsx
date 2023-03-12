import { Box } from "@chakra-ui/react";
import TableOverview from "../../components/Table/TableOverView";
import { useAppState } from "../../../business/overmind";
import { Book } from "../../../business/models/Book";

function BooksTable() {
  const data = useAppState().allBooks;

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
        <TableOverview
          rows={data}
          columns={columns}
          title="overview of books"
        />
      ) : (
        <p>No books</p>
      )}
    </Box>
  );
}

export default BooksTable;
