import { Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

export function AdminPage() {
  const { isLoading } = useAppState().admin;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SimpleSidebar>
      <PageTitle title="Admin" />
    </SimpleSidebar>
  );
}
