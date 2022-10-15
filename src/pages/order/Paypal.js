import { useRef, useEffect, Fragment } from "react";
import {
  selectStatus,
  selectTotal,
  selectOrderList,
  selectTableId,
  sendOrder,
} from "./orderSlice";
import { useSelector, useDispatch } from "react-redux";
import OrderSuccessful from "./OrderSuccessful";
import Header from "../../Header";
import { Box } from "@mui/material";

export default function Paypal() {
  const paypal = useRef();
  const tableId = useSelector(selectTableId);
  const orderList = useSelector(selectOrderList);
  const total = useSelector(selectTotal);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        },

        onApprove: async (data, actions) => {
          return actions.order.capture().then(async (orderData) => {
            const paid = true;
            try {
              await dispatch(sendOrder({ tableId, orderList, paid })).unwrap();
            } catch (err) {
              console.log("Failed to send order: ", err);
            }
          });
        },

        onError: (err) => {
          alert("Payment Unsuccessfull!!!");
        },
      })
      .render(paypal.current);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header showButtons={false} />
      {status === "succeeded" || orderList.length === 0 ? (
        <OrderSuccessful tableId={tableId} />
      ) : (
        <Box sx={{ mt: 30, mx: 3 }}>
          <div>
            <div ref={paypal}></div>
          </div>
        </Box>
      )}
    </Fragment>
  );
}
