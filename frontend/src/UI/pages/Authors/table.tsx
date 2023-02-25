import { Box } from "@chakra-ui/react";
import { Author } from "../../../business/models/Author";
import { useAppState } from "../../../business/overmind";
import TableForOverview from "../../components/Table";

export default function TableWithAllAuthors() {
  const data = useAppState().allAuthors;

  const columns: Array<{ field: keyof Author }> = [
    { field: "name" },
    { field: "books_written" },
  ];

  return (
    <Box>
      {data?.length ? (
        <TableForOverview
          rows={data}
          columns={columns}
          title="overview of authors"
        />
      ) : (
        <p>No Authors</p>
      )}
    </Box>
  );
}
