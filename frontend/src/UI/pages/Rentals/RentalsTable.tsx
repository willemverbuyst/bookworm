import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { RentalsFilter } from "./RentalsFilter";

export function RentalsTable() {
  const state = stateSectionsWithTable.rental;

  return (
    <Box>
      <RentalsFilter />
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
