import { REPLACE_RESULTS, SET_LOADING } from "./actions";

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

export function reduceLoading(state = false, action) {
  switch (action.type) {
    case SET_LOADING: {
      return action.loading;
    }
    default:
      return state;
  }
}
