import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { AuthorsSearch } from "./AuthorSearch";

export function AuthorsTable() {
  const {
    getAllApi,
    overview,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().author;
  const { total } = getAllApi || {};

  return (
    <Box>
      <AuthorsSearch />

      {overview ? (
        <>
          <TableOverview state={stateSectionsWithTable.author} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.author} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
