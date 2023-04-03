import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Rental } from "../../../business/models/Rental";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetGenres } from "../../hooks/useGetGenres";
import { useGetLanguages } from "../../hooks/useGetLanguages";
import Filter from "./Filter";

function RentalsTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [filter, setFilter] = useState("not_returned");
  const data = useAppState().rentalsOverview;
  const total = useAppState().rentalsApi?.total_number_of_rentals;
  const { getRentals } = useActions();
  useGetGenres();
  useGetLanguages();

  useEffect(() => {
    getRentals({ limit, page, filter });
  }, [filter, limit, page]);

  const columns: Array<{ field: keyof Rental }> = [
    { field: "title" },
    { field: "author" },
    { field: "rental_date" },
    { field: "return_date" },
  ];

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
            updatePage={setPage}
            updateLimit={setLimit}
          />
        </>
      ) : (
        <p>No rentals</p>
      )}
    </Box>
  );
}

export default RentalsTable;
