import { Link } from "react-router-dom";
import {
  Stack,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import Header from "../Header";

const CardButton = ({ link, image, text }) => (
  <Card raised>
    <CardActionArea component={Link} to={link}>
      <CardMedia
        component="img"
        alt={text}
        image={image}
        sx={{ width: { xs: 400, sm: 500 }, height: 300 }}
      />
      <CardContent>
        <Typography
          variant="h5"
          align="center"
          sx={{ textTransform: "uppercase" }}
        >
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default function Home() {
  return (
    <Fragment>
      <Header showButtons={false} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 10,
        }}
      >
        <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
          <CardButton
            link="/kitchen"
            image="/assests/kitchen.jpg"
            text="Kitchen"
          />
          <CardButton
            link="/counter"
            image="/assests/counter.webp"
            text="Counter"
          />
          <CardButton
            link="/generateQR"
            image="/assests/generateQR.png"
            text="Generate QR"
          />
        </Stack>
      </Box>
    </Fragment>
  );
}
