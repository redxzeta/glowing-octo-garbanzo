import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  MuiTypography: {
    h1: {
      fontSize: "5rem",
      "@media (max-width:599px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

export default theme;
