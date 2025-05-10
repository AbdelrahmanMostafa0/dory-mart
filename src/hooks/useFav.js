"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFavorite } from "@/store/favoritesSlice";
import { updateToast } from "@/store/features/toastSlice";

const useFav = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const updateAllFavorites = (updatedFavs) => {
    dispatch(updateFavorite(updatedFavs));
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  const addToFavorites = (product) => {
    const exists = favorites.find((item) => item.id === product.id);
    if (exists) return;

    const updatedFavs = [...favorites, product];
    updateAllFavorites(updatedFavs);

    dispatch(
      updateToast({
        title: "Added to Favorites",
        description: product.title,
      })
    );
  };

  const removeFromFavorites = (data) => {
    const updatedFavs = favorites.filter((item) => item.id !== data.id);
    updateAllFavorites(updatedFavs);

    dispatch(
      updateToast({
        title: "Removed from Favorites",
        description: `${data.title} removed.`,
      })
    );
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const clearFavorites = () => {
    updateAllFavorites([]);
    dispatch(
      updateToast({
        title: "Favorites Cleared",
        description: "All favorite items have been removed.",
      })
    );
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
    loading,
  };
};

export default useFav;
