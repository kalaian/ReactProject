import React, { Component } from "react";
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
        </div>
      </form>
    );
  }
}

export default App;