import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";

export function PaymentsTable() {
  const { isLoading } = useAppState().payment;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, title },
    },
  } = useAppState().payment;
  const { total } = getAllApi || {};
  const { search } = useActions().payment;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title={title}
            isLoading={isLoading}
          />
          <Pagination total={total} state={stateSectionsWithTable.payment} />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
