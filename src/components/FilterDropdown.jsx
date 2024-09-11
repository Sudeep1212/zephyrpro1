import React from 'react';

const committees = ["All", "CSI", "ACM", "IEEE", "ISTE", "OWASP", "ACMSIGAI"];

const FilterDropdown = ({ onFilter }) => {
  const handleChange = (e) => {
    if (onFilter) {
      onFilter(e.target.value);
    }
  };

  return (
    <select onChange={handleChange}>
      {committees.map((committee) => (
        <option key={committee} value={committee}>
          {committee}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
