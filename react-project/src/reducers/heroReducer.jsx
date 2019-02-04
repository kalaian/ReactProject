import { FETCH_HEROES } from "../types/constants";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
