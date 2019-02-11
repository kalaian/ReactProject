import {
  FETCH_HEROES,
  FETCH_HEROES_DETAILS,
  FETCH_FAVS
} from "../types/constants";

const initialState = {
  items: [],
  results: [],
  image: [],
  finalResults: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        items: action.payload
      };

    case FETCH_HEROES_DETAILS:
      return {
        ...state,
        results: action.results,
        image: action.image
      };

    case FETCH_FAVS:
      return {
        ...state,
        results: action.results,
        image: action.image,
        finalResults: action.finalResults
      };

    default:
      return state;
  }
};
