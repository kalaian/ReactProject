import {
  FETCH_HEROES,
  FETCH_HEROES_DETAILS,
  FETCH_FAVS
} from "../types/constants";

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

export const fetchHeroesDetails = id => dispatch => {
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=80a0c3d7955eb762515f55d1412ed8cb`
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

export const fetchFavs = () => dispatch => {
  const idFromStorage = JSON.parse(localStorage.getItem("hero_ids"));

  for (let key in idFromStorage) {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${
        idFromStorage[key]
      }?apikey=80a0c3d7955eb762515f55d1412ed8cb`
    )
      .then(response => response.json())
      .then(heroes =>
        dispatch({
          type: FETCH_FAVS,
          results: heroes.data.results[0],
          image: heroes.data.results[0].thumbnail,
          finalResults: heroes.data.results
        })
      );
  }
};
