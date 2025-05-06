"use client";
import {
  updateCart,
  updatePrice,
  updateQuantity,
} from "@/store/features/cartSlice";
import { updateSaved } from "@/store/features/savedItemsSlice";
import { updateToast } from "@/store/features/toastSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const savedItems = useSelector((state) => state.savedForLater.savedItems);
  const updateAllCart = (updatedCart) => {
    dispatch(updateCart(updatedCart));
    dispatch(
      updateQuantity(updatedCart.reduce((acc, item) => acc + item.quantity, 0))
    );
    dispatch(
      updatePrice(
        updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const emptyCart = () => {
    dispatch(updateCart([]));
    dispatch(updateQuantity(0));
    dispatch(updatePrice(0));
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const updateSavedItems = (item) => {
    const existProduct = savedItems?.find((product) => product.id === item.id);
    if (existProduct) {
      return;
    }
    const updatedSavedItems = savedItems?.length
      ? [...savedItems, { ...item, quantity: 1 }]
      : [{ ...item, quantity: 1 }];
    dispatch(updateSaved(updatedSavedItems));
    localStorage.setItem("saved", JSON.stringify(updatedSavedItems));
  };
  const addToCart = async (product, num = 1) => {
    setLoading(true);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existProduct = storedCart.find((item) => item.id === product.id);
    const existinSavedItems = savedItems?.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existProduct) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + num }
          : item
      );
    } else {
      if (existinSavedItems) {
        removeFromSaved(product.id);
      }
      updatedCart = [
        {
          title: product?.title,
          price: product?.price,
          thumbnail: product?.thumbnail,
          id: product?.id,
          description: product?.description,
          brand: product?.brand,
          quantity: num, // هنا خليت الكمية = num مش 1 بس
        },
        ...storedCart,
      ];
    }

    await updateAllCart(updatedCart);

    dispatch(
      updateToast({
        title: "Product Added To Cart",
        description: product?.title,
        // undoAction: () => removeFromCart(product.id),
      })
    );

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const removeFromCart = (id) => {
    const filterdCart = cartInfo?.cart?.filter((item) => item.id !== id);
    updateAllCart(filterdCart);
  };
  const removeFromSaved = (id) => {
    const filterdCart = savedItems?.filter((item) => item.id !== id);
    dispatch(updateSaved(filterdCart));
    localStorage.setItem("saved", JSON.stringify(filterdCart));
  };

  const increseQuantity = (id) => {
    const updatedCart = cartInfo?.cart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateAllCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const decreseQuantity = (id) => {
    const updatedCart = cartInfo?.cart?.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateAllCart(updatedCart);
  };
  const saveForLater = (id) => {
    const item = cartInfo?.cart?.find((item) => item.id === id);
    const filteredItems = cartInfo?.cart?.filter((item) => item.id !== id);
    updateAllCart(filteredItems);
    updateSavedItems(item);
  };

  return {
    addToCart,
    removeFromCart,
    removeFromSaved,
    increseQuantity,
    decreseQuantity,
    saveForLater,
    emptyCart,
    loading,
  };
};

export default useCart;
