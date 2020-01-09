import React, { Component } from "react";

// COMPONENTS
import PostList from "../components/PostList/PostList";
import PostCurrent from "../components/PostCurrent/PostCurrent";

// UTILS
import axiosRequest from "./../utils/axios/axios";

class Main extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axiosRequest("/posts").then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="Main">
        <PostList />
        <PostCurrent />
      </div>
    );
  }
}

export default Main;
