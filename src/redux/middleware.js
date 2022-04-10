import { getSearch } from "../api/apiCalls";
import { isEmpty } from "../App";
import {
  replaceResults,
  REQUEST_RESULTS,
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
    console.log(action.term, action.limit, action.offset);
    store.dispatch(setSearchParams(action.term, action.limit, action.offset));
    store.dispatch(setLoading(false));
  }
};
