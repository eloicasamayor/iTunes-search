import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
export function Playing({ playing }) {
  return (
    <Paper
      elevation={10}
      style={{
        display: "flex",
        flexDirection: "column",
        zIndex: 3,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <div style={{ margin: "auto" }}>
        <ListItem alignItems="flex-start" style={{ padding: "3px" }}>
          <ListItemAvatar className="results-list-img">
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src={playing.artworkUrl100}
              sx={{ width: 100, height: 100 }}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ margin: 0 }}
            disableTypography
            primary={
              <Typography gutterBottom variant="h6" component="div" margin={0}>
                {playing.artistName}
              </Typography>
            }
            secondary={
              <>
                <Typography variant="body1">
                  {playing.collectionName}
                </Typography>
                <Typography variant="body2">{playing.trackName}</Typography>
                <audio controls src={playing.previewUrl}></audio>
              </>
            }
          ></ListItemText>
        </ListItem>
      </div>
    </Paper>
  );
}
