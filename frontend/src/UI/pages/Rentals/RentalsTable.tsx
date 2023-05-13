import { Box, FormControl, Input } from "@chakra-ui/react";
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
      table: { columns, noDataMessage, queryString, sort, title },
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
      <FormControl>
        <Input
          id="search"
          placeholder="search"
          value={queryString}
          onChange={(e) => searchInTable(e)}
          mt={5}
        />
      </FormControl>
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
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.rental} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
