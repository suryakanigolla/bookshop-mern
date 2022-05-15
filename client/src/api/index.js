import axios from "axios";
import { store } from "state/store/";

const apiUrl = "http://localhost:5000/v1";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (req) => {
    const state = store.getState();
    const token = state.userReducer.accessToken;
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    return err;
  }
);

// Content Api
export const getBooks = () => axiosInstance.get("/books");
export const createOrder = (orderBody) =>
  axiosInstance.post("/orders", orderBody);
export const getOrders = () => axiosInstance.get("/orders");

// User Api
export const register = (registerBody) =>
  axiosInstance.post("/auth/register", registerBody);
export const login = (loginBody) =>
  axiosInstance.post("/auth/login", loginBody);
export const logout = (logoutBody) =>
  axiosInstance.post("/auth/logout", logoutBody);
export const refreshTokens = (refreshTokensBody) =>
  axiosInstance.post("/auth/refresh-tokens", refreshTokensBody);
