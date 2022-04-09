import "./App.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestResults } from "./redux/actions";
import { selectLoading, selectResults } from "./redux/selectors";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const searchResults = useSelector(selectResults);
  const loading = useSelector(selectLoading);
  const submitSearch = (e) => {
    e.preventDefault();

    console.log("principi", inputRef.current.value);
    dispatch(requestResults(inputRef.current.value));
  };
  return (
    <div className="App">
      <header className="App-header">iTunes music</header>
      <main>
        <form onSubmit={(e) => submitSearch(e)}>
          <input type="text" ref={inputRef} />
          <input type="submit" value="search" />
        </form>
        {loading ? (
          <p>loading data...</p>
        ) : isEmpty(searchResults) ? (
          <p>Oh, no! Something went wrong! </p>
        ) : searchResults.resultCount === 0 ? (
          <p>Sorry, there were no results for this search.</p>
        ) : (
          <ul>
            {searchResults.results.map((r, i) => (
              <li>
                <img src={r.artworkUrl100} />
                <p>
                  <b>artist:</b> {r.artistName}
                </p>
                <p>
                  <b>collection:</b> {r.collectionName}
                </p>
                <p>
                  <b>track:</b> {r.trackName}
                </p>
                {/* <pre>{JSON.stringify(r)}</pre> */}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
