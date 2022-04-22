import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { SearchForm } from "./SearchForm";

export function Header({ loading, inputRef, submitSearch }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <MusicNoteIcon fontSize="large" />
        <SearchForm
          loading={loading}
          inputRef={inputRef}
          submitSearch={submitSearch}
        />
      </Toolbar>
    </AppBar>
  );
}
