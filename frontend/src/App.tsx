/* eslint-disable no-nested-ternary */
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppState } from "./business/overmind";
import LandingPageRoute from "./routes/LandingPageRoute";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/Publicroutes";
import { useToastHook } from "./UI/hooks";

export default function App() {
  const [, setToast] = useToastHook();

  const { message, status, statusText } = useAppState().api.response;

  useEffect(() => {
    if (message && status) {
      setToast({ title: statusText, status, description: message });
    }
  }, [message, status]);

  return (
    <Box>
      <LandingPageRoute />
      <PublicRoutes />
      <PrivateRoutes />

      {/* <Route path="*" element={<PageNotFoundPage />} /> */}
    </Box>
  );
}
