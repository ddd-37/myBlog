import React from "react";

const PostCurrent = props => {
  console.log("TCL: PostCurrent - props", props);
  let msg = <p>Please select a post to see in full</p>;

  if (props) {
  }
  return <div className="PostCurrent MainContainer">{msg}</div>;
};

export default PostCurrent;
