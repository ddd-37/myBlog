import React, { Component } from "react";

// THIS IS SIMPLY FOR MY DEVELOPMENT
import faker from "faker";

// COMPONENTS
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

// UTILS
import axiosFirebase from "../../utils/axiosFirebase/axiosFirebase";

class Comment extends Component {
  // TODO - think about this, there might be a better way to manage modals throughout the app
  state = {
    showModal: false
  };

  commentSubmitHandler = e => {
    e.preventDefault();

    const formData = {
      body: e.target.elements.body.value,
      author: e.target.elements.author.value,
      createdAt: new Date().toDateString()
    };
    // axiosFirebase
    axiosFirebase
      .post(`/posts/${this.props.postId}/comments.json`, formData)
      .then(response => {})

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log("comment", this.props);
    return (
      <div className="Comment">
        <h3>Create a new post here</h3>
        <form onSubmit={e => this.commentSubmitHandler(e)}>
          <Input
            input="text"
            name="author"
            label="Author of comment:"
            minLength="3"
            placeholder="Min character 3"
            value={faker.name.firstName() + " " + faker.name.lastName()}
            required
          />
          <Input
            input="textarea"
            name="body"
            label="Body of comment:"
            minLength="10"
            placeholder="Min character 10"
            required
            value={
              faker.lorem.words() + faker.lorem.words() + faker.lorem.words()
            }
            rows="5"
          />
          <Button type="success" text="Submit">
            Create Comment
          </Button>
        </form>
      </div>
    );
  }
}

export default Comment;
