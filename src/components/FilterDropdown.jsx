import React from 'react';

const committees = ["All", "CSI", "ACM", "IEEE", "ISTE", "OWASP", "ACMSIGAI"];

const FilterDropdown = ({ onFilter }) => {
  const handleChange = (e) => {
    if (onFilter) {
      onFilter(e.target.value);
    }
  };

  return (
    <select
      onChange={handleChange}
      className="border border-gray-300 bg-white text-black py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
    >
      {committees.map((committee) => (
        <option key={committee} value={committee} className="text-black">
          {committee}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
