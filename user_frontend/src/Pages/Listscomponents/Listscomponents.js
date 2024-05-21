import React from 'react';
import './listscomponents.css';
import { Link } from 'react-router-dom';

const Listscomponents = () => {
  return (
        //   <div className="row">

        //     <Link to="" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        //       <div className="listitem d-flex justify-content-between p-4 aligh-items-center  border border-secondary shadow-sm">
        //         <h1>Menu</h1>
        //       </div>
        //     </Link>

        //     <Link to="" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        //       <div className="listitem d-flex justify-content-between p-4 aligh-items-center  border border-secondary shadow-sm">
        //         <h1>Ticket</h1>
        //       </div>
        //     </Link>

        //     <Link to="" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        //       <div className="listitem d-flex justify-content-between p-4 aligh-items-center border border-secondary shadow-sm">
        //         <h1>Admin</h1>
        //       </div>
        //     </Link>

        //     <Link to="" className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        //       <div className="listitem d-flex justify-content-between p-4 aligh-items-center  border border-secondary shadow-sm">
        //         <h1>Another</h1>
        //       </div>
        //     </Link>
        //   </div>

        <div class="container">
  
  <div className="box-container">
    <div className="box">
    <h1 className='heading'>Menu</h1>
        {/* <img src="" alt="" /> */}
       <Link to="/menuu"><p>Click here for Menu</p></Link>
    </div>
    
    <div className="box">
    <h1 className='heading'>Ticket</h1>
        {/* <img src="" alt="" /> */}
        <Link to="/ticket"><p>Click here for Ticket</p></Link>
    </div>
    {/* <div className="box">
    <h1 className='heading'>Admin</h1>
        <img src="" alt="" />
        <Link><p>Click here for Admin</p></Link>
    </div> */}
    <div className="box">
    <h1 className='heading'>ABC</h1>
        {/* <img src="" alt="" /> */}
        <Link><p>Click here for ABC</p></Link>
    </div>

  </div>
</div>
  )
}

export default Listscomponents
