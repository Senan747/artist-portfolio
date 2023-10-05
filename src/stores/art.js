import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  art: "",
};

const art = createSlice({
  name: "art",
  initialState,
  reducers: {
    setArt: (state, action) => {
      state.art = action.payload;
    },
  },
});

export const { setArt } = art.actions;
export default art.reducer