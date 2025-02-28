import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  undoAction: () => console.log(""),
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    updateToast: (state, action) => {
      state.title = action.payload?.title;
      state.description = action.payload?.description;
      state.undoAction = action.payload?.undoAction;
    },
  },
});

export const { updateToast } = toastSlice.actions;
export default toastSlice.reducer;
