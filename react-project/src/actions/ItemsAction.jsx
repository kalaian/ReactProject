import { FETCH_HEROES } from "../types/constants";

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
