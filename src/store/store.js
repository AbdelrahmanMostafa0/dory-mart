import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"; // If you are using Redux Thunk middleware
import ProductsCategoriesReducer from "@/store/features/categoriesListSlice";
import cartReducer from "@/store/features/cartSlice";
export const store = configureStore({
  reducer: {
    ProductsCategories: ProductsCategoriesReducer,
    cart: cartReducer,
  },
  //   middleware: [thunkMiddleware],
}); //,
