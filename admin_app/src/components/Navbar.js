// import React, { useEffect, useState } from 'react';
// import "./navbar.css";
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => {
//   const location = useLocation();

//   const [users, setUsers] = useState([]);


//   const userData = JSON.parse(localStorage.getItem("user"));

 



  
//   if (location.pathname === "/") {
//     return null;
//   }

//   return (
//     <nav className="container-fluid position-fixed">
//       <div className=" d-flex justify-content-between align-items-center">
//         <b><h1 className='text'>ATMOS</h1></b>

//         <div className='form d-flex'>
//           <form className="custom-search-form d-flex me-3">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <div className="nav-item rounded border">
//               <a className="nav-link text-dark p-2" aria-current="page" href="#">
//                 <i className='bi bi-search' style={{border: "none"}}></i>
//               </a>
//             </div>
//           </form>
//           <div className='d-flex align-items-center'>

// <div className=''>
//       <h4 className='m-1' >Welcome, {userData.username}!</h4>
//       <p className='me-3' >Email: {userData.email}</p>
//       {/* Display other user information */}
//     </div>
//             <Link className="btn btn-danger m-2 p-1" to="/">Logout</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState } from 'react';
// import "./navbar.css";
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => {
//   const location = useLocation();
//   const [users, setUsers] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("user"));

//   if (location.pathname === "/") {
//     return null;
//   }

//   return (
//     // <nav className="container-fluid position-fixed">
//     <nav className="container-fluid">
//       <div className="d-flex justify-content-between align-items-center navbar-container">
//         <b><h1 className='text'>ATMOS</h1></b>

//         {/* <div className='form d-flex'> */}
//           <form className="custom-search-form d-flex">
//             <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//             <div className="nav-item rounded border">
//               <a className="nav-link text-dark" aria-current="page" href="#">
//                 <i className='bi bi-search' style={{ border: "none" }}></i>
//               </a>
//             </div>
          
//           <div className='d-flex align-items-center'>
//             <div className=''>
//               <h4 className='' >Welcome, {userData.username}!</h4>
//               <p className='' >Email: {userData.email}</p>
//             </div>
//             <Link className="btn btn-danger p-1" to="/">Logout</Link>
//           </div>
//           </form>

//         {/* </div> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="container-fluid">
      <div className="d-flex justify-content-between align-items-center navbar-container">
        <b><h1 className='text'>ATMOS</h1></b>

        <div className='d-flex align-items-center'>

        {/* <div className="navbar-form-container"> */}
        <form className="custom-search-form d-flex align-items-center">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <div className="nav-item rounded border">
            <a className="nav-link text-dark" aria-current="page" href="#">
              <i className='bi bi-search' style={{ border: "none" }}></i>
            </a>
          </div>
        </form>
      {/* </div> */}

          <div className=''>
            <h4 className='mt-2' >Welcome, {userData.username}!</h4>
            <p className='' >Email: {userData.email}</p>
          </div>
          <Link className="btn btn-danger p-1" to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

