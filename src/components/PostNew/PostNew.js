import React from "react";

// COMPONENTS
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

// UTILS
import axiosFirebase from "./../../utils/axiosFirebase/axiosFirebase";

const PostNew = () => {
  const formSubmitHandler = e => {
    console.log("TCL: PostNew -> e", e.target.elements.title.value);
    e.preventDefault();

    const formData = {
      title: e.target.elements.title.value,
      body: e.target.elements.body.value
    };
    // axiosFirebase.
    axiosFirebase
      .post("/posts.json", formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="PostNew">
      <h3>Create a new post here</h3>
      <form onSubmit={e => formSubmitHandler(e)}>
        <Input
          input="text"
          name="title"
          label="Title of post:"
          minLength="3"
          placeholder="Min character 3"
          required
        />
        <Input
          input="textarea"
          name="body"
          label="Body of post:"
          minLength="10"
          placeholder="Min character 10"
          required
          rows="5"
        />
        <Button type="success" text="Submit" />
      </form>
    </div>
  );
};

export default PostNew;
