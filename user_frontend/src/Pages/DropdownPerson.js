import React from 'react';

const DropdownPerson = ({ onChange }) => {
  const handleDropdownChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      onChange(value);
    }
  };

  return (
    <div className="dropdown">
      <h3>Person</h3>
      <select onChange={handleDropdownChange}>
        <option disabled value="">Select an option</option>
        <option value="Elder">Elder</option>
        <option value="Children">Children</option>
      </select>
    </div>
  );
};

export default DropdownPerson;
