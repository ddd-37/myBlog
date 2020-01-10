import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

//  COMPONENTS
import Posts from "../../containers/Posts";
import NewPost from "../../components/PostNew/PostNew";

const AppRouter = () => (
  <main>
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
          <Posts />
        </Route>
        <Route path="/newPost">
          <NewPost />
        </Route>
      </Switch>
    </BrowserRouter>
  </main>
);

export default AppRouter;
