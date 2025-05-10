"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToast } from "@/store/features/toastSlice";
import gsap from "gsap";
import { useWindowSize } from "react-use";

const Toast = () => {
  const { width } = useWindowSize();
  const data = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const toastEl = document.querySelector(".toast");

    if (data?.title && toastEl) {
      // Reset animation state
      gsap.set(toastEl, { bottom: -100, opacity: 0, display: "none" });

      // Animate in
      gsap.to(toastEl, {
        bottom: 10,
        opacity: 1,
        display: "flex",
        duration: 0.3,
      });

      // Clear any existing timeout before setting a new one
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        gsap.to(toastEl, {
          bottom: -100,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            dispatch(updateToast({ title: "", description: "" }));
          },
        });
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [data?.title, data?.description, dispatch]);

  return (
    <div className="fixed toast sm:-bottom-52 sm:top-auto z-50 mx-auto sm:right-5 sm:mx-auto hidden w-full justify-center sm:justify-end">
      <div className="p-4 rounded-lg bg-white drop-shadow-lg w-[90vw] sm:min-w-96 sm:w-fit border min-h-20">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-md font-bold">{data?.title}</p>
            <p className="text-muted-foreground line-clamp-1 max-w-56">
              {data?.description}
            </p>
          </div>
          {/* <Button>Undo</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Toast;
