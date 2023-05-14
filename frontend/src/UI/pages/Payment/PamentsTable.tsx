import { Box, FormControl, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";

export function PaymentsTable() {
  const { isLoading } = useAppState().payment;
  const {
    overview,
    getAllApi,
    ui: {
      table: { columns, noDataMessage, queryString, title, sort },
    },
  } = useAppState().payment;
  const { total } = getAllApi || {};
  const { search, setSort } = useActions().payment;

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

      {overview ? (
        <>
          <TableOverview state={stateSectionsWithTable.payment} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.payment} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
