import { FETCH_HEROES, FETCH_HEROES_DETAILS } from "../types/constants";

const initialState = {
  items: [],
  results: [],
  image: []
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
        results: action.payload,
        image: action.payload
      };

    default:
      return state;
  }
};
