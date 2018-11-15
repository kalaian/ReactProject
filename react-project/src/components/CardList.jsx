import React, { Component } from 'react';
import ItemCard from './ItemCard';

export default class CardList extends Component {
	state = {
		results: []
	};
	componentWillMount() {
		this.loadCharacters();
	}

	loadCharacters = () => {
		fetch('https://gateway.marvel.com/v1/public/characters?apikey=80a0c3d7955eb762515f55d1412ed8cb')
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					results: json.data.results
				})
			);
	};

	render() {
		return <div>{this.state.results.map((result) => <ItemCard {...result} />)}</div>;
	}
}
