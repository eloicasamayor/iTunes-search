export function SearchForm({ inputRef, submitSearch }) {
  return (
    <form onSubmit={(e) => submitSearch(e)}>
      <input type="text" ref={inputRef} />
      <input type="submit" value="search" />
    </form>
  );
}
