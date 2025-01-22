import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b bg-white drop-shadow-sm sticky top-0 ">
      <div className="w-full h-20 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/doy-logo.png"}
            width={50}
            height={50}
            className="object-cover"
          />
          <p className="text-2xl font-semibold">Dorymart</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
