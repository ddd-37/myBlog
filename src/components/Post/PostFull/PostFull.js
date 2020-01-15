import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import { Link } from "react-router-dom";
import axiosFirebase from "../../../utils/axiosFirebase/axiosFirebase";

class FullPost extends Component {
  state = {
    showComment: false,
    showModal: false
  };

  showModalHandler = () => {
    this.setState({
      showModal: true
    });
  };

  deletePostHandler = id => {
    console.log(id);
    axiosFirebase
      .delete(`posts/${id}.json`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancelDeleteHandler = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    // If someone was to enter the URL to a specific post manually, we'l need to go a fetch the data from the server
    if (!this.props.location.state) {
      console.log("no data");
    }
    const data = this.props.location.state.data.content;
    return (
      <div className="PostFull">
        <h1>{data.title}</h1>
        <h2>
          Writen by {data.author} on {data.createdAt}
        </h2>
        <p>{data.body}</p>
        <Button type="danger" clickhandler={this.showModalHandler}>
          Delete this post
        </Button>
        <Modal show={this.state.showModal}>
          Are you sure you want to delete this post?
          <Link to="/">
            <Button
              type="success"
              clickhandler={() =>
                this.deletePostHandler(this.props.location.state.data.id)
              }
            >
              Yes, delete Post
            </Button>
          </Link>
          <Button type="danger" clickhandler={this.cancelDeleteHandler}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}

export default FullPost;
