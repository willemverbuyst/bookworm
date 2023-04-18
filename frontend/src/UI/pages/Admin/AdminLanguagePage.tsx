import { Box, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import {
  stateSectionsWithTable,
  useAppState,
} from "../../../business/overmind";
import { NavigationBar } from "../../components/Navigation";
import { Pagination, TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import { useGetLanguages } from "../../hooks";
import SimpleSidebar from "./SideMenu";

export function AdminLanguagePage() {
  const { isLoading } = useAppState().app;
  useGetLanguages();
  const {
    getAllApi,
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys, title },
    },
  } = useAppState().language;
  const { total } = getAllApi || {};
  // const { setQueryString } = useActions().language;

  // const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQueryString({ queryString: e.target.value });
  // };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />

      <SimpleSidebar>
        <PageTitle title="Language" />
        <Box>
          {/* <Input onChange={searchInTable} placeholder="search" my={5} /> */}
          {overview?.length ? (
            <>
              <TableOverview
                rows={overview.filter((a) =>
                  genericSearch(a, searchKeys, queryString, false)
                )}
                columns={columns}
                title={title}
              />
              <Pagination total={total} state={stateSectionsWithTable.book} />
            </>
          ) : (
            <p>{noDataMessage}</p>
          )}
        </Box>
      </SimpleSidebar>
    </>
  );
}
