import React from "react";
import { Link } from "react-router-dom";
import { Book } from "../data/books";
import { useFavoriteStore } from "../store/favoriteStore";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFav = favorites.includes(book.id);

  const renderStars = (count: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-sm ${i < count ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ));

  return (
    <div  className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition  overflow-hidden border border-gray-200">
      {/* دکمه علاقه‌مندی */}
      <button
        onClick={() => toggleFavorite(book.id)}
        className={`absolute top-3 right-3 text-2xl transition-transform duration-300 z-10 ${
          isFav ? "text-red-500 scale-125" : "text-gray-300 hover:text-red-500 hover:scale-110"
        }`}
      >
        ♥
      </button>

      {/* Badge وقتی فعال است */}
      {isFav && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow animate-pulse">
          علاقه‌مندی
        </div>
      )}

      <div className="overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-56 object-contain bg-cover transition-transform duration-500 hover:scale-[120%]"
        />
      </div>

      <Link to={`/books/${book.id}`} className="p-4 flex flex-col items-center gap-2">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-2 text-center">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm truncate">{book.author}</p>

        <div className="flex items-center gap-1 mt-1">
          {/* {renderStars(book.rating || 4)} */}
        </div>

        <span className="w-max mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          {book.category}
        </span>
      </Link>
    </div>
  );
};

export default BookCard;
