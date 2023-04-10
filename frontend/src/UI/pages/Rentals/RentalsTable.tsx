import { Box, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions/genericSearch";
import { Rental } from "../../../business/models/Rental";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetRentals } from "../../hooks/useGetRentals";
import Filter from "./Filter";

function RentalsTable() {
  useGetRentals();
  const { isLoading } = useAppState().app;
  const {
    getAllApi,
    overview,
    ui: {
      table: { queryString },
    },
  } = useAppState().rental;
  const { total } = getAllApi || {};
  const { setQueryString } = useActions().rental;

  const columns: Array<{ field: keyof Rental }> = [
    { field: "title" },
    { field: "author" },
    { field: "rental_date" },
    { field: "return_date" },
  ];

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString({ queryString: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Filter />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview?.length ? (
        <>
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(a, ["title", "author"], queryString, false)
            )}
            columns={columns}
            title="overview of rentals"
          />
          <Pagination total={total} state={stateSectionsWithTable.rental} />
        </>
      ) : (
        <p>no rentals</p>
      )}
    </Box>
  );
}

export default RentalsTable;
