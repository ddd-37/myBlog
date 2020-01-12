import React from "react";

// COMPONENTS
import PostListItem from "./PostListItem/PostListItem";

const PostList = props => {
  console.log("PostList: props", props);
  let posts = [];

  // Convert our object to an array of objects
  if (props.data) {
    for (let key in props.data) {
      posts.push({
        id: key,
        content: props.data[key]
      });
      console.log("posts", posts);
    }

    // Make sure we have some data before we try to map the posts

    posts = posts.map(post => {
      console.log("TCL: post", post);
      return (
        <PostListItem
          key={post.id}
          id={post.id}
          title={post.content.title}
          author={post.content.author}
          clickHandler={props.clickHandler}
        />
      );
    });
  }

  return <div className="PostList PostContainer">{posts}</div>;
};

export default PostList;
