import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { RentalsFilter } from "./RentalsFilter";
import { RentalsSearch } from "./RentalsSearch";

export function RentalsTable() {
  const {
    getAllApi,
    overview,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().rental;
  const { total } = getAllApi || {};

  return (
    <Box>
      <RentalsFilter />
      <RentalsSearch />

      {overview?.length ? (
        <>
          <TableOverview state={stateSectionsWithTable.rental} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.rental} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
