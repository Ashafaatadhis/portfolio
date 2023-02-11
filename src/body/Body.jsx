import React from "react";

import Root from "./root/Root";
import Work from "./work/Work";
import { Switch, Route } from "react-router-dom";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Articles from "./articles/Articles";

const Body = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <Root />
      </Route>
      <Route path={"/work"}>
        <Work />
      </Route>
      <Route path={"/projects"}>
        <Projects />
      </Route>
      <Route path={"/contact"}>
        <Contact />
      </Route>
      <Route path={"/articles"}>
        <Articles />
      </Route>
    </Switch>
  );
};

export default Body;
