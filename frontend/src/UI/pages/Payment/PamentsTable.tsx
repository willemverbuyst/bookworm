import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";
import { Filter } from "./Filter";

export function PaymentsTable() {
  const { isLoading } = useAppState().payment;
  const {
    overview,
    getAllApi,
    ui: {
      table: { columns, noDataMessage, title, sort },
    },
  } = useAppState().payment;
  const { total } = getAllApi || {};
  const { search, setSort } = useActions().payment;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Box>
      <Filter />
      <Input onChange={searchInTable} placeholder="search" my={5} />
      {overview ? (
        <>
          <TableOverview
            rows={overview}
            columns={columns}
            title={title}
            isLoading={isLoading}
            sortFunction={setSort}
            sortProperty={sort}
          />
          <Pagination total={total} state={stateSectionsWithTable.payment} />
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
