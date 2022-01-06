import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      credentials: "same-origin",
    },
  };
  return await fetch("/menu/show-menu/", options)
    .then((res) => res.json())
    .then((data) => data.menuList)
    .catch((err) => console.log(err.message));
});

const initialState = {
  menuList: [],
  status: "idel",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMenu.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menuList = action.payload;
      });
  },
});

export const selectStatus = (state) => state.menu.status;
export const selectMenuList = (state) => state.menu.menuList;
export default menuSlice.reducer;
