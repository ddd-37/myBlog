import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const PostNew = () => {
  const formSubmitHandler = e => {
    console.log("TCL: PostNew -> e", e);
    e.preventDefault();
  };

  return (
    <div className="PostNew">
      <h3>Create a new post here</h3>
      <form onSubmit={e => formSubmitHandler(e)}>
        <Input
          input="text"
          name="title"
          label="Title of post:"
          placeholder="Min character 3"
        />
        <Input
          input="textarea"
          name="body"
          label="Body of post:"
          placeholder="Min character 10"
          rows="5"
        />
        <Button type="success" text="Submit" />
      </form>
    </div>
  );
};

export default PostNew;
