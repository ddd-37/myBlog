import React, { Component } from "react";

// COMPONENTS
import PostList from "../components/PostList/PostList";
import PostCurrent from "../components/PostCurrent/PostCurrent";

// UTILS
import axiosRequest from "./../utils/axios/axios";

class Main extends Component {
  state = {
    posts: null,
    currentPost: null
  };

  componentDidMount() {
    // Let's go out and get our posts' titles and bodies (this business should be an async await since it fails intermitently)
    axiosRequest("/posts")
      .then(postData => {
        let posts = postData.data.slice(0, 5);
        this.setState({
          posts
        });

        // Just for fun, let's attach author names to the data
        return axiosRequest("/users")
          .then(users => {
            const userData = users.data;
            let posts = [...this.state.posts];

            posts.map((post, i) => {
              return (post.author = userData[i].name);
            });

            this.setState({
              posts
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClickOnPost = id => {
    let currentPost = this.state.posts.find(post => post.id === id);

    this.setState({
      currentPost
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Main">
        <PostList
          data={this.state.posts}
          clickHandler={this.handleClickOnPost}
        />
        <PostCurrent data={this.state.currentPost} />
      </div>
    );
  }
}

export default Main;
