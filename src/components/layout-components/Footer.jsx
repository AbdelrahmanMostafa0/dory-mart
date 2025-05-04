import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <div className="text-center sm:text-left space-y-3">
          <div className="font-medium text-gray-800 flex items-center sm:justify-start justify-center gap-2">
            <Image
              src={"/dory-logo.png"}
              width={35}
              height={35}
              alt="dory logo"
              // className="w-12"
            />{" "}
            Dorymart
          </div>
          <p className="text-xs mt-1">
            Powered by bubbles & good vibes. Just keep shopping 🎉
          </p>
        </div>

        {/* <div className="flex gap-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </div> */}

        <div className="flex gap-3">
          <span className="text-gray-400 cursor-pointer">🐟</span>
          <span className="text-gray-400 cursor-pointer">📦</span>
          <span className="text-gray-400 cursor-pointer">💬</span>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-4">
        © 2025 Dorymart. Swim responsibly.
      </div>
    </footer>
  );
};

export default Footer;
