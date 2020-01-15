import React from "react";

const CommentListItem = props => {
  console.log("TCL: props", props);
  const { body, author, createdAt } = props.comment;
  return (
    <div>
      <h2>{body}</h2>
      <h3>
        By: {author} on <span>{createdAt}</span>
      </h3>
    </div>
  );
};

export default CommentListItem;
