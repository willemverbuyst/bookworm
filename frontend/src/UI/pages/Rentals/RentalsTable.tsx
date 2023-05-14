import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { RentalsFilter } from "./RentalsFilter";

export function RentalsTable() {
  return (
    <Box>
      <RentalsFilter />
      <Search state={stateSectionsWithTable.rental} />
      <TableOverview state={stateSectionsWithTable.rental} pagination />
    </Box>
  );
}
