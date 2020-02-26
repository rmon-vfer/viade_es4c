import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {
  Home,Login,Friends,NotFound,
} from "./containers";

/**
 * Manages the BrowserRouter and so, all the route navigation
 * @returns {*}
 * @constructor
 */
const Routes = () => (
  <Router>
    <Fragment>
        {/* Chooses the first route matching the direction and loads it */}
      <Switch>
        <Route path="/" exact>      {/* Homepage - "/" */}
            <Home/>
        </Route>
        <Route path="/login" exact>      {/* Login - "/login" */}
            <Login/>
        </Route>
        <Route path="/friends" exact>      {/* Friends - "/friends" */}
            <Friends/>
        </Route>
        <Route path="*" >      {/* In case that the page not exist, 404 error*/}
            <NotFound/>
        </Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;