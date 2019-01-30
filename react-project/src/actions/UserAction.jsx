export const loginUser = payload => dispatch => {
  return dispatch({ type: LOGIN_USER, payload });
};
export const registerUser = payload => dispatch => {
  return dispatch({ type: REGISTER_USER, payload });
};
