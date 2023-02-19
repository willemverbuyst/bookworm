import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";

const CustomizedSnackbars: React.FC = (): React.ReactElement => {
  const { apiResponse } = useAppState();
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState();
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
};

export default CustomizedSnackbars;
