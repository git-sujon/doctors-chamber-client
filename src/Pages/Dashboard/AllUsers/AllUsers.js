import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner/Spinner";

const AllUsers = () => {
  const { data: allUsers =[],isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('DoctorChamberToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });

  const adminHandler =(user) => {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem('DoctorChamberToken')}`
        }
      })
      .then(res => res.json())
      .then(data=> {
        console.log(data)
        if(data.modifiedCount){
          toast.success(`${user.name} is now admin`)
          refetch()
        }
      })
      .catch(err =>console.log(err))
  }

  if(isLoading){
    <Spinner></Spinner>
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <h1 className="text-3xl font-semibold text-gray-800 ml-24">Total Users: {allUsers.length}</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         

         {  allUsers &&
            allUsers?.map((user)=>    <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                        // src={user?.photoURL}
                          src={'https://png.pngtree.com/element_our/png/20181014/attitude-emoji-icon-design-vector-png_124998.jpg'}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
         
                    </div>
                  </div>
                </td>
                <td>
                 {user?.email}
            
               
                </td>
                <td>{user?.password}</td>
                <td>
                  {
                    !user?.role &&
                    <button onClick={()=>adminHandler(user)} className="btn btn-accent text-white">Make Admin</button>
                  }
                </td>
                <th>
                  <button className="btn btn-ghost ">Delete</button>
                </th>
              </tr>)
         }

      

         
          </tbody>

         
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
