import React from "react";

// COMPONENTS
import PostListItem from "./PostListItem/PostListItem";

const PostList = props => {
  let posts;

  if (props.data) {
    posts = props.data.map(post => {
      return <PostListItem key={post.id} />;
    });
  }

  return <div className="PostList">{posts}</div>;
};

export default PostList;
