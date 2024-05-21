import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../../Sidebar";
import Header from "../Orders/Header";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  Assignment as RegisterDataIcon,
} from "@mui/icons-material";
import AdminRegisterData from "../AdminRegisterData/AdminRegisterData";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import './dashboard.css'
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const [totalAdminRegisterDataCount, setTotalAdminRegisterDataCount] =
    useState(0);
  const [totalRegisterDataCount, setTotalRegisterDataCount] = useState(0);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);

  const [monthlyCounts, setMonthlyCounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/adminRegisterData")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalAdminRegisterDataCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/registerData")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalRegisterDataCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalOrdersCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);
      })
      .catch((err) => console.log(err));
  }, []);

  // Bar chart data
  const data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    labels: ["Admin register data", "User register data", "Orders data"],
    datasets: [
      {
        label: "Count",
        backgroundColor: "#d8d2d4",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: monthlyCounts,
      },
    ],
  };

  const areaGraphData = {
    labels: ["User Register", "Admin Register", "Orders"],
    datasets: [
      {
        label: "Counts",
        data: [ totalAdminRegisterDataCount, totalRegisterDataCount , totalOrdersCount],
        fill: true,
        backgroundColor: "rgba(113, 47, 160, 0.2)",
        borderColor: "rgba(39, 8, 60, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const barGraphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'counts',
        data: [0, 0, 0, 11, 8, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    
    <div className="dashboard-fixed  d-flex position-fixed">
     
      {/* <Header showCounts={false} /> */}
      <Box sx={{ display: "flex"}}>
        <div  style={{ backgroundColor: "#edeaef" }}>
        {/*  */}
          <div className="row m-3">
            {/* Order data */}
            <div class="atmos-header">
              <h2  style={{ color: "black",marginLeft: "15px" }} >Dashboard</h2>
            </div>
            {/* <div class="logo">
  <img src="C:\Users\KITS\at_menuapp\admin_app\src\image\Vector Smart Object 1.png" alt="Logo">DASHBOARD</img>
</div> */}
            <div className="col-sm-3">
            <div to="/orders" className="p-3">
                <div
                  className="d-flex justify-content-between p-3 mb-3 align-items-center shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#d8d2d4";
                    e.target.style.transform = "scale(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <OrdersIcon
                    fontSize="large"
                    style={{ fontSize: "4rem", color: "#4CAF50" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#4CAF50" }}
                    >
                      Total Orders Count
                      <h2> {totalOrdersCount}</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register data */}
            <div className="col-md-3">
              {/* <Link to="/registerdata" className="p-3 "> */}
              <div to="/registerdata" className="p-3">
                <div
                  className="d-flex justify-content-between p-3 mb-3 align-items-center shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#d8d2d4";
                    e.target.style.transform = "scale(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <RegisterDataIcon
                    fontSize="large"
                    style={{ fontSize: "4rem", color: "#674ae6" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#674ae6" }}
                    >
                     User Register count
                      {/*  */}
                      <h2> {totalRegisterDataCount}</h2>
                    </span>
                  </div>
                </div>
              {/* </Link> */}
              </div>
            </div>

            {/* Register data */}
            <div className="col-md-3">
              <div to="/adminregisterdata" className="p-3 ">
                <div
                  className="d-flex justify-content-between p-3 mb-3 align-items-center shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#d8d2d4";
                    e.target.style.transform = "scale(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <RegisterDataIcon
                    fontSize="large"
                    style={{ fontSize: "4rem", color: "#cf8867" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#cf8867" }}
                    >
                      Admin Register count
                      {/*  */}
                      <h2> {totalAdminRegisterDataCount}</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register data */}
            <div className="col-md-3">
              <div to="/adminregisterdata" className="p-3 ">
                <div
                  // className="d-flex justify-content-between p-5 mb-5 mr-5 align-items-center  border-secondary shadow-sm"
                  
                  className="d-flex justify-content-between p-3 mb-3 align-items-center shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#d8d2d4";
                    e.target.style.transform = "scale(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <RegisterDataIcon
                    fontSize="large"
                    style={{ fontSize: "4rem", color: "#cf8867" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#cf8867" }}
                    >
                      Admin Register count
                      <h2> {totalAdminRegisterDataCount}</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Area graph */}
  
            {/* <div className="col-md-6"> */}
            <div style={{ width: "50%",height: "150px"}}>
              <div
                className="d-flex flex-column justify-content-between p-3 m-3 align-items-center shadow-md"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  // margin: "1px",
                }}
              >
                <h4 style={{ marginBottom: "2px", marginTop: "0", marginLeft: "0", }}>Data1</h4>
                <hr style={{ width: "100%", marginBottom: "10px" }} />
                <Line
                  data={areaGraphData}
                  options={{
                    title: {
                      display: true,
                      text: "Monthly Counts",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>


            {/* <div style={{ width: "25%",height: "300px"}}>
              <div
                className="d-flex flex-column justify-content-between p-3 m-3 align-items-center shadow-md"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  // margin: "1px",
                }}
              >
                <h4 style={{ marginBottom: "2px" }}>Monthly Counts</h4>
                <hr style={{ width: "100%", marginBottom: "10px" }} />
                <Line
                  data={areaGraphData}
                  options={{
                    title: {
                      display: true,
                      text: "Monthly Counts",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div> */}

<div style={{ width: "50%", height: "150%" }}>
  <div
    className="d-flex flex-column justify-content-between p-3 m-3 align-items-center shadow-md"
    style={{
      backgroundColor: "#fff",
      borderRadius: "10px",
      margin: "1px",
      height: "100%" // Ensure the inner div takes full height of the container
    }}
  >
    <h4 style={{ marginBottom: "2px" }}>Data2</h4>
    <hr style={{ width: "100%", marginBottom: "10px" }} />
    <Bar
      data={barGraphData}
      options={{
        title: {
          display: true,
          text: "Small Bar Graph",
          fontSize: 16, // Adjust font size as needed
        },
        legend: {
          display: true,
          position: "bottom",
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  </div>
</div>

            {/* <div className="col-md-2">
              <div className="d-flex justify-content-center">
                <Bar
                  data={data}
                  options={{
                    title: {
                      display: true,
                      text: "Data Counts",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                    scales: {
                      x: {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;
