import { Box, Spinner } from "@chakra-ui/react";
import { Rental } from "../../../business/models/Rental";
import { stateSections, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetRentals } from "../../hooks/useGetRentals";
import Filter from "./Filter";

function RentalsTable() {
  useGetRentals();
  const { isLoading } = useAppState().app;
  const { overview } = useAppState().rental;
  const total = useAppState().rental.getAllApi?.total;

  const columns: Array<{ field: keyof Rental }> = [
    { field: "title" },
    { field: "author" },
    { field: "rental_date" },
    { field: "return_date" },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  const stateSection = stateSections.rental;

  return (
    <Box>
      <Filter />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title="overview of rentals"
          />
          <Pagination total={total} state={stateSection} />
        </>
      ) : (
        <p>no rentals</p>
      )}
    </Box>
  );
}

export default RentalsTable;
