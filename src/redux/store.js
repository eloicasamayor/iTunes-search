import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  reduceResults,
  reduceLoading,
  reduceSearchParams,
  reduceSearchSuggestions,
  searchMiddleware,
} from "./";
import { reducePlaying } from "./reducers";
const reducer = combineReducers({
  loading: reduceLoading,
  playing: reducePlaying,
  searchParams: reduceSearchParams,
  searchSuggestions: reduceSearchSuggestions,
  searchResponse: reduceResults,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(searchMiddleware))
);
