import { Box } from "@chakra-ui/react";
import TableForOverview from "../../components/Table";
import { useAppState } from "../../../business/overmind";
import { Book } from "../../../business/models/Book";

export default function TableWithAllBooks() {
  const data = useAppState().allBooks;

  const columns: Array<{ field: keyof Book }> = [
    { field: "title" },
    { field: "language" },
    { field: "author" },
    { field: "year" },
    { field: "read" },
  ];

  return (
    <Box>
      {data?.length ? (
        <TableForOverview
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
