import React from "react";

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const BookFilter: React.FC<Props> = ({ categories, selectedCategory, onSelect }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
          selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default BookFilter;
