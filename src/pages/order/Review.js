import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Fragment } from "react";
import { Container, Button, Paper, Box } from "@mui/material";
import { selectTotal, selectOrderList, selectTableId } from "./orderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../Header";

export default function Review() {
  const tableId = useSelector(selectTableId);
  const orderList = useSelector(selectOrderList);
  const total = useSelector(selectTotal);

  return (
    <Fragment>
      <Header showButtons={false} />
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
              variant="outlined"
              sx={{ mt: 3, ml: 1 }}
              component={Link}
              to={`/menu/${tableId}`}
              color="error"
            >
              Cancel Order
            </Button>
            <Button
              variant="contained"
              component={Link}
              sx={{ mt: 3, ml: 1 }}
              to="/payment-options"
            >
              Confirm
            </Button>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
