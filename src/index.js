import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink } from "react-router-dom";

// COMPONENTS
import AppRouter from "./utils/AppRouter/AppRouter";

// STYLES
import "./styles/style.scss";
import "normalize.css";

class App extends Component {
  state = {
    showModal: false
  };
  render() {
    return (
      <BrowserRouter>
        <main className="Main">
          <header>
            <NavLink to="/" activeClassName="active-link" exact>
              Home
            </NavLink>
            <NavLink to="/newPost" activeClassName="active-link" exact>
              Create Post
            </NavLink>
          </header>
          <AppRouter />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
