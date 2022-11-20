import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import IsAdmin from "../Hooks/IsAdmin";
import Navbar from "../Pages/Shared/Navbar";

const DashbordLayOut = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email)
  const [isAdmin] = IsAdmin(user?.email);
  console.log(isAdmin)

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashbord-drower"
            type="checkbox"
            className="drawer-toggle"
          />
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
                <Link to="/dashboard">Appointment</Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/allusers">All Users</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayOut;
