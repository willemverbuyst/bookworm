import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Rental } from "../../../business/models/Rental";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import Filter from "./Filter";

function RentalsTable() {
  const { isLoading } = useAppState().app;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("not_returned");
  const data = useAppState().rental.overview;
  const total = useAppState().rental.getAllApi?.total;
  const { getRentals } = useActions().rental;
  useGetGenres();
  useGetLanguages();

  useEffect(() => {
    if (showAll && total) {
      getRentals({ limit: total, page: 1, filter });
    } else {
      getRentals({ limit, page, filter });
    }
  }, [filter, limit, page, showAll]);

  const columns: Array<{ field: keyof Rental }> = [
    { field: "title" },
    { field: "author" },
    { field: "rental_date" },
    { field: "return_date" },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data?.length ? (
        <>
          <Filter filter={filter} updateFilter={setFilter} />
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of rentals"
          />
          <Pagination
            total={total}
            limit={limit}
            page={page}
            showAll={showAll}
            updatePage={setPage}
            updateLimit={setLimit}
            updateShowAll={setShowAll}
          />
        </>
      ) : (
        <p>no rentals</p>
      )}
    </Box>
  );
}

export default RentalsTable;
