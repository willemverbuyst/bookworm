import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { BooksFilter } from "./BooksFilter";

export function BooksTable() {
  const state = stateSectionsWithTable.book;

  return (
    <Box>
      <BooksFilter />
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
