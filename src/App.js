import "./App.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestResults,
  selectLoading,
  selectResults,
  selectSearchParams,
} from "./redux";
import {
  SearchMessage,
  ResultsList,
  ResultsGrid,
  Pagination,
} from "./Components";
import { SearchForm } from "./Components/SearchForm";
export function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
}
function setMessage(loading, searchResults) {
  let msg = "";
  if (loading) msg = "Loading data...";
  if (searchResults == null || searchResults == undefined) {
    msg = "Oh no, something went wrong! :(";
  } else if (isEmpty(searchResults)) {
    msg = "Use the form to search for music";
  } else if (searchResults.resultCount === 0) {
    msg = "Sorry, there were no results for this search";
  }
  return msg;
}

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [listOrGridView, setListOrGridView] = useState(false);
  const searchResults = useSelector(selectResults);
  const loading = useSelector(selectLoading);
  const searchParams = useSelector(selectSearchParams);
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(requestResults(inputRef.current.value, 20, 0));
  };
  const changeSearchResultsPage = (value) => {
    dispatch(
      requestResults(
        inputRef.current.value,
        20,
        searchParams.offset + value * 20
      )
    );
  };
  let message = "";
  message = setMessage(loading, searchResults);
  return (
    <div className="App">
      <header className="App-header">iTunes music</header>
      <main>
        <SearchForm inputRef={inputRef} submitSearch={submitSearch} />
        {searchResults != null &&
          searchResults.resultCount !== 0 &&
          searchParams.term !== "" && (
            <Pagination
              changeSearchResultsPage={changeSearchResultsPage}
              searchParams={searchParams}
              searchResults={searchResults}
            />
          )}

        <pre>{JSON.stringify(searchResults)}</pre>
        <input
          onChange={() => {
            setListOrGridView((v) => !v);
          }}
          type="checkbox"
          id="listViewCheckbox"
          checked={listOrGridView}
        ></input>
        <label htmlFor="listViewCheckbox">List View / card view</label>
        {loading ||
        isEmpty(searchResults) ||
        searchResults.resultCount === 0 ? (
          <SearchMessage
            message={message}
            showRefreshButton={searchResults == null}
          />
        ) : listOrGridView ? (
          <ResultsList searchResults={searchResults} />
        ) : (
          <ResultsGrid searchResults={searchResults} />
        )}
      </main>
    </div>
  );
}

export default App;
