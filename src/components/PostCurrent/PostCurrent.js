import React from "react";
import { Link } from "react-router-dom";

const PostCurrent = ({ data }) => {
  console.log("TCL: PostCurrent - data", data);
  let msg = <p>Please select a post to see preview</p>;

  if (data) {
    msg = (
      <>
        <h1>{data.content.title}</h1>
        <h2>Written by -- {data.content.author}</h2>
        <p>{data.content.body}</p>
        <Link to={{ pathname: `/fullPost/${data.id}`, state: { data } }}>
          Click to see full post
        </Link>
      </>
    );
  }
  return <div className="PostCurrent PostContainer">{msg}</div>;
};

export default PostCurrent;
