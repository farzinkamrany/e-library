import React from "react";
import { useFavoriteStore } from "../store/favoriteStore";
import { books } from "../data/books";
import BookCard from "../components/bookCard";
import { Link } from "react-router-dom";

const Favorites: React.FC = () => {
  const { favorites } = useFavoriteStore();
  const favoriteBooks = books.filter((b) => favorites.includes(b.id));

  if (favoriteBooks.length === 0)
    return (
      <div className="container mx-auto p-6 text-center text-gray-500">
        کتاب علاقه‌مندی وجود ندارد.
        <div className="mt-4">
          <Link
            to="/list"
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">علاقه‌مندی‌ها</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
