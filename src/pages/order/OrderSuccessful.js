import { Stack, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, selectStatus } from "./orderSlice";
import { useEffect } from "react";

export default function OrderSuccessful({ tableId }) {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "succeeded") dispatch(resetStatus());
  }, [status, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
      }}
    >
      <Stack spacing={6}>
        <Typography variant="h6" component="h4">
          Your Order was successfully placed!!
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to={`/menu/${tableId}`}
          sx={{ width: "50%", alignSelf: "center" }}
        >
          Go Back
        </Button>
      </Stack>
    </Box>
  );
}
