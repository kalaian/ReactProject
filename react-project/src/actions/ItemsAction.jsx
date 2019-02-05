import { FETCH_HEROES, FETCH_HEROES_DETAILS } from "../types/constants";

export const fetchHeroes = () => dispatch => {
  fetch(
    "https://gateway.marvel.com/v1/public/characters?apikey=80a0c3d7955eb762515f55d1412ed8cb"
  )
    .then(response => response.json())
    .then(heroes =>
      dispatch({
        type: FETCH_HEROES,
        payload: heroes.data.results
      })
    );
};

export const fetchHeroesDetails = () => dispatch => {
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${
      this.props.match.params.id
    }?apikey=80a0c3d7955eb762515f55d1412ed8cb`
  )
    .then(response => response.json())
    .then(heroes =>
      dispatch({
        type: FETCH_HEROES_DETAILS,
        results: heroes.data.results[0].comics,
        image: heroes.data.results[0].thumbnail
      })
    );
};
