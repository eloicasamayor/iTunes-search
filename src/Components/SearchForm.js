import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CircularProgress from "@mui/material/CircularProgress";

import { styled, alpha } from "@mui/material/styles";
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.25),
  },
  marginRight: "6.5%",
  marginLeft: "2.5%",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "1.3em",
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: 0,
    paddingLeft: theme.spacing(4),
  },
}));
export function SearchForm({ loading, inputRef, submitSearch }) {
  return (
    <form onSubmit={(e) => submitSearch(e)} style={{ flex: "1" }}>
      <Search>
        <StyledInputBase
          fullWidth
          placeholder="Search music"
          inputRef={inputRef}
        />
        <IconButton
          color="primary"
          size="large"
          onClick={() => {
            console.log("hola");
          }}
        ></IconButton>
        <IconButton color="primary" type="submit" size="large">
          {loading ? <CircularProgress size="24px" /> : <SearchIcon />}
        </IconButton>
      </Search>
    </form>
  );
}
