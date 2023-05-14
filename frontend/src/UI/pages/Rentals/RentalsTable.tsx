import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { RentalsFilter } from "./RentalsFilter";
import { RentalsSearch } from "./RentalsSearch";

export function RentalsTable() {
  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().rental;

  return (
    <Box>
      <RentalsFilter />
      <RentalsSearch />

      {overview?.length ? (
        <TableOverview state={stateSectionsWithTable.rental} pagination />
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
