import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [snackOptions, setSnackOptions] = useState(["Pizza", "Burger", "Chat"]);
  const [beverageOptions, setBeverageOptions] = useState(["Coffee", "Tea", "Cool drink"]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
    setSnackOptions(snackOptions.filter(option => option !== value));
  };

  const handleChange1 = (e) => {
    const value = e.target.value;
    setSelectedValue1(value);
    onChange(value);
    setBeverageOptions(beverageOptions.filter(option => option !== value));
  };

  return (
    <div className="dropdown-container d-flex">
      <div className="dropdown">
        <h3>Snacks</h3>
        <select value={selectedValue} onChange={handleChange}>
          <option value="">Select an option</option>
          {snackOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Selected snack: {selectedValue}</p>
      </div>
      <div className="dropdown">
        <h3>Beverages</h3>
        <select value={selectedValue1} onChange={handleChange1}>
          <option value="">Select an option</option>
          {beverageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Selected beverage: {selectedValue1}</p>

      </div>
    </div>

  );
};

export default Dropdown;







