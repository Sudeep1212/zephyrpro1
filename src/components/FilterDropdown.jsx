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
  className="border border-[#854ce6] border-s-2 bg-transparent text-white py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-1 focus:ring-[#854ce6] focus:border-[#854ce6] "
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
