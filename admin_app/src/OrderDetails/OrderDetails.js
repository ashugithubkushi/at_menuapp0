// // OrderDetails.js

// import React from "react";

// const OrderDetails = ({ elders, children }) => {
//   return (
//     <div className="order-details">
//       <h2>Elders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Item-name</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {elders.map((elder, index) => (
//             <tr key={index}>
//               <td>{elder.dropdownValue}</td>
//               <td>{elder.incrementValue}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Children</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Item-name</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {children.map((child, index) => (
//             <tr key={index}>
//               <td>{child.dropdownValue}</td>
//               <td>{child.incrementValue}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderDetails;

import React from "react";

const OrderDetails = ({ tableData, childrenTableData, selectedElder, selectedChildren }) => {
  return (
    <div>
      <h2>Elder Data</h2>
      <p>Selected Elder: {selectedElder}</p>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.option}</td>
              <td>{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Children Data</h2>
      <p>Selected Children: {selectedChildren}</p>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {childrenTableData.map((data, index) => (
            <tr key={index}>
              <td>{data.option}</td>
              <td>{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;

