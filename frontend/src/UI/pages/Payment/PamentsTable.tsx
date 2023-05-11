import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export function PaymentsTable() {
  const { isLoading } = useAppState().payment;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, title, page, limit },
    },
  } = useAppState().payment;
  const { search } = useActions().payment;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Filter />
      <Sort />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview ? (
        <>
          <TableOverview
            rows={overview.slice((page - 1) * limit, page * limit)}
            columns={columns}
            title={title}
            isLoading={isLoading}
          />
          <Pagination
            total={overview.length}
            state={stateSectionsWithTable.payment}
          />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
