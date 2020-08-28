import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  background: {
    default: "#CCCCCC",
  },
  typography: {
    fontFamily: ["Georgia", "sans-serif"].join(","),
  },
  h1: {
    fontFamily: "Comic Sans MS",
  },
  h4: {
    fontFamily: ["Georgia", "sans-serif"].join(","),
  },

  h5: {
    fontFamily: ["Georgia", "sans-serif"].join(","),
  },
});

export default theme;
