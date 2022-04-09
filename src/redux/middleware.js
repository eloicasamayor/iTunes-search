import { getSearch } from "../api/apiCalls";
import { replaceResults, REQUEST_RESULTS, setLoading } from "./actions";

export const searchMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_RESULTS) {
    store.dispatch(setLoading(true));
    const results = await getSearch(action.term);
    store.dispatch(replaceResults(results));
    store.dispatch(setLoading(false));
  }
};
