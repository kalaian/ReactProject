import React, { Component } from "react";
import ItemCard from './ItemCard';

export default class CardList extends Component {
  render() {
    return (
      <div>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
      </div>
    );
  }
}
