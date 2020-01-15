import React from "react";

const CommentListItem = props => {
  const { body, author, createdAt } = props.comment;
  return (
    <div className="CommentListItem">
      <p className="CommentListItem__body">{body}</p>
      <p className="CommentListItem__author">
        By: {author} on
        <span className="CommentListItem__date"> {createdAt}</span>
      </p>
    </div>
  );
};

export default CommentListItem;
