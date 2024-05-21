import React, { useEffect , useState } from "react";
import axios from "axios";
import "./About.css";
// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

const Abouut = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // const navigate = useNavigate();

  // const [pizzaCount, setPizzaCount] = useState(0);
  // const [burgerCount, setBurgerCount] = useState(0);
  // const [chatCount, setChatCount] = useState(0);

  // const handleCountIncrement = () => {
  //   setPizzaCount(pizzaCount + 1);
  //   setBurgerCount(burgerCount + 1);
  //   setChatCount(chatCount + 1);
  // };

  // const handleCountDecrement = () => {
  //   setPizzaCount(pizzaCount - 1);
  //   setBurgerCount(burgerCount - 1);
  //   setChatCount(chatCount - 1);
  // };


//   const [formState, setFormState] = useState({ email: "", password: ""});
//   const {email, password} = formState;

// const handleChange = (e) => {
//   let value = e.target.value;
//   let name = e.target.name;


// setFormState((prev) => ({ ...prev, [name]: value}));
// };

// useEffect(() => {
//   const forms = JSON.parse(localStorage.getItem("user"));
//   if (email === "" && password === "") {
//     setFormState((prev)=> ({ ...prev, ...forms}));
//   }
// }, [email, password]);

// useEffect(() => {
//   localStorage.setItem("user" , JSON.stringify(formState));
// }, [email, password]);



// 1  drop down 

// const [selectedOption, setSelectedOption] = useState(1)

// useEffect(() => {
//   const storedSelectedOption = parseInt(sessionStorage.getItem('selectedOption') || '1')
//   setSelectedOption(storedSelectedOption)
// }, [])

// const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   setSelectedOption(parseInt(e.target.value))
//   sessionStorage.setItem('selectedOption', e.target.value)
// }


  

  // const Submit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/createOrder", {
  //       pizzaCount,
  //       burgerCount,
  //       chatCount
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/menu");
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const options = [
  //   {value: '', text: '--Choose an option--'},
  //   {value: 'apple', text: 'Apple'},
  //   {value: 'banana', text: 'Banana '},
  //   {value: 'kiwi', text: 'Kiwi '},
  // ];

  // const [selected, setSelected] = useState(options[0].value);

  // const handleChange = event => {
  //   console.log(event.target.value);
  //   setSelected(event.target.value);

  // const [selectedValue, setSelectedValue] = useState("");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  


  return (
    <div>
      {/* <label htmlFor="myDropdown">Select an option:</label>
      <select id="myDropdown" value={selectedValue} onChange={handleChange}>
        <option value="option1">Option 1 <span>Selected value: {selectedValue}</span></option>
        <option value="option2">Option 2 <span>Selected value: {selectedValue}</span></option>
        <option value="option3">Option 3 <span>Selected value: {selectedValue}</span></option>
      </select> */}


      <hr />
{/* 
      <select value={selectedValue} onChange={handleChange}>
      <option value="Pending">Pending</option>
      <option value="In progress">In progress</option>
      <option value="Ordered">Ordered</option>
    </select> */}
 <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {isDropdownOpen ? 'Close' : 'Select an option'}
      </button>
      {isDropdownOpen && (
        <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      )}
    </div>
  )
  };

export default Abouut;
