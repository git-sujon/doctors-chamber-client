import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal";
import Spinner from "../../Shared/Spinner/Spinner";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null) 
  
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctors`, {
      headers:{
        authorization: `bearer ${localStorage.getItem('DoctorChamberToken')}`
      }
      });
      const data = await res.json();
      return data;
    },
  });

  const modalCancel = () => {
    setDeletingDoctor('')
  }
  
  const deleteHandler = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers:{
        authorization: `bearer ${localStorage.getItem('DoctorChamberToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, idx) => (
              <tr key={doctor._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    className="w-10 rounded-full"
                    src={doctor.image}
                    alt=""
                  />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn  btn btn-secondary">
                    open modal
                  </label>

                  {/* <button
                    onClick={() => deleteHandler(doctor._id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor &&
        <ConfirmationModal
        title={'Do You Really Want?'}
        message= {`You are going to delete ${deletingDoctor.name}`}
        doctorClass='text-secondary'
        modalCancel={modalCancel}
        actionMessage= 'Delete'
        successAction= {()=>deleteHandler(deletingDoctor)}
        
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
