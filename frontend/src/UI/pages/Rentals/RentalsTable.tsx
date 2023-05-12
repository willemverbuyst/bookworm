import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";

export function RentalsTable() {
  const { isLoading } = useAppState().rental;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, sort, title },
    },
  } = useAppState().rental;
  const { total } = getAllApi || {};
  const { search, setSort } = useActions().rental;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Filter />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title={title}
            isLoading={isLoading}
            sortFunction={setSort}
            sortProperty={sort}
          />
          <Pagination total={total} state={stateSectionsWithTable.rental} />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
