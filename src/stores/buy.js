import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowBuy: false,
};

const ShowBuy = createSlice({
  name: "ShowBuy",
  initialState,
  reducers: {
    openShowBuy: (state, action) => {
      state.ShowBuy = true;
    },
    closeShowBuy: (state, action) => {
      state.ShowBuy = false
    }
  },
});

export const { closeShowBuy, openShowBuy } = ShowBuy.actions;
export default ShowBuy.reducer;
