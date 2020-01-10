import React from "react";

// COMPONENTS
import PostListItem from "./PostListItem/PostListItem";

const PostList = props => {
  console.log("TCL: props", props);
  let posts;

  // Make sure we have some data before we try to map the posts
  if (props.data) {
    posts = props.data.map(post => {
      return (
        <PostListItem key={post.id} title={post.title} author={post.author} />
      );
    });
  }

  return <div className="PostList MainContainer">{posts}</div>;
};

export default PostList;
