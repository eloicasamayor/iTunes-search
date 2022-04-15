import { Button, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
export function Playing({ playing }) {
  const [audio, setAudio] = useState(null);
  const [playingBool, setPlayingBool] = useState(false);
  useEffect(() => {
    if (audio != null) {
      audio.pause();
    }
    setAudio(new Audio(playing.previewUrl));
  }, [playing]);

  useEffect(() => {
    if (audio != null) audio.play();
    setPlayingBool((t) => true);
  }, [audio]);

  useEffect(() => {
    if (audio != null) playingBool ? audio.play() : audio.pause();
  }, [playingBool]);

  useEffect(() => {
    if (audio != null) {
      audio.addEventListener("ended", () => setPlayingBool(false));
      return () => {
        audio.removeEventListener("ended", () => setPlayingBool(false));
      };
    }
  }, []);

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
          <ListItemAvatar className="playing-img">
            <Avatar
              className="playing-avatar"
              variant="square"
              alt="Remy Sharp"
              src={playing.artworkUrl100}
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
                {/* <audio controls src={playing.previewUrl}></audio> */}
                <IconButton onClick={() => setPlayingBool((p) => !p)}>
                  {!playingBool ? (
                    <PlayCircleFilledWhiteIcon />
                  ) : (
                    <PauseCircleFilledIcon />
                  )}
                </IconButton>
              </>
            }
          ></ListItemText>
        </ListItem>
      </div>
    </Paper>
  );
}
