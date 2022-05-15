const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isLoggedIn: null,
  isLoading: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.tokens.access.token,
        refreshToken: action.payload.tokens.refresh.token,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        accessToken: null,
        refreshToken: null,
        isLoggedIn: null,
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
