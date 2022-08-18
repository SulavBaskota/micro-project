import {
  Stack,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import {
  selectStatus,
  selectTotal,
  selectOrderList,
  selectTableId,
  sendOrder,
} from "./orderSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Header";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import OrderSuccessful from "./OrderSuccessful";

export default function PaymentOptions() {
  const tableId = useSelector(selectTableId);
  const orderList = useSelector(selectOrderList);
  const total = useSelector(selectTotal);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const handlePayLater = async () => {
    try {
      await dispatch(sendOrder({ tableId, orderList })).unwrap();
    } catch (err) {
      console.log("Failed to send order: ", err);
    }
  };

  return (
    <Fragment>
      <Header showButtons={false} />
      {/* {status === "succeeded" || orderList.length === 0 ? (
        <OrderSuccessful tableId={tableId} />
      ) : ( */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h4" align="center">
            Total Bill: Rs. {total}
          </Typography>
          <Box sx={{ mt: 10 }}>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button variant="outlined" onClick={() => handlePayLater()}>
                Pay Later
              </Button>
              <Button variant="contained" component={Link} to="/">
                Pay Now
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
      {/* )} */}
    </Fragment>
  );
}
