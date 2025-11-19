// redux/reducers/rootReducer.ts
import { combineReducers } from "redux";
import productReducer from "./productReducer"; // IMPORTANT: default import

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
