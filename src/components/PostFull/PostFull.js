import React from "react";

const FullPost = props => {
  console.log("TCL: FullPost", props);

  // If someone was to enter the URL to a specific post manually, we'l need to go a fetch the data from the server
  if (!props.location.state) {
    console.log("no data");
  }

  const data = props.location.state.data.content;
  return (
    <div className="PostFull">
      <h1>{data.title}</h1>
      <h2>Writen by {data.author} on Jan, 11, 2020</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default FullPost;
