import { Paper, Typography } from "@mui/material";
export function SearchSuggestionsList({ search }) {
  return (
    <Paper className="search-suggestions">
      <Typography>suggestions</Typography>
      <ul>
        <li>{search}</li>
      </ul>
    </Paper>
  );
}
