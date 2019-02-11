import React, { Component } from "react";
import ItemCard from "./ItemCard";
import Auth from "./Auth";
import { connect } from "react-redux";
import { fetchHeroes } from "../actions/ItemsAction";

class CardList extends Component {
  componentDidMount() {
    Auth.handleAuthentication();

    this.props.fetchHeroes();
  }

  render() {
    return (
      <>
        {this.props.heroes.map(result => (
          <ItemCard key={fetch.results} {...result} />
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.items
});

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(CardList);
