import loadingImg from "../media/undraw_loading.svg";
import notFoundImg from "../media/undraw_not_found.svg";
import questionImg from "../media/undraw_question.svg";
import serverDownImg from "../media/undraw_server_down.svg";
import serverImg from "../media/undraw_server.svg";
import startImg from "../media/undraw_start.svg";
import { isEmpty } from "./compareObject";
export function setFeedbackMessage(loading, searchResults, searchParams) {
  if (loading) {
    return {
      message: "Loading...",
      img: loadingImg,
    };
  } else if (searchResults == null || searchResults == undefined) {
    return {
      message: "Oh, no! Something went wrong! :(",
      img: questionImg,
    };
  } else if (isEmpty(searchResults) || searchParams.term === "") {
    return {
      message: "Use the form to search for music",
      img: startImg,
    };
  } else if (searchResults.resultCount === 0) {
    return {
      message: "Sorry, there were no results for this search",
      img: notFoundImg,
    };
  } else {
    return "";
  }
}
