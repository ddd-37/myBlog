import React from "react";

const PostCurrent = ({ data }) => {
  console.log("TCL: PostCurrent - props", data);
  let msg = <p>Please select a post to see in full</p>;

  if (data) {
    msg = (
      <>
        <h1>{data.title}</h1>
        <h2>Written by -- {data.author}</h2>
        <p>{data.body}</p>
      </>
    );
  }
  return <div className="PostCurrent MainContainer">{msg}</div>;
};

export default PostCurrent;
