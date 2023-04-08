import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Bookworm } from "../../../business/models/Bookworm";
import { useActions, useAppState } from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";

interface Props {
  action: (id: string) => void;
}

function BookwormsTable({ action }: Props) {
  const { isLoading } = useAppState().app;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [showAll, setShowAll] = useState(false);
  const data = useAppState().bookworm.bookwormOverview;
  const total = useAppState().bookworm.bookwormApi?.total;
  const { getBookworms } = useActions().bookworm;

  useEffect(() => {
    if (showAll && total) {
      getBookworms({ limit: total, page: 1 });
    } else {
      getBookworms({ limit, page });
    }
  }, [page, limit, showAll]);

  const columns: Array<{ field: keyof Bookworm }> = [
    { field: "first_name" },
    { field: "last_name" },
    { field: "email" },
    { field: "phone" },
    { field: "user_is_active" },
    { field: "library_name" },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data?.length ? (
        <>
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of bookworms"
            action={action}
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
        <p>no bookworms</p>
      )}
    </Box>
  );
}

export default BookwormsTable;
