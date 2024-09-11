import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Define local state

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update local state
    onSearch(e.target.value); // Call the function passed via props
  };

  return (
    <input 
      type="text" 
      placeholder="Search events..." 
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
