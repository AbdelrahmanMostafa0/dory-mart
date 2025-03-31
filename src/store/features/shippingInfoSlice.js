import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const shippingInfoSlice = createSlice({
  name: "shippingInfo",
  initialState,
  reducers: {
    updateShippingInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { updateShippingInfo } = shippingInfoSlice.actions;
export default shippingInfoSlice.reducer;
