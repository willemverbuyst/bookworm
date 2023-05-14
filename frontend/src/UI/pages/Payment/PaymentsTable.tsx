import { Box } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { PaymentsFilter } from "./PaymentsFilter";
import { PaymentsSearch } from "./PaymentsSearch";

export function PaymentsTable() {
  const {
    overview,
    getAllApi,
    ui: {
      table: { noDataMessage, queryString },
    },
  } = useAppState().payment;
  const { total } = getAllApi || {};

  return (
    <Box>
      <PaymentsFilter />
      <PaymentsSearch />

      {overview ? (
        <>
          <TableOverview state={stateSectionsWithTable.payment} />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.payment} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
