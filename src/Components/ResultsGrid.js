import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function ResultsGrid({ searchResults }) {
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
            <Card key={i} maxWidth="200px">
              <CardMedia
                component="img"
                height="152px"
                image={r.artworkUrl100}
                alt={r.collectionName + "artwork"}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  maxWidth="152px"
                >
                  {r.artistName}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  maxWidth="152px"
                >
                  {r.collectionName}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  maxWidth="190px"
                >
                  {r.trackName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
