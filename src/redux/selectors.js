export function selectResults(state) {
  return state.searchResponse;
}

export function selectLoading(state) {
  return state.loading;
}

export function selectSearchParams(state) {
  return state.searchParams;
}