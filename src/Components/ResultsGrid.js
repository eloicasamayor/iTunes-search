export function ResultsGrid({ searchResults }) {
  return (
    <>
      <h2>Grid view</h2>
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
          </li>
        ))}
      </ul>
    </>
  );
}
