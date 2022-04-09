import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reduceResults, reduceLoading } from "./reducers";
import { searchMiddleware } from "./middleware";
const reducer = combineReducers({
  loading: reduceLoading,
  searchResponse: reduceResults,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(searchMiddleware))
);
