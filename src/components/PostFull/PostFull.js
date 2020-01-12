import React from "react";
import Button from "../UI/Button/Button";

const FullPost = props => {
  console.log("TCL: FullPost", props);

  // If someone was to enter the URL to a specific post manually, we'l need to go a fetch the data from the server
  if (!props.location.state) {
    console.log("no data");
  }

  const data = props.location.state.data;
  return (
    <div className="PostFull">
      <h1>{data.content.title}</h1>
      <h2>Writen by {data.content.author} on Jan, 11, 2020</h2>
      <p>{data.content.body}</p>
      <Button type="cancel" text="Delete this post" />
    </div>
  );
};

export default FullPost;
