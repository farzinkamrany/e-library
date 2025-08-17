import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string; // اضافه شد
}

const SearchBar: React.FC<Props> = ({ value, onChange, placeholder, className }) => (
  <div className="relative w-full">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm hover:shadow-md ${className}`}
    />
  </div>
);

export default SearchBar;
