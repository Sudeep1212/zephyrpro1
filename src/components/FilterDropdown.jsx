import React from 'react';

const committees = ["All", "CSI", "ACM", "IEEE", "ISTE", "OWASP", "ACMSIGAI"];

const FilterDropdown = ({ onFilter }) => {
  const handleChange = (e) => {
    if (onFilter) {
      onFilter(e.target.value);
    }
  };

  return (
    <select onChange={handleChange} className='text-black'>
      {committees.map((committee) => (
        <option key={committee} value={committee} className=' text-black'>
          {committee}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
