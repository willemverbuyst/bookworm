import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PaymentsFilter } from "./PaymentsFilter";
import { PaymentsSearch } from "./PaymentsSearch";

export function PaymentsTable() {
  const {
    overview,
    ui: {
      table: { noDataMessage },
    },
  } = useAppState().payment;

  return (
    <Box>
      <PaymentsFilter />
      <PaymentsSearch />

      {overview ? (
        <TableOverview state={stateSectionsWithTable.payment} pagination />
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
