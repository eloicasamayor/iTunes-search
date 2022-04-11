import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export function Pagination({
  changeSearchResultsPage,
  searchParams,
  searchResults,
}) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        className="change-page-btn"
        onClick={() => changeSearchResultsPage(-1)}
        disabled={searchParams.offset === 0}
        startIcon={<NavigateBeforeIcon />}
      >
        previous page
      </Button>

      <Button
        className="change-page-btn"
        onClick={() => changeSearchResultsPage(+1)}
        disabled={searchResults.resultCount < 20}
        endIcon={<NavigateNextIcon />}
      >
        next page
      </Button>
    </ButtonGroup>
  );
}
