import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "gatsby";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
// import AdapterLink from "../components/AdapaterLink";

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
  img: {
    maxWidth: 400,
    marginBottom: 40,
  },
  Media: {
    height: "100%",
    width: "100%",
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" style={{}}>
      <Toolbar>
        <Button component={Link} to="/" className={classes.link}>
          Home
        </Button>
        <Button className={classes.link} component={Link} to={"/blog"}>
          Blog
        </Button>
        {/* <Typography className={classes.link}  color="primary">
            Articles
          </Typography> */}
        {/* <Button
          
          className={classes.link}
          component={Link}
          to={"/downloads"}
        >
          Downloads
        </Button> */}
        <Button component={Link} to={"/about"} className={classes.link}>
          About
        </Button>
        <Button component={Link} to={"/contact"} className={classes.link}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}
