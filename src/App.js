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
import loadingImg from "./media/undraw_loading.svg";
import notFoundImg from "./media/undraw_not_found.svg";
import questionImg from "./media/undraw_question.svg";
import serverDownImg from "./media/undraw_server_down.svg";
import serverImg from "./media/undraw_server.svg";
import startImg from "./media/undraw_start.svg";
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
      setSearchMessage((m) => ({
        message: "Loading...",
        img: loadingImg,
      }));
    } else if (searchResults == null || searchResults == undefined) {
      setSearchMessage((m) => ({
        message: "Oh, no! Something went wrong! :(",
        img: questionImg,
      }));
    } else if (isEmpty(searchResults) || searchParams.term === "") {
      setSearchMessage((m) => ({
        message: "Use the form to search for music",
        img: startImg,
      }));
    } else if (searchResults.resultCount === 0) {
      setSearchMessage((m) => ({
        message: "Sorry, there were no results for this search",
        img: notFoundImg,
      }));
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
        {searchMessage === "" ? (
          <>
            <div style={{ display: "flex" }}>
              <Pagination
                changeSearchResultsPage={changeSearchResultsPage}
                searchParams={searchParams}
                searchResults={searchResults}
              />
              <ResultsViewSwitch
                listOrGridView={listOrGridView}
                setListOrGridView={setListOrGridView}
              />
            </div>
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
