import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useAppState } from "../../../business/overmind";

export default function CustomizedSnackbars() {
  const { apiResponse } = useAppState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<"success" | "error" | undefined>();
  const [message, setMessage] = React.useState<string>();

  React.useEffect(() => {
    if (apiResponse.message) {
      setOpen(true);
      setSeverity(apiResponse.status);
      setMessage(apiResponse.message);
    }
  }, [apiResponse]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar> */}
    </Box>
  );
}
