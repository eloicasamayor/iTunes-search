import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
export function SearchForm({ inputRef, submitSearch }) {
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={(e) => submitSearch(e)}>
        <TextField
          id="outlined-basic"
          label="Search music"
          variant="outlined"
          inputRef={inputRef}
        />
        {/* <input type="text" ref={inputRef} /> */}
        {/*  <input type="submit" value="search" /> */}
        <IconButton color="primary" type="submit" size="large">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}
