import { SearchForm } from "./SearchForm";
export function Header({ inputRef, submitSearch }) {
  return (
    <header>
      <h1>iTunes search</h1>
      <SearchForm inputRef={inputRef} submitSearch={submitSearch} />
    </header>
  );
}
