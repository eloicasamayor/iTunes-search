import { ListItemAvatar, ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List, ListItem, Paper, Typography } from "@mui/material";
import { Tooltip } from "@mui/material";
import { limitText } from "../helpers/modifyTexts";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlbumIcon from "@mui/icons-material/Album";
import { useDispatch } from "react-redux";
import { replaceSuggestions } from "../redux";
import { requestResults } from "../redux";
import PersonIcon from "@mui/icons-material/Person";
export function SearchSuggestionsList({
  search,
  searchSuggestions,
  setInputContent,
  submitSearch,
}) {
  const dispatch = useDispatch();
  const searchSuggestion = (s) => {
    setInputContent(s);
    dispatch(replaceSuggestions({}));

    dispatch(requestResults(s, 20, 0));
  };
  if (searchSuggestions.results && searchSuggestions.results.length > 0) {
    return (
      <Box className="search-suggestions" sx={{ p: 0.2 }}>
        <List sx={{ width: "100%", bgcolor: "background.paper", pt: 0.2 }}>
          {searchSuggestions.results.map((s, i) => (
            <>
              <ListItem
                key={s.trackId}
                disablePadding
                secondaryAction={
                  <>
                    <Tooltip title={s.artistName}>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => searchSuggestion(s.artistName)}
                      >
                        <PersonIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={s.collectionName}>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => searchSuggestion(s.collectionName)}
                      >
                        <AlbumIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                }
              >
                <ListItemButton
                  onClick={(e) =>
                    searchSuggestion(
                      s.trackName + " " + s.collectionName + " " + s.artistName
                    )
                  }
                >
                  <ListItemAvatar sx={{ w: "40px", mr: 0.5 }}>
                    <img src={s.artworkUrl60} />
                  </ListItemAvatar>
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
                </ListItemButton>
              </ListItem>
              <Divider key={"div-" + i} />
            </>
          ))}
        </List>
      </Box>
    );
  } else {
    <p>no suggestions</p>;
  }
}
