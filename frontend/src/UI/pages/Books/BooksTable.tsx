import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { BooksFilter } from "./BooksFilter";

export function BooksTable() {
  return (
    <Box>
      <BooksFilter />
      <Search state={stateSectionsWithTable.book} />
      <TableOverview state={stateSectionsWithTable.book} pagination />
    </Box>
  );
}
