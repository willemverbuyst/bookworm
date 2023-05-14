import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PaymentsFilter } from "./PaymentsFilter";
import { PaymentsSearch } from "./PaymentsSearch";

export function PaymentsTable() {
  return (
    <Box>
      <PaymentsFilter />
      <PaymentsSearch />
      <TableOverview state={stateSectionsWithTable.payment} pagination />
    </Box>
  );
}
