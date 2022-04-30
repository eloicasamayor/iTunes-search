import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CircularProgress from "@mui/material/CircularProgress";
import { SearchSuggestionsList } from "./SearchSuggestionsList";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { requestSuggestions, selectSearchSuggestions } from "../redux";
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
export function SearchForm({
  loading,
  inputContent,
  setInputContent,
  submitSearch,
}) {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector(selectSearchSuggestions);
  return (
    <form onSubmit={(e) => submitSearch(e)} style={{ flex: "1" }}>
      <Search>
        <StyledInputBase
          fullWidth
          placeholder="Search music"
          value={inputContent}
          /* inputRef={inputRef} */
          onChange={(e) => {
            dispatch(requestSuggestions(e.target.value, 5, 0));
            setInputContent(e.target.value);
          }}
        />
        {inputContent !== "" && (
          <IconButton
            color="primary"
            size="large"
            onClick={() => {
              setInputContent("");
            }}
          >
            <CancelIcon />
          </IconButton>
        )}
        <IconButton color="default" type="submit" size="large">
          {loading ? <CircularProgress size="24px" /> : <SearchIcon />}
        </IconButton>
      </Search>
      {inputContent !== "" && inputContent.length > 3 && searchSuggestions && (
        <SearchSuggestionsList
          search={inputContent}
          searchSuggestions={searchSuggestions}
          setInputContent={setInputContent}
          submitSearch={submitSearch}
        />
      )}
    </form>
  );
}
