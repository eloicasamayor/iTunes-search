import { useDispatch, useSelector } from "react-redux";
import { selectSearchParams, requestResults } from "../redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export function SearchMessage({ searchMessage, showRefreshButton, loading }) {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);
  const tryAgain = () => {
    dispatch(requestResults(searchParams.term, 20, searchParams.offset));
  };
  return (
    <div id="searchMessageWrapper">
      <Typography align="center">{searchMessage}</Typography>
      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "50px" }}
        >
          <CircularProgress />
        </Box>
      )}
      {showRefreshButton && (
        <button onClick={() => tryAgain()}>try again</button>
      )}{" "}
    </div>
  );
}
