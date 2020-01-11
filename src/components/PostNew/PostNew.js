import React from "react";
import Input from "../UI/Input/Input";

const PostNew = () => {
  return (
    <div className="PostNew">
      <h3>Create a new post here</h3>
      <form action="">
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
      </form>
    </div>
  );
};

export default PostNew;
