import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducers";

const store = createStore(cakeReducer);

export default store;
