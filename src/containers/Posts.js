import React, { Component } from "react";

// COMPONENTS
import PostList from "../components/PostList/PostList";
import PostCurrent from "../components/PostCurrent/PostCurrent";

// UTILS
import axiosFirebase from "../utils/axiosFirebase/axiosFirebase";

class Posts extends Component {
  state = {
    posts: null,
    currentPost: null
  };

  componentDidMount() {
    // Let's go out and get our posts' titles and bodies (this business should be an async await since it fails intermitently)
    axiosFirebase
      .get("/posts.json")
      .then(postData => {
        let posts = postData.data;
        this.setState({
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClickOnPost = id => {
    if (this.state.posts) {
      let posts = [];
      for (let key in this.state.posts) {
        posts.push({
          id: key,
          content: this.state.posts[key]
        });
      }

      let currentPost = posts.find(post => post.id === id);

      this.setState({
        currentPost
      });
    }
  };

  render() {
    return (
      <div className="Posts">
        <PostList
          data={this.state.posts}
          clickHandler={this.handleClickOnPost}
        />
        <PostCurrent data={this.state.currentPost} />
      </div>
    );
  }
}

export default Posts;
