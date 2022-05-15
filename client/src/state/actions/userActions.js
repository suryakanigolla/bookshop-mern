import * as api from "api";

export const login = (loginBody) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    const response = await api.login(loginBody);
    dispatch({ type: "TOGGLE_LOADING", payload: false });
    if (response.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = (registerBody) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    const response = await api.register(registerBody);
    dispatch({ type: "TOGGLE_LOADING", payload: false });
    if (response.status === 201) {
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = (logoutBody) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    const response = await api.logout(logoutBody);
    dispatch({ type: "TOGGLE_LOADING", payload: false });
    if (response.status === 204) {
      dispatch({
        type: "LOGOUT",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = (refreshTokenBody) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    const response = await api.refreshTokens(refreshTokenBody);
    dispatch({ type: "TOGGLE_LOADING", payload: false });
    if (response.status === 200) {
      dispatch({
        type: "REFRESH_TOKENS",
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
