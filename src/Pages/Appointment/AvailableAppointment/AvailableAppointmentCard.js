import React from "react";
import PrimaryButton from "../../../componets/PrimaryButton";
import AppointmentFormModal from "../AppointmentFormModal/AppointmentFormModal";

const AvailableAppointmentCard = ({ appinfo , setModalInfo}) => {
  const { name, slots } = appinfo;

  return (
    <div className="card w-96  shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-xl text-secondary font-bold text-center">{name}</h2>
        <p className="text-gray-700">
          {slots.length > 0 ? slots[0] : "No schedule available"}
        </p>
        <p className="text-gray-700">{`${
          slots.length > 0 ? slots.length : "No"
        } ${slots.length <= 1 ? "SPACE" : "SPACES"} AVAILABLE`}</p>
        <div className="card-actions justify-center">
          <label disabled= {slots.length === 0} onClick={()=>setModalInfo(appinfo)} htmlFor="AppointmentFormModalId" className={`btn ${slots.length === 0 ? 'btn-accent': 'btn-primary ' }   text-white `}>
          Book Appointment
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentCard;
