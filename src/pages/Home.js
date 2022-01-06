import { Link } from "react-router-dom";
import { Stack, Button, Box } from "@mui/material";
import { Fragment } from "react";
import Header from "../Header";

export default function Home() {
  return (
    <Fragment>
      <Header showButtons={false} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            component={Link}
            to="/kitchen/"
            color="success"
          >
            Kitchen
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/counter/"
            color="success"
          >
            Counter
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/generateQR/"
            color="success"
          >
            Generate QR
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
}
