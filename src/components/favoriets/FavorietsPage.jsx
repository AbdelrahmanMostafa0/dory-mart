"use client";

import { useSelector } from "react-redux";
import ProductCard from "../home-page/elements/ProductCard";

const FavorietsPage = () => {
  const fav = useSelector((state) => state.favorites.favorites);

  const isEmpty = !fav || fav.length === 0;

  return (
    <>
      <h1 className="text-6xl font-zentry text-center mb-6">Favorites</h1>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center min-h-[70dvh] text-center">
          <div className="text-8xl mb-4 animate-float">🐠</div>
          <h2 className="text-3xl font-semibold mb-2 text-blue-600">
            Oops... nothing here yet!
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Just keep swimming... just keep swimming... 🎵
            <br />
            Looks like you haven’t added any favorites. Start exploring and mark
            your treasures!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5 min-h-[80dvh]">
          {fav.map((prod) => {
            const random = Math.floor(Math.random() * 50);
            return (
              <ProductCard product={prod} key={prod.id + prod.title + random} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default FavorietsPage;
