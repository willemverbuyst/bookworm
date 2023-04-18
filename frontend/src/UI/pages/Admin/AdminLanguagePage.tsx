import { Flex, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useAppState } from "../../../business/overmind";
import { NavigationBar } from "../../components/Navigation";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import { useGetLanguages } from "../../hooks";
import SimpleSidebar from "./SideMenu";

export function AdminLanguagePage() {
  useGetLanguages();
  const { isLoading } = useAppState().app;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys },
    },
  } = useAppState().language;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />
      <SimpleSidebar>
        <PageTitle title="Language" />
        <Flex style={{ backgroundColor: "#fff" }}>
          {overview?.length ? (
            <TableOverview
              rows={overview.filter((a) =>
                genericSearch(a, searchKeys, queryString, false)
              )}
              columns={columns}
            />
          ) : (
            <p>{noDataMessage}</p>
          )}
        </Flex>
      </SimpleSidebar>
    </>
  );
}
