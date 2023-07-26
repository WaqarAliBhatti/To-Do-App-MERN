import { combineReducers } from "redux";
import { operationReducer } from "./reducer/operations";

export const rootReducer= combineReducers({
    operationReducer,
})