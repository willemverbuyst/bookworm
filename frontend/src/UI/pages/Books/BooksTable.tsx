import { Box, HStack } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { GenreFilter, LanguageFilter } from "./BooksFilter";

export function BooksTable() {
  const state = stateSectionsWithTable.book;

  return (
    <Box>
      <Box mt={4}>
        <HStack spacing={6}>
          <GenreFilter />
          <LanguageFilter />
        </HStack>
      </Box>
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
