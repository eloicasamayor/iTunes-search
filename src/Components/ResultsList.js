import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export function ResultsList({ searchResults }) {
  return (
    <>
      <List
        className="results-wrapper results-list"
        sx={{ width: "100%", bgcolor: "background.paper" }}
      >
        {searchResults.results.map((r, i) => (
          <>
            <ListItem alignItems="flex-start" key={i}>
              <ListItemAvatar className="results-list-img">
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src={r.artworkUrl100}
                  sx={{ width: 100, height: 100 }}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography gutterBottom variant="h6" component="div">
                    {r.artistName}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body1">{r.collectionName}</Typography>
                    <Typography variant="body2">{r.trackName}</Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
            <Divider variant="middle" component="li" />
          </>
        ))}
      </List>
    </>
  );
}
