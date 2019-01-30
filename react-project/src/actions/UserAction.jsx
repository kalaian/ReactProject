import { LOGIN_USER, REGISTER_USER } from "../store/constants";

export const loginUser = payload => dispatch => {
  return dispatch({ type: LOGIN_USER, payload });
};
export const registerUser = payload => dispatch => {
  return dispatch({ type: REGISTER_USER, payload });
};
