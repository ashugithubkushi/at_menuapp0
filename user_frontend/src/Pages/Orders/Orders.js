// import React, { useEffect, useState } from "react";
// import "./orders.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Modal from "react-modal";
// import { useParams } from "react-router-dom";
// import { Layout } from "antd";
// import { Box } from "@mui/material";



// const Orders = () => {
//   const { id } = useParams();
//   const [orders, setOrders] = useState([]);
//   const [status, setStatus] = useState();
//   const [orderStatus, setOrderStatus] = useState([]);
//   const [statusform, setStatusform] = useState([]);
//   // const [myValue, setMyValue] = useState("");
//   const [food, setFood] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000")
//       .then((result) => setOrders(result.data))
//       .then((result) => {
//         setOrders(result.data);
//         // console.log(orders);
//       })
//       .catch((err) => console.log(err));
//   }, []);



//   const Update = (e, status, id) => {
//     e.preventDefault();
//     axios.put("http://localhost:3000/updateStatus/"+id  , {status})
//     .then(result => {
//         console.log(result)

//         // setStatus(false)
//         // console.log(status);

//         // navigate('/')
//     })
//     .catch(err => console.log(err))
//    }


//   const [selectedValue, setSelectedValue] = useState("");

//    const handleChange = (e) => {
//       setSelectedValue(e.target.value);
//     };
   

//   // const Update = (e) => {
//   //   e.preventDefault();
//   //   axios.put("http://localhost:3000/updateUser" +id  , {statusform})
//   //   .then(result => {
//   //       // console.log(result)
//   //       setStatusform(result.data);
//   //       // navigate('/')
//   //   })
//   //   .catch(err => console.log(err))
//   //  }

// // useEffect(() =>{
// //   axios.put("http://localhost:3000/updateUser" +id  , {statusform})
// // }, [])

// // const Update = (e) => {

// // }
// const [post, setPost] = useState({
//   title: '',
//   body: ''
// })



// //  dropdown
// // const [selectedOption, setSelectedOption] = useState(1)

// // useEffect(() => {
// //   const storedSelectedOption = parseInt(sessionStorage.getItem('selectedOption') || '1')
// //   setSelectedOption(storedSelectedOption)
// // }, [])

// // const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //   setSelectedOption(parseInt(e.target.value))
// //   sessionStorage.setItem('selectedOption', e.target.value)
// // };




//   return (

//     <Box sx={{display:"flex"}}>
//       {/* <Sidenav/> */}
//       <Box component="home" sx={{flexGrow:1, p:3}}>

       
//     <Layout>

//       <div className="w-100 vh-100 justify-content-center align-items-center">
//         <div className="w-100">
//           {/* <Link to="/login" className="btn btn-success float-end">
//             Logout
//           </Link> */}

//           <table className="table">
//             <thead>
//               <tr className="table-data">
//                 <th scope="row">Orderid</th>
//                 <th scope="row">Persons</th>
//                 <th scope="row">Num of persons</th>
//                 <th scope="row">Pizza</th>
//                 <th scope="row">Burger</th>
//                 <th scope="row">Chats</th>
//                 <th scope="row">Coffe</th>
//                 <th scope="row">Tea</th>
//                 <th scope="row">Cooldrink</th>
//                 <th scope="row">Status</th>
//                 <th scope="row">Ordered time</th>
//               </tr>
//             </thead>

// {/* <tbody> */}
//             {orders.map((item, i) => {
//               //  console.log(item)
            
//               // setOrderStatus[item._id] = item.status
//               // let obj1=[{item._id : item.status}]
//               // setOrderStatus(prevState => [...prevState, obj1])
//               // console.log(orderStatus)
              
//               return (
//                 <tbody>
//                   <tr key={i}>
//                     <td className="p-5 m-1" rowSpan={2} scope="row">
//                       {i + 1}
//                     </td>
//                     <td>Elders</td>
//                     <td>{item.numberOfElders}</td>
//                     <td>{item.pizzaCount}</td>
//                     <td>{item.burgerCount}</td>
//                     <td>{item.chatCount}</td>
//                     <td>{item.coffeCount}</td>
//                     <td>{item.teaCount}</td>
//                     <td>{item.coolDrinkCount}</td>
//                     <td className="status-btn p-5 m-1" rowSpan={2} scope="row">



//             {/* <h2>Status</h2> */}
//             <div className="mb-2">
//               <select className="form-control" name="" id=""
//                 onChange={(e) => Update(e, e.target.value, item._id)}
//                 // onChange={handleOnChange}
              
