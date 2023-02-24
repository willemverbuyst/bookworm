import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import TableForOverview from "../../components/Table";

export default function TableWithAllAuthors() {
  const data = useAppState((state) => state.allAuthors);

  const columns = [
    { field: "name", headerName: "name", width: 450 },
    { field: "books_written", headerName: "books written", width: 150 },
  ];

  return (
    <Box>
      {data ? (
        // <TableForOverview
        //   rows={data}
        //   columns={columns}
        //   title="overview of authors"
        // />
        <p>table</p>
      ) : (
        <p>No Authors</p>
      )}
    </Box>
  );
}
