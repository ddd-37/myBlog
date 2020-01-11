import React from "react";
import Input from "../Input/Input";

const PostNew = () => {
  return (
    <div className="PostNew">
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
        />
      </form>
    </div>
  );
};

export default PostNew;
