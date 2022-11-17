import React from 'react';
import { Link } from 'react-router-dom';
import Appointment from '../Appointment/Appointment';
import Home from '../Home/Home';

const Dashboard = () => {
    return (
        <div>
         <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
        <p>Number One</p>
        <p>THis number two</p>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
  
      <li><Link>Sidebar Item 1</Link></li>
      <li><Link>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;