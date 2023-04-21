/* eslint-disable no-nested-ternary */
import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppState } from "./business/overmind";
import LandingPageRoute from "./routes/LandingPageRoute";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/Publicroutes";
import { NavigationBar } from "./UI/components/Navigation";
import { useToastHook } from "./UI/hooks";

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
      {appState.currentPage !== "/" ? <NavigationBar /> : null}
      <PublicRoutes />
      <PrivateRoutes />

      {/* <Route path="*" element={<PageNotFoundPage />} /> */}
    </Box>
  );
}
