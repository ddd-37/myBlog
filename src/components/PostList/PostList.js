import React from "react";

// COMPONENTS
import PostListItem from "./PostListItem/PostListItem";

const PostList = props => {
  //console.log("PostList: props", props);
  let posts;

  // Make sure we have some data before we try to map the posts
  if (props.data) {
    posts = props.data.map(post => {
      return (
        <PostListItem
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          clickHandler={props.clickHandler}
        />
      );
    });
  }

  return <div className="PostList PostContainer">{posts}</div>;
};

export default PostList;
