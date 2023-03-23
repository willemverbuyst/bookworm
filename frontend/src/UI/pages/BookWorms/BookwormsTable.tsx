import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Bookworm } from "../../../business/models/Bookworm";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

function BookwormsTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const data = useAppState().bookwormOverview;
  const total = useAppState().bookwormApi?.total_number_of_bookworms;
  const { getBookworms } = useActions();

  useEffect(() => {
    getBookworms({ limit, page });
  }, [limit, page]);

  const columns: Array<{ field: keyof Bookworm }> = [
    { field: "first_name" },
    { field: "last_name" },
    { field: "birth_date" },
    { field: "email" },
    { field: "phone" },
    { field: "address" },
    { field: "postal_code" },
    { field: "city" },
    { field: "country" },
    { field: "user_is_active" },
    { field: "library_name" },
  ];

  return (
    <Box>
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of bookworms"
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
        <p>No books</p>
      )}
    </Box>
  );
}

export default BookwormsTable;
