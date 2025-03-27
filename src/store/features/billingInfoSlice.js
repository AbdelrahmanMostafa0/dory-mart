import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
};

const billingInfoSlice = createSlice({
  name: "billingInfo",
  initialState,
  reducers: {
    updateBillingInfo: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { updateBillingInfo } = billingInfoSlice.actions;
export default billingInfoSlice.reducer;
