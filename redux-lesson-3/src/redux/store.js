import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducers";
import logger from "redux-logger";

const store = createStore(cakeReducer, applyMiddleware(logger));

export default store;
