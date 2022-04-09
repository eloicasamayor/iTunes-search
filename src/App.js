import "./App.css";
import { useRef, useState } from "react";
import { getSearch } from "./api/apiCalls";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function App() {
  const inputRef = useRef();
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);
  async function submitSearch(e) {
    let searchResultsLoaded = "";
    e.preventDefault();
    console.log("searching", inputRef.current.value);
    setLoading((l) => true);
    searchResultsLoaded = await getSearch(inputRef.current.value);
    console.log("done");
    setSearchResults(searchResultsLoaded);
    setLoading((l) => false);
  }
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
                <p>{r.artistName}</p>
                <p>{r.collectionName}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
