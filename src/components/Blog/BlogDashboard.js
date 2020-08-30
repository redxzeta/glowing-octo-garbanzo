import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./Blog";

export default function BlogDashboard() {
  return (
    <Switch>
      <Route exact path="/blog/:id">
        <Blog />
      </Route>
      <Route exact path="/blog">
        lol
      </Route>
    </Switch>
  );
}
