import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header({ showButtons }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1 }}
            component={Link}
            to="/"
            style={{ textDecoration: "none" , fontWeight: "bold"}}
            color="inherit"
          >
            SULAV
          </Typography>

          {showButtons ? (
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                component={Link}
                to="/kitchen"
                color="inherit"
              >
                Kitchen
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/counter"
                color="inherit"
              >
                Counter
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/generateQR"
                color="inherit"
              >
                Generate QR
              </Button>
            </Stack>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
