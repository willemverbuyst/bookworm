import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";

export function BooksTable() {
  const { isLoading } = useAppState().book;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, title, sort },
    },
  } = useAppState().book;
  const { total } = getAllApi || {};
  const { search, setSort } = useActions().book;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Filter />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title={title}
            isLoading={isLoading}
            sortFunction={setSort}
            sortProperty={sort}
          />
          <Pagination total={total} state={stateSectionsWithTable.book} />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
