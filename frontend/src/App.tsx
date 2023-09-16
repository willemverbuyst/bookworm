/* eslint-disable no-nested-ternary */
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { useAppState } from "./business/overmind";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/Publicroutes";
import { NavigationBar } from "./UI/components/Navigation";
import { hooks } from "./UI/hooks";

export default function App() {
  const [, setToast] = hooks.useToastHook();
  const { message, status, statusText } = useAppState(
    (state) => state.api.response
  );
  const { isLoading } = useAppState().app;

  useEffect(() => {
    if (message && status) {
      setToast({ title: statusText, status, description: message });
    }
  }, [message, status]);

  if (isLoading) {
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

      <PublicRoutes />
      <PrivateRoutes />

      <Tooltip id="bookworm-tooltip" />
    </Box>
  );
}
