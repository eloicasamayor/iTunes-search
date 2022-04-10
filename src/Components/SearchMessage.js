import { useDispatch, useSelector } from "react-redux";
import { selectSearchParams } from "../redux/selectors";
import { requestResults } from "../redux/actions";
export function SearchMessage({ message, showRefreshButton }) {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);
  const tryAgain = () => {
    dispatch(requestResults(searchParams.term, 20, searchParams.offset));
  };
  return (
    <>
      <p>{message}</p>
      {showRefreshButton && (
        <button onClick={() => tryAgain()}>try again</button>
      )}{" "}
    </>
  );
}
