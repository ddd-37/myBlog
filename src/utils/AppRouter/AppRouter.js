import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

//  COMPONENTS
import Main from "./../../containers/Main";
import NewPost from "../../components/PostNew/PostNew";

const AppRouter = () => (
  <BrowserRouter>
    <header>
      <NavLink to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/newPost" activeClassName="active-link">
        Create Post
      </NavLink>
    </header>
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/newPost">
        <NewPost />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
