import { combineReducers } from "redux";
import { QuantityReducer } from "./quantityreducer";

export const Reducers = combineReducers({
    quantity: QuantityReducer
})