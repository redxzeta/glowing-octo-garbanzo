import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "gatsby";
import { Box, Button } from "@material-ui/core";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      display: "block",
    },
  },
  img: {
    maxWidth: 400,
    marginBottom: 40,
  },
  Media: {
    height: "100%",
    width: "100%",
  },
  drop: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      color: "black",
      textAlign: "center",
      display: "block",
    },
  },
  dropmenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
      display: "block",
    },
  },
}));
export default function ButtonAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles();
  const recordButtonPosition = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar className={classes.appBar} position="static" style={{}}>
      <Toolbar>
        <Button component={Link} to="/" className={classes.link}>
          Home
        </Button>
        <Button className={classes.link} component={Link} to={"/blog"}>
          Blog
        </Button>
        <Button component={Link} to={"/resources"} className={classes.link}>
          Resources
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
        <Button onClick={recordButtonPosition} className={classes.hamburger}>
          <MenuSharpIcon />
        </Button>
      </Toolbar>
      {menuOpen && <DropDown />}
    </AppBar>
  );
}

const DropButton = ({ link, name }) => (
  <DropMenu>
    <Button component={Link} to={link}>
      {name}
    </Button>{" "}
  </DropMenu>
);

const DropDown = () => {
  const classes = useStyles();
  return (
    <Box className={classes.drop}>
      <DropButton link="/" name="Home" />
      <DropButton link="/blog" name="Blog" />
      <DropButton link="/resources" name="Resources" />
      <DropButton link="/about" name="About" />
      <DropButton link="/contact" name="Contact" />
    </Box>
  );
};

const DropMenu = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.dropmenu}>{children}</Box>;
};
