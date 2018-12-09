import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Auth from "./Auth";

class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <div>
          <Link to="/" className="active">
            Items
          </Link>

          <Link to="/favs">Favs</Link>

          <div className="dropdown">
            <button className="dropbtn">
              Profile/Login/Logout
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a className="login" onClick={() => Auth.login()}>
                Log in
              </a>
              <a className="login" onClick={() => Auth.logout()}>
                Logout
              </a>
            </div>
          </div>
          <span className="email">Hello {"(email will go here)"}</span>
        </div>
      </StyledNavBar>
    );
  }
}

const StyledNavBar = styled.div`
  overflow: hidden;
  background-color: #333;
  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: #555;
      color: white;
    }
  }
  .login {
    cursor: pointer;
  }
  .email {
    float: right;
    display: block;
    text-align: center;
    padding: 17px 16px;
    color: white;
    font-size: 14px;
  }
  .icon {
    display: none;
  }
  .active {
    background-color: #4caf50;
    color: white;
  }

  .dropdown {
    float: right;
    overflow: hidden;
    .dropbtn {
      font-size: 17px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit;
      margin: 0;
    }
    &:hover .dropbtn {
      background-color: #555;
      color: white;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      &:hover {
        background-color: #ddd;
        color: black;
      }
    }
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
export default NavBar;
