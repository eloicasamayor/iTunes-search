import "./App.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { setFeedbackMessage } from "./helpers/feedbackMessages";
import { isEmpty } from "./helpers/compareObject";
import {
  replaceSuggestions,
  requestResults,
  selectLoading,
  selectPlaying,
  selectResults,
  selectSearchParams,
} from "./redux";
import {
  SearchMessage,
  ResultsList,
  ResultsGrid,
  Pagination,
  Header,
  Footer,
  Playing,
} from "./Components";
import { ResultsViewSwitch } from "./Components/ResultsViewSwitch";

const INITIAL_SEARCH_MESSAGE = "Use the form to search for music";
function App() {
  const [inputContent, setInputContent] = useState("");
  const dispatch = useDispatch();
  const [listOrGridView, setListOrGridView] = useState(false);
  const [searchMessage, setSearchMessage] = useState(INITIAL_SEARCH_MESSAGE);
  const searchResults = useSelector(selectResults);
  const loading = useSelector(selectLoading);
  const searchParams = useSelector(selectSearchParams);
  const playing = useSelector(selectPlaying);
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(requestResults(inputContent, 20, 0));
    dispatch(replaceSuggestions({}));
  };
  const changeSearchResultsPage = (value) => {
    dispatch(
      requestResults(inputContent, 20, searchParams.offset + value * 20)
    );
  };

  useEffect(() => {
    setSearchMessage(setFeedbackMessage(loading, searchResults, searchParams));
  }, [loading, searchResults]);

  return (
    <div className="App">
      <Header
        loading={loading}
        inputContent={inputContent}
        setInputContent={setInputContent}
        submitSearch={submitSearch}
      />
      <main>
        {searchMessage === "" ? (
          <>
            <Paper className="searchViewControls" elevation={0}>
              <Pagination
                changeSearchResultsPage={changeSearchResultsPage}
                searchParams={searchParams}
                searchResults={searchResults}
              />
              <ResultsViewSwitch
                listOrGridView={listOrGridView}
                setListOrGridView={setListOrGridView}
              />
            </Paper>
            <h2>{`Search results for"${searchParams.term}"`}</h2>
            {listOrGridView ? (
              <ResultsList searchResults={searchResults} playing={playing} />
            ) : (
              <ResultsGrid searchResults={searchResults} playing={playing} />
            )}
            <Paper className="searchViewControls" elevation={0}>
              <Pagination
                changeSearchResultsPage={changeSearchResultsPage}
                searchParams={searchParams}
                searchResults={searchResults}
              />
              <ResultsViewSwitch
                listOrGridView={listOrGridView}
                setListOrGridView={setListOrGridView}
              />
            </Paper>
          </>
        ) : (
          <SearchMessage
            searchMessage={searchMessage}
            showRefreshButton={searchResults == null}
          />
        )}
      </main>
      {!isEmpty(playing) && (
        <aside>
          <Playing playing={playing} />
        </aside>
      )}

      <Footer />
    </div>
  );
}

export default App;
