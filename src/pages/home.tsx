import React, { useState } from "react";
import { books, Book } from "../data/books";
import SearchBar from "../components/SearchBar";
import BookFilter from "../components/bookFilter";
import BookCard from "../components/bookCard";
import { useBookStore } from "../store/bookStore";
import { useFavoriteStore } from "../store/favoriteStore";

const Home: React.FC = () => {
  const { search, setSearch, category, setCategory } = useBookStore();
  const { favorites } = useFavoriteStore();
  const [showFavorites, setShowFavorites] = useState(false);

  const categories = ["همه", ...Array.from(new Set(books.map((b) => b.category)))];

  const filteredBooks = books.filter(
    (b) =>
      (category === "همه" || b.category === category) &&
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (!showFavorites || favorites.includes(b.id))
  );

  return (
    <div className="container mx-auto p-6">
      {/* جستجو */}
      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="جستجوی کتاب..."
        />
      </div>

      {/* دسته‌بندی */}
      <div className="mb-6 flex flex-wrap gap-2">
        <BookFilter
          categories={categories}
          selectedCategory={category}
          onSelect={setCategory}
        />
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className={`px-4 py-2 rounded-lg shadow transition ${
            showFavorites ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {showFavorites ? "نمایش همه کتاب‌ها" : "فقط علاقه‌مندی‌ها"}
        </button>
      </div>

      {/* خلاصه نتایج */}
      <p className="text-gray-600 mb-4">
        نمایش {filteredBooks.length} کتاب از مجموع {books.length}
      </p>

      {/* کتاب‌ها */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          کتابی با این مشخصات پیدا نشد
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
