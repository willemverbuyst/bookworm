import { EditIcon } from "@chakra-ui/icons";
import { Flex, Input, Spinner } from "@chakra-ui/react";
import { genericSearch } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import { TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

export function AdminLanguagePage() {
  const { isLoading } = useAppState().app;
  const {
    overview,
    ui: {
      table: { columns, noDataMessage, queryString, searchKeys },
    },
  } = useAppState().language;
  const { search } = useActions().language;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SimpleSidebar>
      <PageTitle title="Language" />
      {overview?.length ? (
        <Flex style={{ backgroundColor: "#fff" }} direction="column" px={5}>
          <Input onChange={searchInTable} placeholder="search" my={5} />
          <TableOverview
            rows={overview.filter((a) =>
              genericSearch(a, searchKeys, queryString, false)
            )}
            columns={columns}
            icon={<EditIcon />}
            action={() => console.log("testing language button")}
            ariaLabel="Edit details"
          />
        </Flex>
      ) : (
        <p>{noDataMessage}</p>
      )}
    </SimpleSidebar>
  );
}
