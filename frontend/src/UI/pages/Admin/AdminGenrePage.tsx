import { Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { NavigationBar } from "../../components/Navigation";
import { PageTitle } from "../../components/Text";
import SimpleSidebar from "./SideMenu";

export function AdminGenrePage() {
  const { isLoading } = useAppState().app;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar />

      <SimpleSidebar>
        <PageTitle title="Genre" />
      </SimpleSidebar>
    </>
  );
}
