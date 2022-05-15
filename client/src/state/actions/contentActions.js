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

export const updateCart = (book, updateAction) => (dispatch) => {
  try {
    dispatch({ type: "CART_UPDATE", payload: { book, updateAction } });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (orderBody, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: true });
    const response = await api.createOrder(orderBody);
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: false });
    if (response.status === 201) {
      dispatch({type: "CART_REFRESH"})
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: true });
    const response = await api.getOrders();
    dispatch({ type: "TOGGLE_CONTENT_LOADING", payload: false });
    if (response.status === 200) {
      dispatch({
        type: "GET_ORDERS",
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
