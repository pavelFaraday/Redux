import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducers";
import logger from "redux-logger";

//
// For Redux DevTools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	cakeReducer,
	composeWithDevTools(applyMiddleware(logger))
);

export default store;
