import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Author } from "../../../business/models/Author";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

function AuthorsTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showAll, setShowAll] = useState(false);
  const data = useAppState().authorOverview;
  const total = useAppState().authorsApi?.total_number_of_authors;
  const { getAuthors } = useActions();
  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  useEffect(() => {
    if (showAll && total) {
      getAuthors({ limit: total, page: 1 });
    } else {
      getAuthors({ limit, page });
    }
  }, [page, limit, showAll]);

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
            page={page}
            showAll={showAll}
            updatePage={setPage}
            updateLimit={setLimit}
            updateShowAll={setShowAll}
          />
        </>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
