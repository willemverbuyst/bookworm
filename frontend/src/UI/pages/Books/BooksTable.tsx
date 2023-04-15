import { Box, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetBooks, useGetGenres, useGetLanguages } from "../../hooks";
import Filter from "./Filter";

function BooksTable() {
  useGetGenres();
  useGetLanguages();
  useGetBooks();
  const { isLoading } = useAppState().app;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys, title },
    },
  } = useAppState().book;
  const { total } = getAllApi || {};
  const { setQueryString } = useActions().book;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString({ queryString: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Filter />
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
          <Pagination total={total} state={stateSectionsWithTable.book} />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}

export default BooksTable;
