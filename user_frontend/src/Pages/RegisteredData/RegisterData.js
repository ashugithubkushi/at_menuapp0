import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
// import Layout from "antd/es/layout/layout";

import { Box } from "@mui/material";
// import Sidebar from "../../Sidebar";
import './registerdata.css'

const RegisterData = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => setTableData(response.data))
      .then((response)=> {
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
    <Box sx={{ display: "flex" }}>
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
                <th>Sl No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                {/* <th>Confirm password</th> */}
                {/* Add more headers as needed */}
              </tr>
            </thead>

          
            {tableData.map((item, i) => {
              return (
            <tbody>
              
                <tr key={i}>
                  <td className="p-5 m-1">
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
  );
};

export default RegisterData;

