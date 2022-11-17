import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import AppointmentFormModal from "../AppointmentFormModal/AppointmentFormModal";
import AvailableAppointmentCard from "./AvailableAppointmentCard";

const AvailableAppointment = ({ selectedDate }) => {
  const date = format(selectedDate, "PPPP");
  console.log(date);

  // const [appointmentCardInfo,setAppointmentCardInfo] = useState([])
  const [modalInfo, setModalInfo] = useState(null);

  const { data: appointmentCardInfo = [], refetch,  isLoading } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="">
      <p className="text-secondary font-bold text-center my-10">
        Available Appointments on
        <span className="text-gray-800">{format(selectedDate, "PPPP")}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentCardInfo.map((appinfo) => (
          <AvailableAppointmentCard
            appinfo={appinfo}
            key={appinfo._id}
            setModalInfo={setModalInfo}
          ></AvailableAppointmentCard>
        ))}
      </div>
      {modalInfo && (
        <AppointmentFormModal
          selectedDate={selectedDate}
          setModalInfo={setModalInfo}
          modalInfo={modalInfo}
          refetch={refetch}
        ></AppointmentFormModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
