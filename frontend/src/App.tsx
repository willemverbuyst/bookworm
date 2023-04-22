/* eslint-disable no-nested-ternary */
import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { Page } from "./business/models";
import { useAppState } from "./business/overmind";
import LandingPageRoute from "./routes/LandingPageRoute";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/Publicroutes";
import { NavigationBar } from "./UI/components/Navigation";
import { useToastHook } from "./UI/hooks";
import { PageNotFoundPage } from "./UI/pages/PageNotFound";

export default function App() {
  const [, setToast] = useToastHook();
  const { message, status, statusText } = useAppState().api.response;
  const appState = useAppState().app;

  useEffect(() => {
    if (message && status) {
      setToast({ title: statusText, status, description: message });
    }
  }, [message, status]);

  if (appState.isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <LandingPageRoute />
      <Box minH="3vh">
        {appState.currentPage !== Page.WELCOME &&
        appState.currentPage !== Page.PAGE_NOT_FOUND ? (
          <NavigationBar />
        ) : null}
      </Box>
      <Box>
        <PublicRoutes />
        <PrivateRoutes />
      </Box>
      <Tooltip id="bookworm-tooltip" />
      {appState.currentPage === Page.PAGE_NOT_FOUND ? (
        <PageNotFoundPage />
      ) : null}
    </Box>
  );
}
