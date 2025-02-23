"use client";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { ArrowDownWideNarrow, ChevronDown } from "lucide-react";

const SortProducts = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const menuRef = useRef(null);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-fit" ref={menuRef}>
      <button
        onClick={toggleMenu}
        type="button"
        className="outline-none  p-2 flex items-center gap-2 justify-between"
      >
        <ArrowDownWideNarrow />
      </button>
      {menuOpen && (
        <div className="absolute flex flex-col  z-[2] left-0 bg-white border rounded-md ">
          <button
            type="button"
            className="p-2 px-4 border-b whitespace-nowrap "
          >
            low price
          </button>
          <button type="button" className="p-2 px-4 border-b ">
            low price
          </button>
          <button type="button" className="p-2 px-4 border-b ">
            low price
          </button>
        </div>
      )}
    </div>
    // <DropdownMenu>
    //   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>Profile</DropdownMenuItem>
    //     <DropdownMenuItem>Billing</DropdownMenuItem>
    //     <DropdownMenuItem>Team</DropdownMenuItem>
    //     <DropdownMenuItem>Subscription</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};
export default SortProducts;
