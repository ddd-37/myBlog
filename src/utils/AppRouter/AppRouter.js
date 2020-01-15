import React from "react";
import { Switch, Route } from "react-router-dom";

//  COMPONENTS
import Posts from "../../containers/Posts";
import NewPost from "../../components/Post/PostNew/PostNew";
import FullPost from "./../../components/Post/PostFull/PostFull";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={Posts} />
    <Route path="/newPost" component={NewPost} />
    <Route path="/fullPost/:id" component={FullPost} />
  </Switch>
);

export default AppRouter;
