import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";




const Dashboard = () => {

  const {user} = useContext(AuthContext)
  
  const url = `http://localhost:5000/bookings?email=${user?.email}`

  const {data: myAppointment = []} = useQuery({
    queryKey: ['bookings',user?.email ],
    queryFn: async ()=> {
      const res= await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('DoctorChamberToken')}`
        }
      })
      const data= await res.json()
      return data
    }
  })



  return (
    <div className="overflow-x-auto w-full h-screen">
    <table className="table w-full">
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Services</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}

        {
          myAppointment.map((booking, idx) => <tr key={idx}>
            <th>{idx +1}</th>
            <td>{booking.patientName}</td>
            <td>{booking.servicesName}</td>
            <td>{booking.appintmentDate}</td>
            <td>{booking.slot}</td>
          </tr>)
        }
        
       
      </tbody>
    </table>
  </div>
  );
};

export default Dashboard;
