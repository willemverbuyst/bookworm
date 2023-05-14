import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { AuthorsSearch } from "./AuthorSearch";

export function AuthorsTable() {
  return (
    <Box>
      <AuthorsSearch />
      <TableOverview state={stateSectionsWithTable.author} pagination />
    </Box>
  );
}
