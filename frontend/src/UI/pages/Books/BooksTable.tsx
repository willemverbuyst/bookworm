import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { BooksFilter } from "./BooksFilter";
import { BooksSearch } from "./BooksSearch";

export function BooksTable() {
  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().book;

  return (
    <Box>
      <BooksFilter />
      <BooksSearch />

      {overview ? (
        <TableOverview state={stateSectionsWithTable.book} pagination />
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
