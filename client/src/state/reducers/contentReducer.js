const initialState = {
  books: [],
  orders: [],
  cart: [],
  isLoading: null,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "TOGGLE_CONTENT_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "CART_REFRESH":
      return {
        ...state,
        cart: [],
      };
    case "CART_UPDATE":
      if (action.payload.updateAction === "add") {
        return {
          ...state,
          cart: [...state.cart, action.payload.book],
        };
      } else if (action.payload.updateAction === "remove") {
        return {
          ...state,
          cart: state.cart.filter((book) => book !== action.payload.book),
        };
      }
      break;

    default:
      return state;
  }
};

export default contentReducer;
