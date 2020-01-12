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
        console.log(
          "TCL: Posts -> componentDidMount -> postData",
          postData.data
        );
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
    console.log(this.state.posts);

    if (this.state.posts) {
      let posts = [];
      for (let key in this.state.posts) {
        posts.push({
          id: key,
          content: this.state.posts[key]
        });
        console.log("posts", posts);
      }

      let currentPost = posts.find(post => post.id === id);

      this.setState({
        currentPost
      });
    }
  };

  render() {
    console.log(this.state);
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
