import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <form method="post">
        <div class="box">
          <h1>Sign in</h1>

          <input type="email" name="email" placeholder="Email" class="email" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="email"
          />

          <a href="#">
            <div class="btn">Sign In</div>
          </a>

          <a href="#">
            <div id="btn2">Sign Up</div>
          </a>
        </div>
      </form>
    );
  }
}

export default App;