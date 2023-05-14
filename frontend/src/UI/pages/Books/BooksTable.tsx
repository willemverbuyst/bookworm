import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { BooksFilter } from "./BooksFilter";
import { BooksSearch } from "./BooksSearch";

export function BooksTable() {
  return (
    <Box>
      <BooksFilter />
      <BooksSearch />
      <TableOverview state={stateSectionsWithTable.book} pagination />
    </Box>
  );
}
