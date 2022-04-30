import { getSearch } from "../api/apiCalls";
import { isEmpty } from "../helpers/compareObject";
import {
  replaceResults,
  replaceSuggestions,
  REQUEST_RESULTS,
  REQUEST_SUGGESTIONS,
  setLoading,
  setSearchParams,
} from "./actions";

export const searchMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_RESULTS) {
    store.dispatch(setLoading(true));
    const results = await getSearch(action.term, action.limit, action.offset);
    if (isEmpty(results) === true) {
      store.dispatch(replaceResults(null));
    } else {
      store.dispatch(replaceResults(results));
    }
    store.dispatch(setSearchParams(action.term, action.limit, action.offset));
    store.dispatch(setLoading(false));
  }
  if (action.type === REQUEST_SUGGESTIONS) {
    //store.dispatch(setLoading(true));
    const results = await getSearch(action.term, action.limit, action.offset);
    if (isEmpty(results) === true) {
      store.dispatch(replaceSuggestions(null));
    } else {
      store.dispatch(replaceSuggestions(results));
    }
    //store.dispatch(setSearchParams(action.term, action.limit, action.offset));
    //store.dispatch(setLoading(false));
  }
};
