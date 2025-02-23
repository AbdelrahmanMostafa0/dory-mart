import {
  updateCart,
  updatePrice,
  updateQuantity,
} from "@/store/features/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existProduct = storedCart.find((item) => item.id === product.id);
    let updatedCart;

    if (existProduct) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [
        ...storedCart,
        {
          title: product?.title,
          price: product?.price,
          image: product?.thumbnail,
          id: product?.id,
          description: product?.description,
          brand: product?.brand,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(updateCart(updatedCart));
    dispatch(
      updateQuantity(updatedCart.reduce((acc, item) => acc + item.quantity, 0))
    );
    dispatch(
      updatePrice(
        updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
  };

  return { addToCart };
};

export default useAddToCart;
