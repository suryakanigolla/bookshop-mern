import * as api from "api";

export const getBooks = () => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: true });
    const response = await api.getBooks();
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: false });
    if (response.status === 200) {
      dispatch({
        type: "GET_BOOKS",
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
