import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppMain from "./components/AppMain";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Callback from "./components/Callback";
import Auth from "./components/Auth";

const auth = new Auth();
let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(
    <BrowserRouter>
      <Callback {...state} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
// ReactDOM.render(<BrowserRouter><Callback {...state}/></BrowserRouter>, document.getElementById('root'));

let initialState = {
  auth
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
