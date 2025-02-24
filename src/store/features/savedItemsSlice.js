import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: null,
};

const savedSlice = createSlice({
  name: "savedItems",
  initialState,
  reducers: {
    updateSaved: (state, action) => {
      state.savedItems = action.payload;
    },
  },
});

export const { updateSaved } = savedSlice.actions;
export default savedSlice.reducer;
