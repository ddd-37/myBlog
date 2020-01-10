import React from "react";

const PostListItem = props => {
  console.log("PostListItem: props", props);
  return (
    <div
      className="PostListItem"
      onClick={() => {
        props.clickHandler(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <h2>Author: {props.author}</h2>
    </div>
  );
};

export default PostListItem;
