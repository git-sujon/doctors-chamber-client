import { createBrowserRouter } from "react-router-dom";
import DashbordLayOut from "../Layout/DashbordLayOut";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
          
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashbordLayOut></DashbordLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>,
              
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])