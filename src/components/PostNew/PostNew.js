import React, { Component } from "react";
import { Link } from "react-router-dom";

// THIS IS SIMPLY FOR MY DEVELOPMENT
import faker from "faker";

// COMPONENTS
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

// UTILS
import axiosFirebase from "./../../utils/axiosFirebase/axiosFirebase";

class PostNew extends Component {
  // TODO - think about this, there might be a better way to manage modals throughout the app
  state = {
    showModal: false
  };

  formSubmitHandler = e => {
    e.preventDefault();

    const formData = {
      body: e.target.elements.body.value,
      author: e.target.elements.author.value,
      createdAt: new Date().toDateString(),
      title: e.target.elements.title.value
    };
    // axiosFirebase
    axiosFirebase
      .post("/posts.json", formData)
      .then(response => {
        if (response.status === 200) {
          this.setState({ showModal: true });
        }
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(faker.name.firstName());
    let modal;
    if (this.state.showModal) {
      modal = (
        <Modal show={this.state.showModal}>
          <h2>Your post was successfully created!</h2>
          <Link to="/">
            <Button type="success">Go back to Main Page</Button>
          </Link>
        </Modal>
      );
    }
    return (
      <div className="PostNew">
        <h3>Create a new post here</h3>
        <form onSubmit={e => this.formSubmitHandler(e)}>
          <Input
            input="text"
            name="title"
            label="Title of post:"
            minLength="3"
            placeholder="Min character 3"
            value={faker.lorem.words()}
            required
          />
          <Input
            input="text"
            name="author"
            label="Author of post:"
            minLength="3"
            placeholder="Min character 3"
            value={faker.name.firstName() + " " + faker.name.lastName()}
            required
          />
          <Input
            input="textarea"
            name="body"
            label="Body of post:"
            minLength="10"
            placeholder="Min character 10"
            required
            value={faker.lorem.paragraphs()}
            rows="5"
          />
          <Button type="success" text="Submit">
            Create Post
          </Button>
        </form>
        {modal}
      </div>
    );
  }
}

export default PostNew;
