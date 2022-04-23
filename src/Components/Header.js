import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { SearchForm } from "./SearchForm";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl, InputLabel, Paper, Typography } from "@mui/material";
import { useState } from "react";
export function Header({ loading, inputRef, submitSearch }) {
  const [viewSearchSettings, setViewSearchSettings] = useState(false);
  const [searchBy, setSearchBy] = useState("all");
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MusicNoteIcon fontSize="large" />
          <SearchForm
            loading={loading}
            inputRef={inputRef}
            submitSearch={submitSearch}
          />
          <FilterListIcon onClick={() => setViewSearchSettings((v) => !v)} />
        </Toolbar>
      </AppBar>
      {viewSearchSettings && (
        <Paper>
          <FormControl sx={{ m: 2 }}>
            <InputLabel>Search by:</InputLabel>
            <Select
              sx={{ width: 150 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              /* value={searchBy} */
              label="Search by..."
              onChange={(e) => {
                setSearchBy(e.value);
              }}
            >
              <MenuItem value="all">all</MenuItem>
              <MenuItem value="author">author</MenuItem>
              <MenuItem value="song">song</MenuItem>
              <MenuItem value="compositor">compositor</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      )}{" "}
    </>
  );
}
