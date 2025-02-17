"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const dashedValue = value.split(" ").join("-");
    router.push(`/products?q=${dashedValue}`);
  };
  return (
    <form onSubmit={handleSubmit} className="hidden md:flex w-1/2">
      <input
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full rounded-full outline-none bg-black/20 px-4 py-2 placeholder:text-white/50 text-white/85"
      />
      <button
        type="submit"
        className="-mx-10 text-white"
        // className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-400 hover:text-gray-800"
      >
        <Search />
      </button>
    </form>
  );
};
export default Searchbar;
