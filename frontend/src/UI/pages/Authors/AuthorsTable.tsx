import { Box, Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { genericSearch } from "../../../business/functions/genericSearch";
import { Author } from "../../../business/models/Author";
import {
  stateSections,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

function AuthorsTable() {
  const { isLoading } = useAppState().app;
  const {
    ui: {
      table: { limit, page },
    },
    overview,
    getAllApi,
  } = useAppState().author;
  const { getAuthors } = useActions().author;
  const [queryString, setQueryString] = useState("");
  const { total } = getAllApi || {};

  if (!getAllApi) getAuthors({ limit, page });

  const columns: Array<{ field: keyof Author; isNumeric?: boolean }> = [
    { field: "last_name" },
    { field: "first_name" },
    { field: "books_written", isNumeric: true },
  ];

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(() => e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const stateSection = stateSections.author;

  return (
    <Box>
      <Input onChange={searchInTable} placeholder="search" />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(a, ["last_name", "first_name"], queryString, false)
            )}
            columns={columns}
            title="overview of authors"
          />
          {!queryString && <Pagination total={total} state={stateSection} />}
        </>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
