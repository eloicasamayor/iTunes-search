import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reduceResults, reduceLoading, reduceSearchParams } from "./reducers";
import { searchMiddleware } from "./middleware";
const reducer = combineReducers({
  loading: reduceLoading,
  searchParams: reduceSearchParams,
  searchResponse: reduceResults,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(searchMiddleware))
);
