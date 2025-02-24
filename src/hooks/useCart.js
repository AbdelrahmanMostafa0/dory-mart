import {
  updateCart,
  updatePrice,
  updateQuantity,
} from "@/store/features/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const updateReduxStatus = (updatedCart) => {
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
    updateReduxStatus(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (id) => {
    const filterdCart = cartInfo?.cart?.filter((item) => item.id !== id);
    updateReduxStatus(filterdCart);

    localStorage.setItem("cart", JSON.stringify(filterdCart));
  };

  const increseQuantity = (id) => {
    const updatedCart = cartInfo?.cart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateReduxStatus(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const decreseQuantity = (id) => {
    const updatedCart = cartInfo?.cart?.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateReduxStatus(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return { addToCart, removeFromCart, increseQuantity, decreseQuantity };
};

export default useCart;
