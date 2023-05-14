import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";

export function AuthorsTable() {
  return (
    <Box>
      <Search state={stateSectionsWithTable.author} />
      <TableOverview state={stateSectionsWithTable.author} pagination />
    </Box>
  );
}
