import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Author } from "../../../business/models/Author";
import { useActions, useAppState } from "../../../business/overmind";
import TableOverview from "../../components/Table/TableOverView";
import Pagination from "./Pagination";

function AuthorsTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const data = useAppState().authorOverview;
  const total = useAppState().authorsApi?.total_number_of_authors;
  const { getAllAuthors } = useActions();
  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  useEffect(() => {
    getAllAuthors({ limit, page });
  }, [page, limit]);

  return (
    <Box>
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of authors"
          />
          <Pagination
            total={total}
            limit={limit}
            updatePage={setPage}
            updateLimit={setLimit}
          />
        </>
      ) : (
        <p>No Authors</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
