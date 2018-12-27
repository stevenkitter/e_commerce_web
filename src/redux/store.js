import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import reducers from "./reducers/all";

const initialState = {};
const middleware = [thunk, logger];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
