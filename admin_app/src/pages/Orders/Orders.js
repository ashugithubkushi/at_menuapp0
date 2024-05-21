import React, { useEffect, useState } from "react";
import "./orders.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
// import { Layout } from "antd";
// import LineChat from '../../components/LineChart';
// import PieChat from '../../components/PieChart';
import { Box } from '@mui/material';
import Sidebar from '../../Sidebar'
import Header from "./Header";
import Navbar from "../../components/Navbar";
// import Layout from "../../components/Layouts/Layout";

const Orders = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();
  const [orderStatus, setOrderStatus] = useState([]);
  const [statusform, setStatusform] = useState([]);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);



  const [pendingCount, setPendingCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [orderedCount, setOrderedCount] = useState(0);

  useEffect(() => {
    // Fetch orders from local storage if available
    const ordersData = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(ordersData);
    countStatus(ordersData);

    // Fetch latest orders from the database
    fetchOrdersFromDatabase();
  }, []);

  useEffect(() => {
    // Update local storage whenever orders change
    localStorage.setItem("orders", JSON.stringify(orders));
    countStatus(orders);
  }, [orders]);

  const fetchOrdersFromDatabase = () => {
    axios
      .get("http://localhost:3000")
      .then((result) => {
        setOrders(result.data);
      })
      .catch((err) => console.log(err));
  };




  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((result) => setOrders(result.data))
      .then((result) => {
        setOrders(result.data);
        // console.log(orders);
        // setTotalOrdersCount(result.data.length);
        
        // 
        const totalCount = result.data.length;
        setTotalOrdersCount(totalCount);
        
        countStatus(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const countStatus = (orders) => {
    let pending = 0;
    let inProgress = 0;
    let ordered = 0;
    orders.forEach((order) => {
      switch (order.status) {
        case 'Pending':
          pending++;
          break;
        case 'In progress':
          inProgress++;
          break;
        case 'Ordered':
          ordered++;
          break;
        default:
          break;
      }
    });
    setPendingCount(pending);
    setInProgressCount(inProgress);
    setOrderedCount(ordered);
  };





  const Update = (e, status, id) => {
    e.preventDefault();
    axios.put("http://localhost:3000/updateStatus/"+id  , {status})
    .then(result => {
        console.log(result)

        // setStatus(false)
        // console.log(status);

        // navigate('/')
        fetchOrdersFromDatabase();
    })
    .catch(err => console.log(err))
   }


  const [selectedValue, setSelectedValue] = useState("");

   const handleChange = (e) => {
      setSelectedValue(e.target.value);
    };
   

  // const Update = (e) => {
  //   e.preventDefault();
  //   axios.put("http://localhost:3000/updateUser" +id  , {statusform})
  //   .then(result => {
  //       // console.log(result)
  //       setStatusform(result.data);
  //       // navigate('/')
  //   })
  //   .catch(err => console.log(err))
  //  }

// useEffect(() =>{
//   axios.put("http://localhost:3000/updateUser" +id  , {statusform})
// }, [])

// const Update = (e) => {

// }
const [post, setPost] = useState({
  title: '',
  body: ''
})

  return (


<>
<Box sx={{ marginTop: "64px"}}>
  <div className="header">
<Header showCounts={true}
  pendingCount={pendingCount}
  inProgressCount={inProgressCount}
  orderedCount={orderedCount}
/>
</div>


{/* 
<Sidebar/> */}

          <table className="table-bordered "
          sx={{ marginTop: "64px"}}>
            <thead>
              <tr>
              <th >Orderid</th>
                 <th >Persons</th>
                 <th >Num of persons</th>
                 <th >Total chat count</th>
                 <th >Status</th>
                 <th >Ordered time</th>
                 
              </tr>
            </thead>

{/* <tbody> */}
            {orders.map((item, i) => {
              //  console.log(item)
            
              // setOrderStatus[item._id] = item.status
              // let obj1=[{item._id : item.status}]
              // setOrderStatus(prevState => [...prevState, obj1])
              // console.log(orderStatus)
              
              return (
                <tbody>
                  <tr key={i}>
                    <td className="" rowSpan={2}>
                      {i + 1}
                      {/* <td>{item._id}</td> */}
                    </td>
                    <td>Elders</td>
                    <td>{item.elder.selectedElder}</td> {/* Display selected elder count */}
                    <td>
          {item.elder.tableData?.map((data, index) => (
            <div key={index}>
              {data.option}: {data.count}
            </div>
          ))}
        </td>
                    <td className="status-btn " rowSpan={2}>



            {/* <h2>Status</h2> */}
            <div className="mb-2">
              <select className="form-control" name="" id=""
                onChange={(e) => Update(e, e.target.value, item._id)}
                // onChange={handleOnChange}
              
                //  value={item.status}
                //  value={orderStatus[item._id]}
                value={status} 
                // onChange={handleChange}
                >
                <option value="Pending" selected={item.status === 'Pending' ? 'selected':''}>Pending</option>
                <option value="In progress" selected={item.status === 'In progress' ? 'selected':''}>In progress</option>
                <option value="Ordered" selected={item.status === 'Ordered' ? 'selected':'' }>Ordered</option>
                </select>
     </div>
</td>



                    <td class="status-btn" rowSpan={2}>
                      {new Date(item.orderDateTime).toLocaleString(undefined, 
                      {
                        timeZone: "Asia/Kolkata",
                      })}
                    </td>
                  </tr>
                  <tr key={i}>
                    {/* <td scope="row">{i + 1}</td> */}
                    <td>Childrens</td>
                    <td>{item.children.selectedChildren}</td> 
                    <td>
          {item.children.childrenTableData?.map((data, index) => (
            <div key={index}>
              {data.option}: {data.count}
            </div>
          ))}
        </td>
                    
                    </tr>
                </tbody>
              );
            })}
            {/* </tbody> */}
          </table>
        {/* </div> */}
      {/* </div> */}
    {/* </Layout> */}
</Box>
  

  </>
  
  )
}

export default Orders