//                 //  value={item.status}
//                 //  value={orderStatus[item._id]}
//                 value={status} 
//                 // onChange={handleChange}
//                 >
//                 <option value="Pending" selected={item.status === 'Pending' ? 'selected':''}>Pending</option>
//                 <option value="In progress" selected={item.status === 'In progress' ? 'selected':''}>In progress</option>
//                 <option value="Ordered" selected={item.status === 'Ordered' ? 'selected':'' }>Ordered</option>
//                 </select>
//      </div>


// {/* 
//               <div>
//                 <input type="text"
//                 onChange={(event) => {
//                   const value = event.target.value;
//                   setFood(value);
//                 }} ></input>
//                 {food}
//               </div> */}

            
                
          

//             {/* <div>
//       <select
//         onChange={(e) => setMyValue(e.target.value)}
//         defaultValue={myValue}
//       >
//         <option>Option 1</option>
//         <option>Option 2</option>
//         <option>Option 3</option>
//       </select>
//       <h2>
//         {" "}
//         You selected{" "}
//         <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
//       </h2>
//       <button class="btn btn-success p-2  m-1"
//                             type="submit" 
//                             // onClick={() => setStatus(false)}
//                 onChange={(e) => setMyValue(e.target.value)}

//                             onClick={e => Update(e,item._id)}
//                           > 
//                             OK
//                           </button>
//                         </div> */}


//                       {/* select form */}
//                       {/* <div>
//                         <button class="btn btn-success p-2 m-1"
//                           type="btn"
//                           onClick={() => setStatus(true)}
//                 onChange={(e) => setStatus(e.target.value)}
                          
//                         >
//                           {
//                             item.status?item.status : "status"
//                           }
//                         </button>
//                         <Modal
//                           isOpen={status}
//                           onRequestClose={() => setStatus(false)}
//                           style={{
//                             overlay: {
//                               position: "fixed",
//                               zIndex: 1020,
//                               top: 0,
//                               left: 0,
//                               width: "100vw",
//                               height: "100vh",
//                               // background: "rgba(255, 255, 255, 0.75)",
//                               background: "rgba(255, 255, 255, 0.2)",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                             },
//                             content: {
//                               background: "rgba(64, 64, 64, 0.2)", 
//                               width: "45rem",
//                               maxWidth: "calc(40vw - 2rem)",
//                               maxHeight: "calc(100vh - 2rem)",
//                               overflowY: "auto",
//                               position: "relative",
//                               border: "1px solid #ccc",
//                               borderRadius: "0.3rem",
//                             },
//                           }}
//                         >
                          
//                           <h1>Ordered Status</h1>
                            
//                           <label className="m-3 p-4">
//               <select
//                 style={{ width: 250 }}
//                 className="form-control"
//                 type="dropdown"
//                 name="snacks"
//                 onChange={(e) => setOrderStatus(e.target.value)}
//               >
//                 <option value="N/A">N/A</option>
//                 <option value="order">Orderd</option>
//                 <option value="pending">Pending</option>
//                 <option value="in progress">In progress</option>
//               </select>
//             </label>
                             
//                           <button class="btn btn-success p-2  m-1"
//                             type="submit" 
//                             // onClick={() => setStatus(false)}
//                             onClick={e => Update(e,item._id)}
//                           > 
//                             OK
//                           </button>
                          
//                         </Modal>
//                       </div> */}
//                     </td>



//                     <td class="status-btn p-5 m-1" rowSpan={2} scope="row">
//                       {new Date(item.orderDateTime).toLocaleString(undefined, {
//                         timeZone: "Asia/Kolkata",
//                       })}
//                     </td>
//                   </tr>
//                   <tr key={i}>
//                     {/* <td scope="row">{i + 1}</td> */}
//                     <td>Childrens</td>
//                     <td>{item.numberOfChild}</td>
//                     <td>{item.pizzaCount1}</td>
//                     <td>{item.burgerCount1}</td>
//                     <td>{item.chatCount1}</td>
//                     <td>{item.coffeCount1}</td>
//                     <td>{item.teaCount1}</td>
//                     <td>{item.coolDrinkCount1}</td>
//                   </tr>
//                 </tbody>
//               );
//             })}
//             {/* </tbody> */}
//           </table>
//         </div>
//       </div>
//     </Layout>
//     </Box>
//     </Box>
//   );
// };

// export default Orders;
