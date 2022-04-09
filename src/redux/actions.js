export const REQUEST_RESULTS = "search/REQUEST_SEARCH_RESULTS";
export function requestResults(term) {
  return {
    type: REQUEST_RESULTS,
    term: term,
  };
}

export const REPLACE_RESULTS = "search/REPLACE_RESULTS";
export function replaceResults(results) {
  return {
    type: REPLACE_RESULTS,
    results,
  };
}

export const SET_LOADING = "search/SET_LOADING";
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading: loading,
  };
}
