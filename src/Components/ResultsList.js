export function ResultsList({ searchResults }) {
  return (
    <>
      <h2>List view</h2>
      <ul>
        {searchResults.results.map((r, i) => (
          <li key={i}>
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
    </>
  );
}
