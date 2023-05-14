import { Box, FormControl, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";

export function BooksTable() {
  const {
    getAllApi,
    overview,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().book;
  const { search } = useActions().book;
  const { total } = getAllApi || {};

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
          <TableOverview state={stateSectionsWithTable.book} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.book} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
