import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { setPlaying } from "../redux";
import { useDispatch } from "react-redux";
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
            sm={4}
            md={2}
            xl={1.5}
            height="100%"
          >
            <Card key={i}>
              <CardMedia
                component="img"
                height="152px"
                image={r.artworkUrl100}
                alt={r.collectionName + "artwork"}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {r.artistName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {r.collectionName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {r.trackName}
                </Typography>
                {playing.previewUrl === r.previewUrl ? (
                  <Typography variant="body2">PLAYING</Typography>
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
