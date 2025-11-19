// redux/reducers/rootReducer.ts
import { combineReducers } from "redux";
import productReducer from "./productReducer"; // IMPORTANT: default import
import storeReducer from "./storeReducer";

const rootReducer = combineReducers({
  products: productReducer,
  stores: storeReducer,
});

export default rootReducer;
