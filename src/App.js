import "./App.css";
import { useRef, useState } from "react";
import { getSearch } from "./api/apiCalls";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function App() {
  const inputRef = useRef();
  const [searchResults, setSearchResults] = useState({});
  async function submitSearch(e) {
    e.preventDefault();
    console.log("searching", inputRef.current.value);
    setSearchResults(await getSearch(inputRef.current.value));
  }
  return (
    <div className="App">
      <header className="App-header">iTunes music</header>
      <main>
        <form onSubmit={(e) => submitSearch(e)}>
          <input type="text" ref={inputRef} />
          <input type="submit" value="search" />
        </form>
        {!isEmpty(searchResults) && (
          <ul>
            {searchResults.results.map((r, i) => (
              <li>
                <pre>{JSON.stringify(r)}</pre>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
