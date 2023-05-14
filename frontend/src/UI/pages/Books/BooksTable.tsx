import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { BooksFilter } from "./BooksFilter";
import { BooksSearch } from "./BooksSearch";

export function BooksTable() {
  const {
    getAllApi,
    overview,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().book;
  const { total } = getAllApi || {};

  return (
    <Box>
      <BooksFilter />
      <BooksSearch />

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
