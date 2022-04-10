import "./App.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
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
} from "./Components";
import { SearchForm } from "./Components/SearchForm";
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
  const [searchMessage, setSearchMessage] = useState("");
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
    } else if (isEmpty(searchResults)) {
      setSearchMessage((m) => "Use the form to search for music");
    } else if (searchResults.resultCount === 0) {
      setSearchMessage((m) => "Sorry, there were no results for this search");
    }
  }
  useEffect(() => {
    setMessage(loading, searchResults);
  }, [loading, searchResults]);

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

        <ToggleButtonGroup
          color="primary"
          value={true}
          exclusive
          onChange={() => {
            setListOrGridView((v) => !v);
          }}
        >
          <ToggleButton value={listOrGridView} title="List View">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value={!listOrGridView} title="Grid View">
            {" "}
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        {loading ||
        isEmpty(searchResults) ||
        searchResults.resultCount === 0 ? (
          <SearchMessage
            searchMessage={searchMessage}
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
