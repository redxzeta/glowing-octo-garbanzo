import React from "react";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  downloads: {
    paddingBottom: "20px",
  },
}));
export default function Downloads() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.downloads}>Download 1 </Box>
      <Box className={classes.downloads}>Download 2 </Box>
      <Box className={classes.downloads}>Download 3</Box>
    </div>
  );
}
