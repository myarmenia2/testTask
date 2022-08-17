import { combineReducers } from "redux";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";

export const reducer = combineReducers({
  login: loginReducer,
  products: productReducer
});

export type RootState = ReturnType<typeof reducer>;