import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPendingOrders = createAsyncThunk(
  "pendingOrders/fetchPendingOrders",
  async () => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        credentials: "same-origin",
      },
    };
    return await fetch("/orders/show-pending-orders/", options)
      .then((res) => res.json())
      .then((data) => data.pendingOrders)
      .catch((err) => console.log(err.message));
  }
);

export const markCompleted = createAsyncThunk(
  "pendingOrders/markCompleted",
  async (orderInfo) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        credentials: "same-origin",
      },
      body: JSON.stringify(orderInfo),
    };
    return await fetch("/orders/mark-completed/", options)
      .then((res) => res.json())
      .then((data) => data.data)
      .catch((err) => console.log(err.message));
  }
);

const initialState = {
  pendingOrdersList: [],
  status: "idel",
};

const pendingOrdersSlice = createSlice({
  name: "pendingOrders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPendingOrders.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPendingOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pendingOrdersList = action.payload;
      })
      .addCase(markCompleted.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.message);
        return {
          ...state,
          pendingOrdersList: state.pendingOrdersList.filter(
            (order) => order.id !== action.payload.orderId
          ),
        };
      });
  },
});

export const selectPendingOrdersStatus = (state) => state.pendingOrders.status;
export const selectPendingOrders = (state) =>
  state.pendingOrders.pendingOrdersList;
export default pendingOrdersSlice.reducer;
