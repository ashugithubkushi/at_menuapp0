// import React, { useState } from "react";
// import Dropdown from "./Dropdown";
// import IncDec from "./IncDec";
// import "./both.css";
// import axios from "axios";

// const Both = () => {
//   const [selectedElderDropdownValue, setSelectedElderDropdownValue] =
//     useState("");
//   const [selectedElderIncrementValue, setSelectedElderIncrementValue] =
//     useState(1);
//   const [isElderDropdownSelected, setIsElderDropdownSelected] = useState(false);
//   const [isElderIncrementSelected, setIsElderIncrementSelected] =
//     useState(false);
//   const [submittedElderValues, setSubmittedElderValues] = useState([]);

//   const [selectedChildrenDropdownValue, setSelectedChildrenDropdownValue] =
//     useState("");
//   const [selectedChildrenIncrementValue, setSelectedChildrenIncrementValue] =
//     useState(1);
//   const [isChildrenDropdownSelected, setIsChildrenDropdownSelected] =
//     useState(false);
//   const [isChildrenIncrementSelected, setIsChildrenIncrementSelected] =
//     useState(false);
//   const [submittedChildrenValues, setSubmittedChildrenValues] = useState([]);

//   //Submit
//   const Submit = (e) => {
//     e.preventDefault();

//     if (submittedElderValues.length === 0 && submittedChildrenValues.length === 0) {
//       alert("Please fill in the details before submitting.");
//       return;
//     }

//     // Combine elder and children values into one object
//     const combinedData = {
//       elders: submittedElderValues,
//       children: submittedChildrenValues
//     };

//     console.log(combinedData); // Log combined data

//     // Clear submitted values
//     setSubmittedElderValues([]);
//     setSubmittedChildrenValues([]);

//     // Example: Sending combined data to server using Axios
//     axios
//       .post("http://localhost:3000/createOrder", combinedData)
//       .then((result) => {
//         console.log(result);
//         alert("Values submitted successfully");
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Error submitting values");
//       });
//   };

//   const handleElderDropdownChange = (value) => {
//     setSelectedElderDropdownValue(value);
//     setIsElderDropdownSelected(value !== "");
//   };

//   const handleElderIncrementChange = (value) => {
//     setSelectedElderIncrementValue(value);
//     setIsElderIncrementSelected(true);
//   };

//   const handleChildrenDropdownChange = (value) => {
//     setSelectedChildrenDropdownValue(value);
//     setIsChildrenDropdownSelected(value !== "");
//   };

//   const handleChildrenIncrementChange = (value) => {
//     setSelectedChildrenIncrementValue(value);
//     setIsChildrenIncrementSelected(true);
//   };

//   const handleElderSubmit = () => {
//     if (isElderDropdownSelected && isElderIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedElderDropdownValue,
//         incrementValue: selectedElderIncrementValue,
//       };
//       setSubmittedElderValues([...submittedElderValues, newSubmittedValue]);
//       setSelectedElderDropdownValue("");
//       setSelectedElderIncrementValue(1);
//       setIsElderDropdownSelected(false);
//       setIsElderIncrementSelected(false);
//     } else {
//       alert(
//         "Please select both dropdown and increment/decrement values for elders."
//       );
//     }
//   };

//   const handleChildrenSubmit = () => {
//     if (isChildrenDropdownSelected && isChildrenIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedChildrenDropdownValue,
//         incrementValue: selectedChildrenIncrementValue,
//       };
//       setSubmittedChildrenValues([
//         ...submittedChildrenValues,
//         newSubmittedValue,
//       ]);
//       setSelectedChildrenDropdownValue("");
//       setSelectedChildrenIncrementValue(1);
//       setIsChildrenDropdownSelected(false);
//       setIsChildrenIncrementSelected(false);
//     } else {
//       alert(
//         "Please select both dropdown and increment/decrement values for children."
//       );
//     }
//   };

//   // count change
//   const handleCountChange = (index, newValue, isElder) => {
//     if (isElder) {
//       const updatedElderSubmittedValues = [...submittedElderValues];
//       updatedElderSubmittedValues[index].incrementValue = newValue;
//       setSubmittedElderValues(updatedElderSubmittedValues);
//     } else {
//       const updatedChildrenSubmittedValues = [...submittedChildrenValues];
//       updatedChildrenSubmittedValues[index].incrementValue = newValue;
//       setSubmittedChildrenValues(updatedChildrenSubmittedValues);
//     }
//   };

