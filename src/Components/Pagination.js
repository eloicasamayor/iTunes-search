export function Pagination({
  changeSearchResultsPage,
  searchParams,
  searchResults,
}) {
  return (
    <>
      <button
        onClick={() => changeSearchResultsPage(-1)}
        disabled={searchParams.offset === 0}
      >
        previous page
      </button>

      <button
        onClick={() => changeSearchResultsPage(+1)}
        disabled={searchResults.resultCount < 20}
      >
        next page
      </button>
    </>
  );
}
