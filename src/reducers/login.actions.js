import { LOGIN_SUCCESS } from "./login.types";
export const login = (username, password) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      user: {
        username,
        password
      }
    }
  });
};
