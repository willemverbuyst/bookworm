import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { AuthorsSearch } from "./AuthorSearch";

export function AuthorsTable() {
  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().author;

  return (
    <Box>
      <AuthorsSearch />

      {overview ? (
        <TableOverview state={stateSectionsWithTable.author} pagination />
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