//   //delete
//   const handleDeleteRow = (index, isElder) => {
//     if (isElder) {
//       const updatedElderSubmittedValues = [...submittedElderValues];
//       updatedElderSubmittedValues.splice(index, 1);
//       setSubmittedElderValues(updatedElderSubmittedValues);
//     } else {
//       const updatedChildrenSubmittedValues = [...submittedChildrenValues];
//       updatedChildrenSubmittedValues.splice(index, 1);
//       setSubmittedChildrenValues(updatedChildrenSubmittedValues);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="dropdown-container">
//         <h1 style={{ color: 'red' }}>Elders</h1>
//         <Dropdown label="Dropdown" onChange={handleElderDropdownChange} />
//         <hr />
//         <IncDec
//           label="Increment/Decrement"
//           onChange={handleElderIncrementChange}
//         />
//         <button
//           onClick={handleElderSubmit}
//           type="button"
//           className="btn btn-success"
//           disabled={!isElderDropdownSelected || !isElderIncrementSelected}
//         >
//           Submit
//         </button>
//         <hr />
//       </div>
//       <div className="submitted-values">
//         <h4>Total count for Elders</h4>
//         <table className="bordered-table">
//           <thead>
//             <tr>
//               <th>Item-name</th>
//               <th>Count</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedElderValues.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.dropdownValue}</td>
//                 {/* <td>{value.incrementValue}</td> */}
//                 <td>
//                   <input
//                     type="number"
//                     value={value.incrementValue}
//                     onChange={(e) =>
//                       handleCountChange(index, e.target.value, true)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteRow(index, true)}>
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         {/* <button onClick={Submit} type="button" className="btn btn-success">
//           Submit
//         </button> */}
//       </div>
//       <hr />

//       <div className="dropdown-container">
//         <h1 style={{ color: 'red' }}>Childrens</h1>
//         <Dropdown label="Dropdown" onChange={handleChildrenDropdownChange} />
//         <IncDec
//           label="Increment/Decrement"
//           onChange={handleChildrenIncrementChange}
//         />
//         <button
//           onClick={handleChildrenSubmit}
//           type="button"
//           className="btn btn-success"
//           disabled={!isChildrenDropdownSelected || !isChildrenIncrementSelected}
//         >
//           Submit
//         </button>
//       </div>
//       <div className="submitted-values">
//         <h4>Total count for Children</h4>
//         <table className="bordered-table">
//           <thead>
//             <tr>
//               <th>Item-name</th>
//               <th>Count</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedChildrenValues.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.dropdownValue}</td>
//                 {/* <td>{value.incrementValue}</td> */}
//                 <td>
//                   <input
//                     type="number"
//                     value={value.incrementValue}
//                     onChange={(e) =>
//                       handleCountChange(index, e.target.value, false)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteRow(index, false)}>
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <button onClick={Submit} type="button" className="btn btn-success">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Both;




// import React, { useState } from "react";
// import Dropdown from "./Dropdown";
// import IncDec from "./IncDec";
// import "./both.css";
// import axios from "axios";
// import NumberDropdown from "./NumberDropdown";

// const Both = () => {
//   const [selectedElderDropdownValue, setSelectedElderDropdownValue] = useState("");
//   const [selectedElderIncrementValue, setSelectedElderIncrementValue] = useState(1);
//   const [isElderDropdownSelected, setIsElderDropdownSelected] = useState(false);
//   const [isElderIncrementSelected, setIsElderIncrementSelected] = useState(false);
//   const [submittedElderValues, setSubmittedElderValues] = useState([]);

//   const [selectedChildrenDropdownValue, setSelectedChildrenDropdownValue] = useState("");
//   const [selectedChildrenIncrementValue, setSelectedChildrenIncrementValue] = useState(1);
//   const [isChildrenDropdownSelected, setIsChildrenDropdownSelected] = useState(false);
//   const [isChildrenIncrementSelected, setIsChildrenIncrementSelected] = useState(false);
//   const [submittedChildrenValues, setSubmittedChildrenValues] = useState([]);

//   // number dropdown
//   const [selectedElderCount, setSelectedElderCount] = useState(1);
//   const [selectedChildrenCount, setSelectedChildrenCount] = useState(1);

//   const handleElderCountChange = (count) => {
//     setSelectedElderCount(count);
//   };

