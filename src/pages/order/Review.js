import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Fragment } from "react";
import { Container, Button, Paper, Box } from "@mui/material";
import {
  selectStatus,
  selectTotal,
  selectOrderList,
  selectTableId,
  sendOrder,
} from "./orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OrderSuccessful from "./OrderSuccessful";
import Header from "../../Header";

export default function Review() {
  const tableId = useSelector(selectTableId);
  const orderList = useSelector(selectOrderList);
  const total = useSelector(selectTotal);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    try {
      await dispatch(sendOrder({ tableId, orderList })).unwrap();
    } catch (err) {
      console.log("Failed to send order: ", err);
    }
  };

  return (
    <Fragment>
      <Header showButtons={false} />
      {status === "succeeded" || orderList.length === 0 ? (
        <OrderSuccessful tableId={tableId} />
      ) : (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Order Details
            </Typography>
            <Typography variant="h6" gutterBottom>
              Table: {tableId}
            </Typography>
            <List disablePadding>
              {orderList.map((order) => (
                <ListItem key={order.name} sx={{ py: 1, px: 0 }}>
                  <ListItemText
                    primary={order.quantity + " X " + order.name}
                    secondary={"Rs." + order.price + " each"}
                  />
                  <Typography variant="body2">
                    Rs.{order.price * order.quantity}
                  </Typography>
                </ListItem>
              ))}

              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Rs.{total}
                </Typography>
              </ListItem>
            </List>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{ mt: 3, ml: 1 }}
                component={Link}
                to={`/menu/${tableId}`}
              >
                Cancel Order
              </Button>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={() => handleConfirm()}
              >
                Confirm
              </Button>
            </Box>
          </Paper>
        </Container>
      )}
    </Fragment>
  );
}
