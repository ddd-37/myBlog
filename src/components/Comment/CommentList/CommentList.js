import React from "react";

// COMPONENTS
import CommentListItem from "./../CommentListItem/CommentListItem";

const CommentList = props => {
  let comments;

  if (props.data) {
    comments = Object.values(props.data).map(comment => {
      return <CommentListItem comment={comment} />;
    });
  }

  return (
    <div>
      <h1>Comment List</h1>
      {comments}
    </div>
  );
};

export default CommentList;
