import { cn } from "@/lib/utils";
import React from "react";

const Input = ({ className, error, ...props }) => {
  return (
    <input
      {...props}
      className={cn(
        `w-full  h-[50px] bg-white border focus:border-blue-500 outline-none px-3 rounded-md my-0 ${
          error && "focus:border-red-500 border-red-500"
        }`,
        className
      )}
      {...props}
    />
  );
};

export default Input;
