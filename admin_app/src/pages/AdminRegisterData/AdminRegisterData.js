import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
// import Layout from "antd/es/layout/layout";

import { Box } from "@mui/material";
import Sidebar from "../../Sidebar";
// import './adminregisterdata.css'
import Header from "../Orders/Header";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../../components/Navbar";

const AdminRegisterData = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState([]); 
  const [totalAdminRegisterDataCount, setTotalAdminRegisterDataCount] = useState(0);

  //
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/adminRegisterData")
      // .then((result) => setTableData(result.data))
      .then((response)=> {

        const totalCount = response.data.length;
        setTotalAdminRegisterDataCount(totalCount);

        setTableData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const Update = (e, status, id) => {
  //   e.preventDefault();
  //   axios
  //     .put("http://localhost:3000/createRegister/" + id, { status })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
     {/* <Dashboard */}
      
  {/* /> */}
    {/* <Header showCounts={false}/> */}

    <Box sx={{ display: "flex" , marginTop: "64px" }}>
      {/* <Sidebar /> */}
      <div>
        {/* <Link to="/login" className="btn btn-success float-end">
          Logout
        </Link> */}
      </div>

      

      {/* <div className="w-100 vh-100 justify-content-center align-items-center"> */}
        {/* <div className="w-100"> */}
          <table>
            <thead>
              <tr>
                <th scope="row">Sl No</th>
                <th scope="row">Username</th>
                <th scope="row">Email</th>
                <th scope="row">Password</th>
                {/* <th>Confirm Password</th> */}
                {/* Add more headers as needed */}
              </tr>
            </thead>

          
            {tableData.map((item, i) => {
              return (
            <tbody>
              
                <tr key={i}>
                  <td className="p-5 m-1" scope="row">
                    {i + 1}
                  </td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  {/* <td>{item.confirmpassword}</td> */}
                  {/* Add more table cells as needed based on your data structure */}
                </tr>
            
            </tbody>
              );
            })}
            {/* ); */}
          </table>
        {/* </div> */}
      {/* </div> */}
    </Box>
    </>
  );
};

export default AdminRegisterData;

