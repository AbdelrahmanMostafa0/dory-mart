import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorite: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { updateFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
