import { Image, ListRounded } from "@mui/icons-material";
import { ListItemAvatar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { ListItemText } from "@mui/material";
import { List, ListItem, Paper, Typography } from "@mui/material";
import { limitText } from "../helpers/modifyTexts";
export function SearchSuggestionsList({ search, searchSuggestions }) {
  const searchSuggestion = () => {
    console.log("iep");
  };
  if (searchSuggestions.results && searchSuggestions.results.length > 0) {
    return (
      <Paper className="search-suggestions" sx={{ p: 0.2 }}>
        <List sx={{ width: "100%", bgcolor: "background.paper", pt: 0.2 }}>
          {searchSuggestions.results.map((s) => (
            <ListItem sx={{ p: 0.1 }} onClick={() => searchSuggestion()}>
              <ListItemAvatar sx={{ w: "40px", mr: 0.5 }}>
                <img src={s.artworkUrl60} />
              </ListItemAvatar>
              {/*  {limitText(s.trackName, 20) +
                "(" +
                limitText(s.collectionName, 20) +
                ") by " +
                limitText(s.artistName, 20)} */}
              <ListItemText
                primary={limitText(s.trackName, 32)}
                secondary={
                  <>
                    <span>{limitText(s.collectionName, 32)}</span>{" "}
                    <span>
                      by <b>{limitText(s.artistName, 32)}</b>
                    </span>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  } else {
    <p>no suggestions</p>;
  }
}
