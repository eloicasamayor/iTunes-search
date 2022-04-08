const apiEndpoint = "https://itunes.apple.com/search?";

export async function getSearch(term) {
  let searchResults = "";
  await fetch(`${apiEndpoint}media=music&term=${term}&limit=20`, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("SUCCESS");
      } else {
        console.log("Not successful");
      }
      return response.json();
    })
    .then((json) => {
      searchResults = json;
    })
    .catch((e) =>
      console.log("There was an error geting the data. ERROR: ", e)
    );
  return searchResults;
}