//   const handleChildrenCountChange = (count) => {
//     setSelectedChildrenCount(count);
//   };

//   //Submit
//   const Submit = (e) => {
//     e.preventDefault();

//     if (submittedElderValues.length === 0 && submittedChildrenValues.length === 0) {
//       alert("Please fill in the details before submitting.");
//       return;
//     }

//     // Combine elder and children values into one object
//     const combinedData = {
//       elders: submittedElderValues,
//       children: submittedChildrenValues
//     };

//     console.log(combinedData); // Log combined data

//     // Clear submitted values
//     setSubmittedElderValues([]);
//     setSubmittedChildrenValues([]);

//     // Example: Sending combined data to server using Axios
//     axios
//       .post("http://localhost:3000/createOrder", combinedData)
//       .then((result) => {
//         console.log(result);
//         alert("Values submitted successfully");
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Error submitting values");
//       });
//   };

//   const handleElderDropdownChange = (value) => {
//     setSelectedElderDropdownValue(value);
//     setIsElderDropdownSelected(value !== "");
//   };

//   const handleElderIncrementChange = (value) => {
//     setSelectedElderIncrementValue(value);
//     setIsElderIncrementSelected(true);
//   };

//   const handleChildrenDropdownChange = (value) => {
//     setSelectedChildrenDropdownValue(value);
//     setIsChildrenDropdownSelected(value !== "");
//   };

//   const handleChildrenIncrementChange = (value) => {
//     setSelectedChildrenIncrementValue(value);
//     setIsChildrenIncrementSelected(true);
//   };

//   const handleElderSubmit = () => {
//     if (isElderDropdownSelected && isElderIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedElderDropdownValue,
//         incrementValue: selectedElderIncrementValue,
//       };
//       setSubmittedElderValues([...submittedElderValues, newSubmittedValue]);
//       setSelectedElderDropdownValue("");
//       setSelectedElderIncrementValue(1);
//       setIsElderDropdownSelected(false);
//       setIsElderIncrementSelected(false);
//     } else {
//       alert("Please select both dropdown and increment/decrement values for elders.");
//     }
//   };

//   const handleChildrenSubmit = () => {
//     if (isChildrenDropdownSelected && isChildrenIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedChildrenDropdownValue,
//         incrementValue: selectedChildrenIncrementValue,
//       };
//       setSubmittedChildrenValues([...submittedChildrenValues, newSubmittedValue]);
//       setSelectedChildrenDropdownValue("");
//       setSelectedChildrenIncrementValue(1);
//       setIsChildrenDropdownSelected(false);
//       setIsChildrenIncrementSelected(false);
//     } else {
//       alert("Please select both dropdown and increment/decrement values for children.");
//     }
//   };

//   // count change
//   const handleCountChange = (index, newValue, isElder) => {
//     if (isElder) {
//       const updatedElderSubmittedValues = [...submittedElderValues];
//       updatedElderSubmittedValues[index].incrementValue = newValue;
//       setSubmittedElderValues(updatedElderSubmittedValues);
//     } else {
//       const updatedChildrenSubmittedValues = [...submittedChildrenValues];
//       updatedChildrenSubmittedValues[index].incrementValue = newValue;
//       setSubmittedChildrenValues(updatedChildrenSubmittedValues);
//     }
//   };

//   //delete
//   const handleDeleteRow = (index, isElder) => {
//     if (isElder) {
//       const updatedElderSubmittedValues = [...submittedElderValues];
//       updatedElderSubmittedValues.splice(index, 1);
//       setSubmittedElderValues(updatedElderSubmittedValues);
//     } else {
//       const updatedChildrenSubmittedValues = [...submittedChildrenValues];
//       updatedChildrenSubmittedValues.splice(index, 1);
//       setSubmittedChildrenValues(updatedChildrenSubmittedValues);
//     }
//   };

//   return (
//     <div className="app">

//       {/* elders */}
//        {/* Elders */}
//        <div className="dropdown-container">
//         {/* <h1 style={{ color: "red" }}>Elders</h1> */}
//         <NumberDropdown label="Select Elder Count" onChange={handleElderCountChange} />
//         {/* Rest of the Elder section */}
//       </div>
//       <div className="dropdown-container">
//         <h1 style={{ color: 'red' }}>Elders</h1>
//         <div className="d-flex align-items-center">
//           <Dropdown label="Dropdown" onChange={handleElderDropdownChange} />
//           <IncDec label="Increment/Decrement" onChange={handleElderIncrementChange} />
          
