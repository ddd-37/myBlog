import React from "react";
import PostList from "../components/PostList/PostList";
import PostCurrent from "../components/PostCurrent/PostCurrent";

function Main() {
  return (
    <div className="Main">
      <PostList />
      <PostCurrent />
    </div>
  );
}

export default Main;
