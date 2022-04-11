import "./App.css";
import { useRef, useState, useEffect } from "react";
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
  Header,
} from "./Components";
import { ResultsViewSwitch } from "./Components/ResultsViewSwitch";
export function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [listOrGridView, setListOrGridView] = useState(false);
  const [searchMessage, setSearchMessage] = useState(
    "Use the form to search for music"
  );
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

  function setMessage(loading, searchResults) {
    if (loading) {
      setSearchMessage((m) => "Loading data...");
    } else if (searchResults == null || searchResults == undefined) {
      setSearchMessage((m) => "Oh no, something went wrong! :(");
    } else if (isEmpty(searchResults) || searchParams.term === "") {
      setSearchMessage((m) => "Use the form to search for music");
    } else if (searchResults.resultCount === 0) {
      setSearchMessage((m) => "Sorry, there were no results for this search");
    } else {
      setSearchMessage((m) => "");
    }
  }
  useEffect(() => {
    setMessage(loading, searchResults);
  }, [loading, searchResults]);

  return (
    <div className="App">
      <Header inputRef={inputRef} submitSearch={submitSearch} />
      <main>
        {searchResults != null &&
          searchResults.resultCount !== 0 &&
          searchParams.term !== "" && (
            <Pagination
              changeSearchResultsPage={changeSearchResultsPage}
              searchParams={searchParams}
              searchResults={searchResults}
            />
          )}
        {/*<pre>{JSON.stringify(searchResults)}</pre>*/}
        {searchMessage === "" ? (
          <>
            <ResultsViewSwitch
              listOrGridView={listOrGridView}
              setListOrGridView={setListOrGridView}
            />
            {listOrGridView ? (
              <ResultsList searchResults={searchResults} />
            ) : (
              <ResultsGrid searchResults={searchResults} />
            )}
          </>
        ) : (
          <SearchMessage
            searchMessage={searchMessage}
            showRefreshButton={searchResults == null}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
}

export default App;
