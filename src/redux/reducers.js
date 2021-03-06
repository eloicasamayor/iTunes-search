import {
  REPLACE_RESULTS,
  SET_LOADING,
  SET_PLAYING,
  SET_SEARCH_PARAMS,
  REPLACE_SUGGESTIONS,
} from "./actions";

const initialState = {};

export function reduceResults(state = initialState, action) {
  switch (action.type) {
    case REPLACE_RESULTS: {
      return action.results;
    }
    default:
      return state;
  }
}
export function reduceSearchSuggestions(state = initialState, action) {
  switch (action.type) {
    case REPLACE_SUGGESTIONS: {
      return action.suggestions;
    }
    default:
      return state;
  }
}

export function reduceLoading(state = false, action) {
  switch (action.type) {
    case SET_LOADING: {
      return action.loading;
    }
    default:
      return state;
  }
}

const initialParams = { limit: 20, offset: 0, term: "" };

export function reduceSearchParams(state = initialParams, action) {
  switch (action.type) {
    case SET_SEARCH_PARAMS: {
      return action.searchParams;
    }
    default:
      return state;
  }
}

export function reducePlaying(state = {}, action) {
  switch (action.type) {
    case SET_PLAYING: {
      return action.playing;
    }
    default:
      return state;
  }
}
