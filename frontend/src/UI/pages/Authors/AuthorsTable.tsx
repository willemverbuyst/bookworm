import { Box } from "@chakra-ui/react";
import { Author } from "../../../business/models/Author";
import { useAppState } from "../../../business/overmind";
import TableOverview from "../../components/Table/TableOverView";

function AuthorsTable() {
  const data = useAppState().allAuthors;

  const columns: Array<{ field: keyof Author }> = [
    { field: "name" },
    { field: "books_written" },
  ];

  return (
    <Box>
      {data?.length ? (
        <TableOverview
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

export default AuthorsTable;
