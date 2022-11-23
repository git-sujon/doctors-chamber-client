import { createBrowserRouter } from "react-router-dom";
import DashbordLayOut from "../Layout/DashbordLayOut";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddDoctors from "../Pages/Dashboard/Doctors/AddDoctors";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>,
              
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addDoctor',
                element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>,
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader:({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])