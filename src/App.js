import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/LandingPage/Home";
// import Hero from "./assets/hero-bg.png";
import { Container } from "@material-ui/core";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleGrid from "./components/LandingPage/ArticleGrid";
import About from "./components/About/About";
import Downloads from "./components/Downloads/Downloads";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
    border: "blue",
    alignItems: "center",
  },
  link: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  hero: {
    height: "300px",
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0.5)), url(${Hero})`,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    fontSize: "3rem",
    fontFamily: "Georgia",
    letterSpacing: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      height: 200,
      fontSize: "3em",
      letterSpacing: ".7rem",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    // fontFamily: "Georgia",
    // fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  cardWidth: {
    maxWidth: "100%",
  },
  cardMedia: {
    height: 240,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "white" }}>
      <Router>
        <Home classes={classes} />
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <NavBar classes={classes} />

          <Switch>
            <Route path="/blog">
              {/* <ArticleGrid classes={classes} /> */}
              <Blog />
            </Route>
            <Route path="/downloads">
              <Downloads />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <ArticleGrid classes={classes} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
