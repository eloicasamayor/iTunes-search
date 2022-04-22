import { useDispatch, useSelector } from "react-redux";
import { selectSearchParams, requestResults } from "../redux";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
export function SearchMessage({ searchMessage, showRefreshButton }) {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);
  const tryAgain = () => {
    dispatch(requestResults(searchParams.term, 20, searchParams.offset));
  };
  return (
    <div id="searchMessageWrapper">
      <Typography variant="h6" align="center" style={{ marginBottom: "50px" }}>
        {searchMessage.message}
      </Typography>
      {showRefreshButton && (
        <Button onClick={() => tryAgain()}>try again</Button>
      )}
      {searchMessage.img !== undefined && (
        <img className="feedback-img" src={searchMessage.img} />
      )}
    </div>
  );
}
