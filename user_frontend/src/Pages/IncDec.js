// import React, { useState } from 'react';
// import './incdec.css';

// // const IncDec = ({ label, onChange }) => {
// const IncDec = ({onChange }) => {
//   const [value, setValue] = useState(1);

//   const handleIncrement = () => {
//     setValue(value + 1);
//     onChange(value + 1);
//   };

//   const handleDecrement = () => {
//     if (value > 1) {
//       setValue(value - 1);
//       onChange(value - 1);
//     }
//   };

//   return (
//     <div className="increment-decrement">
//       {/* <label>{label}</label> */}
//       <h3>Count</h3>
//       <div>
//         <button onClick={handleDecrement}>-</button>
//         <span>{value}</span>
//         <button onClick={handleIncrement}>+</button>
//       </div>
//       <p>Selected count: {value}</p>
//     </div>
//   );
// };

// export default IncDec;
