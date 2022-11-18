import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const DashbordLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
      <div className="drawer drawer-mobile">
        <input id="dashbord-drower" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="dashbord-drower"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashbord-drower" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link>Appointment</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DashbordLayOut;