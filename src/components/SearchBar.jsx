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
      className="border border-[#854ce6] border-s-2 bg-transparent text-white py-2 px-4 rounded-lg w-64 shadow focus:outline-none "
    />
  );
};

export default SearchBar;