//         </div>
//         <button
//           onClick={handleElderSubmit}
//           type="button"
//           className="btn btn-success"
//           disabled={!isElderDropdownSelected || !isElderIncrementSelected}
//         >
//           Submit
//         </button>
//         <hr />
//       </div>



      
//       <div className="submitted-values">
//         <h4>Total count for Elders</h4>
//         <table className="bordered-table">
//           <thead>
//             <tr>
//               {/* <th>Elder Count</th> */}
//               <th>Item-name</th>
//               <th>Count</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedElderValues.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.dropdownValue}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={value.incrementValue}
//                     onChange={(e) => handleCountChange(index, e.target.value, true)}
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteRow(index, true)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//       </div>
//       <hr />




// {/* childrens */}
// <div className="dropdown-container">
//         {/* <h1 style={{ color: "red" }}>Children</h1> */}
//         <NumberDropdown label="Select Children Count" onChange={handleChildrenCountChange} />
//         {/* Rest of the Children section */}
//       </div>
//       <div className="dropdown-container">
//         <h1 style={{ color: 'red' }}>Childrens</h1>
//         <div className="d-flex align-items-center">
//           <Dropdown label="Dropdown" onChange={handleChildrenDropdownChange} />
//           <IncDec label="Increment/Decrement" onChange={handleChildrenIncrementChange} />
//         </div>
//         <button
//           onClick={handleChildrenSubmit}
//           type="button"
//           className="btn btn-success"
//           disabled={!isChildrenDropdownSelected || !isChildrenIncrementSelected}
//         >
//           Submit
//         </button>
//       </div>
//       <div className="submitted-values">
//         <h4>Total count for Children</h4>
//         <table className="bordered-table">
//           <thead>
//             <tr>
//               <th>Children Count</th>
//               <th>Item-name</th>
//               <th>Count</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedChildrenValues.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.dropdownValue}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={value.incrementValue}
//                     onChange={(e) => handleCountChange(index, e.target.value, false)}
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteRow(index, false)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <button onClick={Submit} type="button" className="btn btn-success">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Both;


import React, { useState } from "react";
import "./both.css";
import axios from "axios";

