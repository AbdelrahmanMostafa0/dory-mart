"use client";
import { useEffect } from "react";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { updateToast } from "@/store/features/toastSlice";
import gsap from "gsap";
const Toast = ({}) => {
  const data = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.title) {
      gsap.to(".toast", {
        bottom: 10,
        opacity: 1,
        duration: 0.3,
      });

      setTimeout(() => {
        gsap.to(".toast", {
          bottom: -100,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            dispatch(updateToast({ title: "", description: "" }));
          },
        });
      }, 3000);
    }
  }, [data?.title]);

  return (
    <div className="fixed toast   top-5 sm:-bottom-52 sm:top-auto z-50 mx-auto sm:right-5 sm:mx-auto flex w-full justify-center sm:justify-end">
      <div className="p-4 rounded-md bg-white drop-shadow-lg w-[90vw] sm:min-w-96 sm:w-fit border min-h-20">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-md font-bold">{data?.title}</p>
            <p className="text-muted-foreground line-clamp-1 max-w-56">
              {data?.description}
            </p>
          </div>
          <Button>undo</Button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
