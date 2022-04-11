import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { SearchForm } from "./SearchForm";

export function Header({ inputRef, submitSearch }) {
  return (
    <AppBar position="static">
      <Toolbar>
        {/*         <h1>Search music</h1>
         */}{" "}
        <MusicNoteIcon fontSize="large" />
        <SearchForm inputRef={inputRef} submitSearch={submitSearch} />
      </Toolbar>
    </AppBar>
  );
}
