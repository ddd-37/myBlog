import React, { Component } from "react";

// COMPONENTS
import PostList from "../components/PostList/PostList";
import PostCurrent from "../components/PostCurrent/PostCurrent";

// UTILS
import axiosRequest from "./../utils/axios/axios";

class Main extends Component {
  state = {
    posts: null
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

  render() {
    return (
      <div className="Main">
        <PostList data={this.state.posts} />
        <PostCurrent />
      </div>
    );
  }
}

export default Main;
