// NumberDropdown.js
import React from 'react';

const NumberDropdown = ({ label, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value)); // Convert value to integer
  };

  return (
    <div className="dropdown">
      <h3>{label}</h3>
      <select onChange={handleChange}>
        {[...Array(10).keys()].map((num) => ( // Create options from 1 to 10
          <option key={num + 1} value={num + 1}>{num + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default NumberDropdown;






// will display 0 at the beginning
// import React from 'react';

// const NumberDropdown = ({ label, onChange }) => {
//   const handleChange = (e) => {
//     onChange(parseInt(e.target.value)); // Convert value to integer
//   };

//   return (
//     <div className="dropdown">
//       <h3>{label}</h3>
//       <select onChange={handleChange}>
//         <option value="0">0</option> {/* Default option */}
//         {[...Array(10).keys()].map((num) => (
//           <option key={num + 1} value={num + 1}>{num + 1}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default NumberDropdown;
