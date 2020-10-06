import React from "react";
import { Helmet } from "react-helmet";

// import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import theme from "../theme";
import ProLogo from "../img/proLogo.png";
import ButtonAppBar from "./ButtonAppBar";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
  },
  content: {
    marginTop: -320,
    flex: "1 0 auto",
    backgroundColor: "#ffffff",
  },
  heroContent: {
    // backgroundPosition: "center",
    // backgroundColor: theme.palette.primary.main,

    paddingTop: 60,
    padding: theme.spacing(8, 0, 6),
    height: 400,
  },
  img: {
    maxWidth: 400,
    marginBottom: 40,
  },
  Media: {
    width: "50%",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  },
}));
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/faviconheart.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/faviconheart.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/faviconheart.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/faviconheart.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/prologo.png`}
        />
      </Helmet>
      <div className={classes.root}>
        <Container>
          <img className={classes.Media} src={ProLogo} alt="proAuthenticity" />
          <ButtonAppBar />
          {children}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
