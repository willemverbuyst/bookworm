import { Box, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions/genericSearch";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetAuthors } from "../../hooks/useGetAuthors";

function AuthorsTable() {
  useGetAuthors();
  const { isLoading } = useAppState().app;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys, title },
    },
  } = useAppState().author;
  const { setQueryString } = useActions().author;
  const { total } = getAllApi || {};

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString({ queryString: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(a, searchKeys, queryString, false)
            )}
            columns={columns}
            title={title}
          />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.author} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}

export default AuthorsTable;
