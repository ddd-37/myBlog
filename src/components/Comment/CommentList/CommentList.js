import React from "react";

// COMPONENTS
import CommentListItem from "./../CommentListItem/CommentListItem";

const CommentList = props => {
  let comments;

  if (props.data) {
    comments = Object.values(props.data).map((comment, i) => {
      // Get the key provided by FireBase
      const key = Object.keys(props.data)[i];
      return <CommentListItem comment={comment} key={key} />;
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
