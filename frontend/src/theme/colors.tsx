import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#362873",
      main: "#000047",
      dark: "#000022",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f3a743",
      main: "#bc780b",
      dark: "#874c00",
      contrastText: "#000",
    },
  },
});

export default theme;
