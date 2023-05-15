import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";

export function AuthorsTable() {
  const state = stateSectionsWithTable.author;

  return (
    <Box>
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
