"use client";
import { useEffect } from "react";
import { Button } from "./button";

const Toast = ({
  title = "Product Added To Cart",
  productTitle = "Rolex Submariner Watch",
  id,
}) => {
  useEffect(() => {}, []);
  return (
    <div className="fixed top-5 z-50 mx-auto sm:right-5 sm:mx-auto flex w-full justify-center sm:justify-end">
      <div className="p-4 rounded-md bg-white drop-shadow-lg w-[90vw] sm:min-w-96 sm:w-fit border min-h-20">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-md font-bold">{title}</p>
            <p className="text-muted-foreground">{productTitle}</p>
          </div>
          <Button>undo</Button>
        </div>
      </div>
    </div>
  );
};
export default Toast;
