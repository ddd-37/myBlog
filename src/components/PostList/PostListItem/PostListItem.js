import React from "react";

const PostListItem = props => {
  console.log("TCL: props", props);
  return (
    <div className="PostListItem">
      <h1>{props.title}</h1>
      <h2>Author: {props.author}</h2>
    </div>
  );
};

export default PostListItem;
