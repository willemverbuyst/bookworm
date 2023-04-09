import { Box, Input, Spinner } from "@chakra-ui/react";
import { Author } from "../../../business/models/Author";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

function AuthorsTable() {
  const { isLoading } = useAppState().app;
  const { ui, overview, getAllApi } = useAppState().author;
  const { limit, page, queryString, showAll } = ui.table;
  const { setLimit, setPage, setShowAll, getAuthors, search } =
    useActions().author;

  const { total } = getAllApi || {};

  if (!getAllApi) getAuthors({ limit, page });

  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ str: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Input onChange={searchInTable} placeholder="search" />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title="overview of authors"
          />
          {!queryString && (
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
