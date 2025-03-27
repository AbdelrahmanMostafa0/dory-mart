import { configureStore } from "@reduxjs/toolkit";
import ProductsCategoriesReducer from "@/store/features/categoriesListSlice";
import cartReducer from "@/store/features/cartSlice";
import savedItemsReducer from "@/store/features/savedItemsSlice";
import toastReducer from "@/store/features/toastSlice";
import billingReducer from "@/store/features/billingInfoSlice";
export const store = configureStore({
  reducer: {
    ProductsCategories: ProductsCategoriesReducer,
    cart: cartReducer,
    savedForLater: savedItemsReducer,
    toast: toastReducer,
    billingInfo: billingReducer,
  },
});
