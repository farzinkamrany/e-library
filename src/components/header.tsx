import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../data/routes";
import { useFavoriteStore } from "../store/favoriteStore";

const Header: React.FC = () => {
  const { favorites } = useFavoriteStore();

  return (
    <header className="bg-gray-800 text-white p-4 mb-4 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-8">
        <nav className="flex gap-4   w-full justify-between items-center">
          <span>
            {routes
              ?.filter((t) => t.isVisible)
              .map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="px-3 hover:text-gray-300"
                >
                  {route.label}
                </Link>
              ))}
          </span>
          <Link to="/favorites" className="relative px-3 hover:text-gray-300">
            علاقه‌مندی‌ها
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
