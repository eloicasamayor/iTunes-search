import { Link } from "@mui/material";
import { Typography } from "@mui/material";

import { useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();
  return (
    <footer style={{ backgroundColor: `${theme.palette.primary.main}` }}>
      <Typography color="rgba(255,255,255,0.5)">
        Made by{" "}
        <Link
          color="#fff"
          href="https://eloicasamayor.github.io/portfolio/"
          underline="none"
        >
          Eloi Casamayor Esteve
        </Link>
      </Typography>
    </footer>
  );
}
