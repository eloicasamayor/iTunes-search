export const REQUEST_RESULTS = "search/REQUEST_SEARCH_RESULTS";
export function requestResults(term, limit, offset) {
  return {
    type: REQUEST_RESULTS,
    term: term,
    limit: limit,
    offset: offset,
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

export const SET_PLAYING = "search/SET_PLAYING";
export function setPlaying(playing) {
  return {
    type: SET_PLAYING,
    playing: playing,
  };
}

export const SET_SEARCH_PARAMS = "search/SET_SEARCH_PARAMS";
export function setSearchParams(term, limit, offset) {
  return {
    type: SET_SEARCH_PARAMS,
    searchParams: { term: term, limit: limit, offset: offset },
  };
}
