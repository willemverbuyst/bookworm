import { Box } from "@chakra-ui/react";
import { Author } from "../../../business/models/Author";
import { useAppState } from "../../../business/overmind";
import TableOverview from "../../components/Table/TableOverView";
import Pagination from "./Pagination";

function AuthorsTable() {
  const data = useAppState().authorOverview;

  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  return (
    <Box>
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of authors"
          />
          <Pagination total={121} limit={10} />
        </>
      ) : (
        <p>No Authors</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
