import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUnpaidOrders,
  selectUnpaidOrdersStatus,
  fetchUnpaidOrders,
} from "./unpaidOrdersSlice";
import { useInterval } from "../../utils";
import { Typography, Box } from "@mui/material";
import UnpaidOrderDetailTable from "./UnpaidOrderDetailTable";
import Header from "../../Header";

export default function Counter() {
  const dispatch = useDispatch();

  const unpaidOrdersStatus = useSelector(selectUnpaidOrdersStatus);
  const unpaidOrdersList = useSelector(selectUnpaidOrders);

  useEffect(() => {
    if (unpaidOrdersStatus === "idel") dispatch(fetchUnpaidOrders());
  }, [unpaidOrdersStatus, dispatch]);

  useInterval(() => {
    if (unpaidOrdersStatus === "succeeded") dispatch(fetchUnpaidOrders());
  }, 1000 * 10);

  return (
    <Fragment>
      <Header showButtons={true} />
      {unpaidOrdersStatus === "succeeded" ? (
        <Fragment>
          {unpaidOrdersList.length !== 0 ? (
            <UnpaidOrderDetailTable orderList={unpaidOrdersList} />
          ) : (
            <Box sx={{ pt: 10, justifyContent: "center", display: "flex" }}>
              <Typography align="center" variant="h4" component="h1">
                No Unpaid Orders
              </Typography>
            </Box>
          )}
        </Fragment>
      ) : null}
    </Fragment>
  );
}
