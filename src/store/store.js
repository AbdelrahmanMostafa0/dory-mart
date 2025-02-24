import { configureStore } from "@reduxjs/toolkit";
import ProductsCategoriesReducer from "@/store/features/categoriesListSlice";
import cartReducer from "@/store/features/cartSlice";
import savedItemsReducer from "@/store/features/savedItemsSlice";
export const store = configureStore({
  reducer: {
    ProductsCategories: ProductsCategoriesReducer,
    cart: cartReducer,
    savedForLater: savedItemsReducer,
  },
});
