import React, { Component } from "react";

// COMPONENTS
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

// UTILS
import axiosFirebase from "./../../utils/axiosFirebase/axiosFirebase";

class PostNew extends Component {
  state = {
    modalConfig: {
      btnPath: null,
      btnText: null,
      status: null,
      mainMessage: null,
      show: false
    }
  };

  formSubmitHandler = e => {
    e.preventDefault();

    const formData = {
      title: e.target.elements.title.value,
      body: e.target.elements.body.value
    };
    // axiosFirebase
    axiosFirebase
      .post("/posts.json", formData)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            modalConfig: {
              btnPath: "/",
              btnText: "Back to Main",
              status: "success",
              mainMessage: "Your post was succesfully created!",
              show: true
            }
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log("TCL: PostNew -> render", this.state);
    let modal;
    if (this.state.modalConfig.status) {
      modal = (
        <Modal
          show={this.state.modalConfig.show}
          btnPath={this.state.modalConfig.btnPath}
          btnText={this.state.modalConfig.btnText}
          mainMessage={this.state.modalConfig.mainMessage}
        />
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
        {modal}
      </div>
    );
  }
}

export default PostNew;
