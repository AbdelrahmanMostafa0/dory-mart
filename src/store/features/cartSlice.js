import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updatePrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    updateQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
  },
});

export const { updatePrice, updateQuantity, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
