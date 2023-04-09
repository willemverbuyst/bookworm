import { Box, Input, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Author } from "../../../business/models/Author";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

function AuthorsTable() {
  const { isLoading } = useAppState().app;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const data = useAppState().author.overview;
  const total = useAppState().author.getAllApi?.total;
  const { getAuthors, search } = useActions().author;
  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    search({ str: e.target.value });
  };

  useEffect(() => {
    if (showAll && total) {
      getAuthors({ limit: total, page: 1 });
      search({ str: "" });
    } else {
      getAuthors({ limit, page });
      search({ str: "" });
    }
  }, [page, limit, showAll]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Input onChange={searchInTable} placeholder="search" />
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of authors"
          />
          {!searchQuery && (
            <Pagination
              total={total}
              limit={limit}
              page={page}
              showAll={showAll}
              updatePage={setPage}
              updateLimit={setLimit}
              updateShowAll={setShowAll}
            />
          )}
        </>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
