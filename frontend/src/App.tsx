/* eslint-disable no-nested-ternary */
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
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
    return (
      <Flex
        minH="100vh"
        minW="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Flex>
    );
  }

  return (
    <Box>
      <NavigationBar />

      <LandingPageRoute />
      <PublicRoutes />
      <PrivateRoutes />
      <PageNotFoundPage />

      <Tooltip id="bookworm-tooltip" />
    </Box>
  );
}
