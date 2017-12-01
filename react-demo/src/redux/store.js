import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import HomeReducer from "./reducer.js";

const store = createStore(HomeReducer,applyMiddleware(thunk,logger));

export default store;