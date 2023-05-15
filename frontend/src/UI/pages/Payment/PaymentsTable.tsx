import { Box } from "@chakra-ui/react";
import { stateSectionsWithTable } from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { PaymentsFilter } from "./PaymentsFilter";

export function PaymentsTable() {
  const state = stateSectionsWithTable.payment;

  return (
    <Box>
      <PaymentsFilter />
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
