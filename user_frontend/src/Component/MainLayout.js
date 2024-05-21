import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  TableOutlined,
  OrderedListOutlined
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Orders from '../Pages/Orders/Orders';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h1 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>A
              <img src="" alt="" />
            </span>
            <span className='lg-logo'>ATMOS</span>
            </h1>
        </div>

       
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) => {
                if (key === "signout"){
                   
                } else {
                  navigate(key);
                }
          }}

          items={[
            {
              key: '',
              icon: <DashboardOutlined classname="fs-4" />,
              label: 'Dashboard',
              // style: { color: "#6c8f7f"}
            },
            {
              key: 'Orders',
              icon: <OrderedListOutlined classname="fs-4" />,
              label: 'Orders',
            },
            {
              key: 'Register',
              icon: <OrderedListOutlined classname="fs-4" />,
              label: 'Register',
            },
            {
              key: 'Reports',
              icon: <TableOutlined classname="fs-4" />,
              label: 'Reports',
              children:[
                {
                  key: 'site',
              icon: <TableOutlined classname="fs-4" />,
              label: 'site reports',
                },
                {
                  key: 'office',
              icon: <TableOutlined classname="fs-4" />,
              label: 'office reports',
                },
              ]
            },
          ]}

          
        />
         {/* <div>
    <Link to="/dashboard" className="nav-option option1">
        <i className='bi bi-house'></i>
        <h5>Home</h5>
    </Link>
    
    <Link to="orders" className="nav-option option1">
        <i className='bi bi-table'></i>
        <h5>Orders</h5>
    </Link>
    
    <Link to="reports" className="nav-option option1">
        <i className='bi bi-table'></i>
        <h5>Reports</h5>
    </Link>
    
    </div> */}
      </Sider>

      <Layout>
        <Header
         className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          

          <div className="d-flex gap-3 align-items-center">
            {/* <div>
              <form class="d-flex">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        <button class="btn btn-success ms-2" type="submit">UserName</button>
      </form>
            </div> */}
            <div className='position-relative'><IoMdNotificationsOutline className='fs-4'/>
          <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span></div>
          <button class="btn btn-success ms-2" type="submit">UserName</button>
          </div>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 2800,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >


          <Dashboard/>
          <div className='mt-4'>
          <Orders/>
          {/* <Outlet/> */}
          </div>


        </Content>
        
      </Layout>
    </Layout>
  );
};
export default MainLayout;


// import { Layout } from 'antd'
// import React from 'react'
// import Sidebar from '../Pages/Sidebar'

// const MainLayout = () => {
//   return (
//     <Layout>
//         <Sidebar/>
//     </Layout>
//   )
// }

// export default MainLayout