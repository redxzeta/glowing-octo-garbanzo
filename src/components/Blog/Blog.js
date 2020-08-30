import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  about: {
    textAlign: "center",
    paddingTop: "20px",
  },
  title: {
    textAlign: "center",
  },
  paragraph: {
    display: "inline-block",
    textAlign: "left",
    paddingBottom: "20px",
  },
}));
export default function Blog() {
  const classes = useStyles();
  return (
    <Grid container className={classes.about}>
      <Grid item spacing={3} xs={12}>
        <Typography variant="h2" className={classes.title}>
          Blog
        </Typography>
      </Grid>
      <Grid item spacing={3} xs={12}>
        <img
          alt="about"
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />{" "}
      </Grid>
      <Grid item spacing={3} xs={12}>
        <Typography variant="p" className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="p" className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
    </Grid>
  );
}
