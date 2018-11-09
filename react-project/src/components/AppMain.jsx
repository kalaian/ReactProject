import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Routes from './Routes'


class AppMain extends Component {
  render() {
    return (
      <StyledItemsPage>
        <NavBar />
        <Routes />
      </StyledItemsPage>
    );
  }
}

const StyledItemsPage = styled.div``;
export default AppMain;
