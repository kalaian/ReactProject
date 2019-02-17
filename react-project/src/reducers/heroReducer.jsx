import {
  FETCH_HEROES,
  FETCH_HEROES_DETAILS,
  FETCH_FAVS
} from "../types/constants";

const initialState = {
  items: [],
  hero: [],
  data: [],
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
        hero: action.hero,
        image: action.image
      };

    case FETCH_FAVS:
      return {
        ...state,
        hero: action.hero,
        image: action.image,
        data: action.data
      };

    default:
      return state;
  }
};
