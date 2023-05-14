import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { PaymentsFilter } from "./PaymentsFilter";

export function PaymentsTable() {
  return (
    <Box>
      <PaymentsFilter />
      <Search state={stateSectionsWithTable.payment} />
      <TableOverview state={stateSectionsWithTable.payment} pagination />
    </Box>
  );
}
