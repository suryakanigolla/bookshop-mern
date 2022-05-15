const initialState = {
  books: null,
  currentBook: null,
  isLoading: null,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "TOGGLE_CONTENT_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