const Both = () => {
  // State and event handlers for elders
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedNumber1, setSelectedNumber1] = useState(1);
  const [selectedNumber2, setSelectedNumber2] = useState(1);
  const [selectedNumber3, setSelectedNumber3] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleElderChange = (event) => {
    setElder(parseInt(event.target.value));
  };

  const handleOption1Change = (event) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      alert("The item is already selected. you can edit the count value inside table.");
    } else {
      setSelectedOption1(option);
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOption2Change = (event) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      alert("The item is already selected. Please change the value in the count inside the table.");
    } else {
      setSelectedOption2(option);
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOption3Change = (event) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      alert("The item is already selected. Please change the value in the count option inside the table.");
    } else {
      setSelectedOption3(option);
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNumber1Change = (event) => {
    setSelectedNumber1(parseInt(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setSelectedNumber2(parseInt(event.target.value));
  };

  const handleNumber3Change = (event) => {
    setSelectedNumber3(parseInt(event.target.value));
  };

  const handleAddToTable = () => {
    const newData = [];
    if (selectedOption1) {
      newData.push({ option: selectedOption1, count: selectedNumber1 });
    }
    if (selectedOption2) {
      newData.push({ option: selectedOption2, count: selectedNumber2 });
    }
    if (selectedOption3) {
      newData.push({ option: selectedOption3, count: selectedNumber3 });
    }
    setTableData([...tableData, ...newData]);
    setSelectedOption1("");
    setSelectedOption2("");
    setSelectedOption3("");
    setSelectedNumber1(1);
    setSelectedNumber2(1);
    setSelectedNumber3(1);
  };

  const handleEditCount = (index, event) => {
    const newData = [...tableData];
    newData[index].count = parseInt(event.target.value);
    setTableData(newData);
  };

  const handleDeleteRow = (index) => {
    const newData = [...tableData];
    const deletedOption = newData[index].option;
    newData.splice(index, 1);
    setTableData(newData);
    setSelectedOptions(selectedOptions.filter((option) => option !== deletedOption));
  };

  

  // State and event handlers for children
  const [childrenSelectedOption1, setChildrenSelectedOption1] = useState("");
  const [childrenSelectedOption2, setChildrenSelectedOption2] = useState("");
  const [childrenSelectedOption3, setChildrenSelectedOption3] = useState("");
  const [childrenSelectedNumber1, setChildrenSelectedNumber1] = useState(1);
  const [childrenSelectedNumber2, setChildrenSelectedNumber2] = useState(1);
  const [childrenSelectedNumber3, setChildrenSelectedNumber3] = useState(1);
  const [childrenTableData, setChildrenTableData] = useState([]);
  const [childrenSelectedOptions, setChildrenSelectedOptions] = useState([]);


  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  const handleChildrenOption1Change = (event) => {
    const option = event.target.value;
    if (childrenSelectedOptions.includes(option)) {
      alert("The item is already selected. Please change the value in the count option inside the table.");
    } else {
      setChildrenSelectedOption1(option);
      setChildrenSelectedOptions([...childrenSelectedOptions, option]);
    }
  };

  const handleChildrenOption2Change = (event) => {
    const option = event.target.value;
    if (childrenSelectedOptions.includes(option)) {
      alert("The item is already selected. Please change the value in the count option inside the table.");
    } else {
      setChildrenSelectedOption2(option);
      setChildrenSelectedOptions([...childrenSelectedOptions, option]);
    }
  };

  const handleChildrenOption3Change = (event) => {
    const option = event.target.value;
    if (childrenSelectedOptions.includes(option)) {
      alert("The item is already selected. Please change the value in the count option inside the table.");
    } else {
      setChildrenSelectedOption3(option);
      setChildrenSelectedOptions([...childrenSelectedOptions, option]);
    }
  };

  const handleChildrenNumber1Change = (event) => {
    setChildrenSelectedNumber1(parseInt(event.target.value));
  };

  const handleChildrenNumber2Change = (event) => {
    setChildrenSelectedNumber2(parseInt(event.target.value));
  };

  const handleChildrenNumber3Change = (event) => {
    setChildrenSelectedNumber3(parseInt(event.target.value));
  };

  const handleAddChildrenToTable = () => {
    const newData = [];
    if (childrenSelectedOption1) {
      newData.push({ option: childrenSelectedOption1, count: childrenSelectedNumber1 });
    }
    if (childrenSelectedOption2) {
      newData.push({ option: childrenSelectedOption2, count: childrenSelectedNumber2 });
    }
    if (childrenSelectedOption3) {
      newData.push({ option: childrenSelectedOption3, count: childrenSelectedNumber3 });
    }
    setChildrenTableData([...childrenTableData, ...newData]);
    setChildrenSelectedOption1("");
    setChildrenSelectedOption2("");
    setChildrenSelectedOption3("");
    setChildrenSelectedNumber1(1);
    setChildrenSelectedNumber2(1);
    setChildrenSelectedNumber3(1);
  };

  const handleChildrenEditCount = (index, event) => {
    const newData = [...childrenTableData];
    newData[index].count = parseInt(event.target.value);
    setChildrenTableData(newData);
  };

  const handleChildrenDeleteRow = (index) => {
    const newData = [...childrenTableData];
    const deletedOption = newData[index].option;
    newData.splice(index, 1);
    setChildrenTableData(newData);
    setChildrenSelectedOptions(childrenSelectedOptions.filter((option) => option !== deletedOption));
  };
  // submit

  const [elder , setElder]  = useState(0);
  const [children , setChildren]  = useState(0);
  const [elderData, setElderData] = useState({});
  const [childrenData, setChildrenData] = useState({});
  
  const handleSubmit = () => {
    // Check if either elders or children sections have no data filled
    if (tableData.length === 0 && childrenTableData.length === 0) {
      // Display an alert asking to fill the data before submitting
      alert("Please fill the data before submitting.");
    } else {
      // Combine elder and children data
      const combinedData = {
        elder: {
          selectedElder: elder,
          tableData
        },
        children: {
          selectedChildren: children,
          childrenTableData
        }
      };
      
  
      // Send combined data to the backend
      axios.post("http://localhost:3000/createOrder", combinedData)
        .then((response) => {
          // Proceed with submitting the data
          alert("Values submitted successfully")
          console.log("Data submitted successfully:", response.data);
          // Optionally, you can handle success messages or reset the form
          setElder(0);
        setChildren(0);
        setSelectedOption1("");
        setSelectedOption2("");
        setSelectedOption3("");
        setSelectedNumber1(1);
        setSelectedNumber2(1);
        setSelectedNumber3(1);
        setTableData([]);
        setSelectedOptions([]);
        setChildrenSelectedOption1("");
        setChildrenSelectedOption2("");
        setChildrenSelectedOption3("");
        setChildrenSelectedNumber1(1);
        setChildrenSelectedNumber2(1);
        setChildrenSelectedNumber3(1);
        setChildrenTableData([]);
        setChildrenSelectedOptions([]);
        })
        .catch((error) => { 
          console.error("Error submitting data:", error);
          // Optionally, you can handle error messages
        });
    }
  };
  


  return (
    <div>
    <div className="app d-flex position-relative">
      <div className="elder-section">
      <h1 className="text">Elders</h1>
      <div className="box">
      <div className="dropdown-container d-flex">
      <label htmlFor="elder"><h5>Elders Count:</h5></label>
      <select id="elder" value={elder} onChange={handleElderChange}>
        {[...Array(10).keys()].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select> <br />
      </div>
      
      <h5>Snacks:</h5>
      <div className="dropdown-container d-flex">
        <select value={selectedOption1} onChange={handleOption1Change}>
          <option value="">Select option </option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
          <option value="Chat">Chat</option>
        </select>
        <select value={selectedNumber1} onChange={handleNumber1Change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select> <br />
        </div>

        <h5>Beverages:</h5>
        <div className="dropdown-container d-flex">
        <select value={selectedOption2} onChange={handleOption2Change}>
          <option value="">Select option </option>
          <option value="Candy">Candy</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Chocolate">Chocolate</option>
        </select>
        <select value={selectedNumber2} onChange={handleNumber2Change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select> <br />
        </div>

        <button className="btn btn-primary" onClick={handleAddToTable}>Add item</button>
        <hr />
        <br />
      <div className="submitted-values">
      <p>Total Elders Count: {elder}</p>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Count</th>
              {/* <th>Edit</th> */}
              <th>Remove item here</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.option}</td>
                <td>
                  <input
                    type="number"
                    value={data.count}
                    onChange={(event) => handleEditCount(index, event)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />  
      <br /> 
      </div>
      </div>

<br /><br />

<div className="children-section">
      <h1 className="text">Childrens</h1>
      <div className="box">
      <div className="dropdown-container d-flex">
      <label htmlFor="children"><h5>Childrens count:</h5></label>
      <select id="children" value={children} onChange={handleChildrenChange}>
        {[...Array(10).keys()].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select> <br />
      </div>

      <h5>Snacks:</h5>
      <div className="dropdown-container d-flex"> 
        <select value={childrenSelectedOption1} onChange={handleChildrenOption1Change}>
        <option value="">Select option </option>
           <option value="Pizza">Pizza</option>
           <option value="Burger">Burger</option>
           <option value="Chat">Chat</option>
        </select>

        <select value={childrenSelectedNumber1} onChange={handleChildrenNumber1Change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select> <br />
        </div>

        <h5>Beverages:</h5>
        <div className="dropdown-container d-flex">
        <select value={childrenSelectedOption2} onChange={handleChildrenOption2Change}>
        <option value="">Select option </option>
          <option value="Candy">Candy</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Chocolate">Chocolate</option>
         </select>
         <select value={childrenSelectedNumber2} onChange={handleChildrenNumber2Change}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
         </select> <br />
      </div>

      <button className="btn btn-primary" onClick={handleAddChildrenToTable}>Add item</button>
<hr />

      <br />
      <div className="submitted-values">
      <p>Total Childrens Count: {children}</p>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Count</th>
              {/* <th>Edit</th> */}
              <th>Remove item here</th>
            </tr>
          </thead>
          <tbody>
            {childrenTableData.map((data, index) => (
              <tr key={index}>
                <td>{data.option}</td>
                <td>
                  <input
                    type="number"
                    value={data.count}
                    onChange={(event) => handleChildrenEditCount(index, event)}
                  />
                </td>
                <td>
                  <button onClick={() => handleChildrenDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />   
      <br /> 
      </div>
      
    </div>
   
    </div>


<button className="btn btn-primary float-end m-4" onClick={handleSubmit}>
Submit
</button>
</div>
  );
};

export default Both;
