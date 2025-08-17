import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import BookCard from "../components/bookCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useFavoriteStore } from "../store/favoriteStore";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === Number(id));
  const [activeTab, setActiveTab] = useState<"details" | "reviews" | "similar">(
    "details"
  );

  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFav = book ? favorites.includes(book.id) : false;

  if (!book)
    return (
      <div className="p-6 text-center text-gray-500 text-lg">کتاب پیدا نشد</div>
    );

  const similarBooks = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  const renderStars = (count: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/list"
        className="flex items-center w-max mb-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-indigo-700 transition"
      >
        <ArrowBackIcon className="ml-2" /> بازگشت به خانه
      </Link>

      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative overflow-hidden md:w-1/3">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
            {book.title}
          </h1>
          <h2 className="text-2xl text-gray-600 mb-2">نویسنده: {book.author}</h2>
          <span className="flex w-max bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">
            دسته‌بندی: {book.category}
          </span>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => toggleFavorite(book.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg shadow transition ${
                isFav
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <FavoriteIcon />
              {isFav ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            </button>

            <button className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition shadow">
              <ShareIcon /> اشتراک‌گذاری
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-300 mb-6">
            {["details", "reviews", "similar"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-3 py-2 font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600 transition"
                }`}
              >
                {tab === "details"
                  ? "جزئیات"
                  : tab === "reviews"
                  ? "نقد و بررسی"
                  : "مشابه‌ها"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "details" && (
            <p className="text-gray-700 leading-relaxed text-justify">
              {book.description}
            </p>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {renderStars(4)}{" "}
                <span className="text-gray-600">– عالی بود!</span>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(3)} <span className="text-gray-600">– متوسط، اما مفید</span>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(5)} <span className="text-gray-600">– خیلی عالی!</span>
              </div>
            </div>
          )}

          {activeTab === "similar" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              {similarBooks.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
