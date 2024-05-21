// import React from 'react';
// import { Link } from 'react-router-dom';
// import './dashboard.css'
// import { Column } from '@ant-design/plots';
// import { Table } from 'antd';
// // import type { TableColumnsType } from 'antd';

// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "../Home/Home"
// import Orders from "../Orders/Orders"
// import RegisteredData from "../RegisteredData/RegisteredData"
import Sidenav from "../../Component/Sidenav"
import Home from "../Home/Home"
// import Orders from "../Orders/Orders"
// import RegisteredData from "../RegisteredData/RegisteredData"








// const Dashboard = () => {

  
//   // const columns = [
//   //   {
//   //     title: 'Orderid',
//   //     dataIndex: 'name',
//   //   },
//   //   {
//   //     title: 'Persons',
//   //     dataIndex: 'age',
//   //   },
//   //   {
//   //     title: 'Num of persons',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Pizza',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Burger',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Chats',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Coffe',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Tea',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Cooldrink',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Status',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Ordered time',
//   //     dataIndex: 'address',
//   //   },
//   // ];
  
//   // const data1 = [];
//   // for (let i = 0; i < 100 ; i++) {
//   //   data1.push({
//   //     key: i,
//       // name: `Edward King ${i}`,
//       // age: 32,
//       // address: `London, Park Lane no. ${i}`,

//     // });
//   // }

//   const config = {
//     data: {
//       type: 'fetch',
//       value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
//     },
//     xField: '月份',
//     yField: '月均降雨量',
//     colorField: 'name',
//     group: true,
//     style: {
//       // 矩形四个方向的内边距
//       inset: 5,
//       // 矩形单个方向的内边距
//       // insetLeft:5,
//       // insetRight:20,
//       // insetBottom:10
//       // insetTop:10
//     },
//   };

//   return (
//     // <body>
//     //      <div className="container-fluid">
//     //       <div className="row">

//     //         <Link to="subcomponent1" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
//     //           <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm">
//     //             {/* <i className='bi bi-currency-dollar fs-1 text-success'></i> */}
//     //             <i class="bi bi-bar-chart" aria-hidden="true"></i>
//     //             <div>
//     //               <span>Orders</span>
//     //               <h2>123</h2>
//     //             </div>
//     //           </div>
//     //         </Link>

//     //         <Link to="subcomponent2" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
//     //           <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm">
//     //             <i className='bi bi-currency-dollar fs-1 text-danger'></i>
//     //             <div>
//     //               <span>Orders</span>
//     //               <h2>123</h2>
//     //             </div>
//     //           </div>
//     //         </Link>

//     //         <Link to="subcomponent3" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
//     //           <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm">
//     //             <i className='bi bi-currency-dollar fs-1 text-secondary'></i>
//     //             <div>
//     //               <span>Orders</span>
//     //               <h2>123</h2>
//     //             </div>
//     //           </div>
//     //         </Link>

//     //         <Link to="subcomponent4" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
//     //           <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm">
//     //             <i className='bi bi-currency-dollar fs-1 text-primary'></i>
//     //             <div>
//     //               <span>Orders</span>
//     //               <h2>123</h2>
//     //             </div>
//     //           </div>
//     //         </Link>
//     //       </div>
//     //     </div>
//     // </body>

//     // <div>
//     //   <h3 className='mb-4'>Dashboard</h3>
//     //   <div className="d-flex justify-content-between align-items-center gap-3">
//     //     <div className="d-flex flex-grow-1 bg-white p-3 rounded-3">
//     //       <div>
//     //         <p>Total</p>
//     //         <h4>123</h4>
//     //       </div>
//     //       <h6>12%</h6>  
//     //     </div>
//     //   </div>
      
//     //   <div className="d-flex justify-content-between align-items-center gap-3">
//     //     <div className="d-flex flex-grow-1 bg-white p-3 rounded-3">
//     //       <div>
//     //         <p>Total</p>
//     //         <h4>123</h4>
//     //       </div>
//     //       <h6>12%</h6>  
//     //     </div>
//     //   </div>
      
//     //   <div className="d-flex justify-content-between align-items-center gap-3">
//     //     <div className="d-flex flex-grow-1 bg-white p-3 rounded-3">
//     //       <div>
//     //         <p>Total</p>
//     //         <h4>123</h4>
//     //       </div>
//     //       <h6>12%</h6>  
//     //     </div>
//     //   </div>

//     // </div>

//     <div className="container-fluid"><h3>Dashboard</h3>
//     <div className="row ">

//       <Link to="subcomponent1" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
//         <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm rounded-3">
//           {/* <i className='bi bi-currency-dollar fs-1 text-success'></i> */}
//           <i class="bi bi-bar-chart" aria-hidden="true"></i>
//           <div>
//             <span>Orders</span>
//             <h2>123</h2>
//           </div>
//         </div>
//       </Link>

//       <Link to="subcomponent2" className="col-12 col-sm rounded-3-6 col-md-4 col-lg-3 p-3">
//         <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm rounded-3">
//           <i className='bi bi-currency-dollar fs-1 text-danger'></i>
//           <div>
//             <span>Orders</span>
//             <h2>123</h2>
//           </div>
//         </div>
//       </Link>

//       <Link to="subcomponent3" className="col-12 col-sm rounded-3-6 col-md-4 col-lg-3 p-3">
//         <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm rounded-3">
//           <i className='bi bi-currency-dollar fs-1 text-secondary'></i>
//           <div>
//             <span>Orders</span>
//             <h2>123</h2>
//           </div>
//         </div>
//       </Link>

//       <Link to="subcomponent4" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
//         <div className="d-flex justify-content-between p-4 aligh-items-center bg-white border border-secondary shadow-sm rounded-3">
//           <i className='bi bi-currency-dollar fs-1 text-primary'></i>
//           <div>
//             <span>Orders</span>
//             <h2>123</h2>
//           </div>
//         </div>
//       </Link>
//     </div>


//     <div className="mt-3 justify-content-between p-3 aligh-items-center bg-white border border-secondary shadow-sm rounded-3">
//       <h3 className=''>Order statics</h3>
//       <div><Column {...config} /></div>
//     </div>


//    <div>
//    {/* <Table columns={columns} dataSource={data1} /> */}
//    </div>
//     {/* <Orders/> */}
//   </div>
//   )
// }

// export default Dashboard



// import React from 'react'
// import Home from '../../Component/Home/Home';
// import Orders from '../../Component/Orders/Orders';
// import RegisteredData from '../../Component/RegisteredData/RegisteredData';




const Dashboard = () => {
  return (
   
    <>
    <Sidenav/>
    {/* <Home/> */}
    </>
   
  )
}

export default Dashboard

