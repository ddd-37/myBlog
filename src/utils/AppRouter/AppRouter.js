import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

//  COMPONENTS
import Posts from "../../containers/Posts";
import NewPost from "../../components/PostNew/PostNew";
import FullPost from "./../../components/PostFull/PostFull";

const AppRouter = () => (
  <main className="Main">
    <BrowserRouter>
      <header>
        <NavLink to="/" activeClassName="active-link" exact>
          Home
        </NavLink>
        <NavLink to="/newPost" activeClassName="active-link" exact>
          Create Post
        </NavLink>
      </header>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/newPost" component={NewPost} />
        <Route path="/fullPost/:id" component={FullPost} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default AppRouter;
