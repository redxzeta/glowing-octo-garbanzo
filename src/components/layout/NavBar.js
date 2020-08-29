import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ButtonAppBar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" style={{}}>
        <Toolbar>
          <Button
            variant="h6"
            component={Link}
            to={"/"}
            className={classes.link}
          >
            Home
          </Button>
          <Button
            variant="h6"
            className={classes.link}
            component={Link}
            to={"/articles"}
          >
            Articles
          </Button>
          {/* <Typography className={classes.link} variant="h6" color="primary">
            Articles
          </Typography> */}
          <Button
            variant="h6"
            className={classes.link}
            component={Link}
            to={"/downloads"}
          >
            Downloads
          </Button>
          <Button
            variant="h6"
            component={Link}
            to={"/about"}
            className={classes.link}
          >
            About
          </Button>
          <Button
            variant="h6"
            component={Link}
            to={"/contact"}
            className={classes.link}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
