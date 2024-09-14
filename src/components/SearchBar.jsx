import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchTerm}
      onChange={handleChange}
      className="border border-gray-300 text-black py-2 px-4 rounded-lg w-64 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
    />
  );
};

export default SearchBar;
