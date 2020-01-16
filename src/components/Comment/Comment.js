import React, { Component } from "react";

// THIS IS SIMPLY FOR MY DEVELOPMENT
import faker from "faker";

// COMPONENTS
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import CommentList from "../Comment/CommentList/CommentList";

// UTILS
import axiosFirebase from "../../utils/axiosFirebase/axiosFirebase";

class Comment extends Component {
  // TODO - think about this, there might be a better way to manage modals throughout the app
  state = {
    showModal: false,
    comments: null
  };

  componentDidMount() {
    axiosFirebase
      .get(`/posts/${this.props.postId}/comments.json`)
      .then(response => {
        console.log(response);
        this.setState({
          comments: response.data
        });
      });
  }

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
      .then(response => {
        if (response.status === 200) {
          // TODO - come back to this, right now I'm just adding the formData to the state so I can get a component refresh
          this.setState({
            comments: { ...this.state.comments, formData }
          });
        }
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Comment">
        <CommentList data={this.state.comments} />
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
