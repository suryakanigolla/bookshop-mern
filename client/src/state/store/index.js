import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "contentReducer"],
};
const persisReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persisReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { persistor, store };
