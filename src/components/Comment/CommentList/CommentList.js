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
    <div className="CommentList">
      <h3 className="CommentList__title">Comment List</h3>
      {comments}
    </div>
  );
};

export default CommentList;
