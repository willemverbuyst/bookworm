import { Box, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination, TableOverview } from "../../components/Table";

export function AuthorsTable() {
  const { isLoading } = useAppState().author;
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, sort, title },
    },
  } = useAppState().author;
  const { search, setSort } = useActions().author;
  const { total } = getAllApi || {};

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
            sortFunction={setSort}
            sortProperty={sort}
          />
          {!queryString && (
            <Pagination total={total} state={stateSectionsWithTable.author} />
          )}
        </>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </Box>
  );
}
