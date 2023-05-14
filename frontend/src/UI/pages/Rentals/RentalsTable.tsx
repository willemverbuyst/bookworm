import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { RentalsFilter } from "./RentalsFilter";
import { RentalsSearch } from "./RentalsSearch";

export function RentalsTable() {
  return (
    <Box>
      <RentalsFilter />
      <RentalsSearch />
      <TableOverview state={stateSectionsWithTable.rental} pagination />
    </Box>
  );
}
