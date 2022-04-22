import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, Tooltip } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { setPlaying } from "../redux";
import { useDispatch } from "react-redux";
import { limitText } from "../helpers/modifyTexts";
export function ResultsGrid({ searchResults, playing }) {
  const dispatch = useDispatch();
  return (
    <>
      <Grid
        className="results-wrapper results-grid"
        container
        spacing={{ xs: 2, md: 3 }}
      >
        {searchResults.results.map((r, i) => (
          <Grid
            item
            key={i}
            className="search-results-grid-item"
            xs={6}
            sm={4.5}
            md={3}
            xl={1.8}
            height="100%"
          >
            <Card key={i} sx={{ m: 0.2 }}>
              <CardMedia
                component="img"
                height="152px"
                image={r.artworkUrl100}
                alt={r.collectionName + "artwork"}
              />
              <CardContent sx={{ m: 0, p: 0.95 }}>
                <Tooltip title={r.artistName}>
                  <Typography gutterBottom variant="overline" component="div">
                    {limitText(r.artistName, 17)}
                  </Typography>
                </Tooltip>
                <Typography variant="subtitle2" color="text.secondary">
                  {limitText(r.collectionName, 20)}
                </Typography>

                <Typography variant="body2" color="#888">
                  {limitText(r.trackName, 19)}
                </Typography>
                {playing.previewUrl === r.previewUrl ? (
                  <Typography variant="body1">
                    PLAYING
                    <MusicNoteIcon />
                  </Typography>
                ) : (
                  <Button onClick={() => dispatch(setPlaying(r))}>
                    preview
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
