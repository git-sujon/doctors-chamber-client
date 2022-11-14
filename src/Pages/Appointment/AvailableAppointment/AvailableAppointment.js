import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentFormModal from '../AppointmentFormModal/AppointmentFormModal';
import AvailableAppointmentCard from './AvailableAppointmentCard';

const AvailableAppointment = ({selectedDate}) => {
    
    const [appointmentCardInfo,setAppointmentCardInfo] = useState([])

    const [modalInfo , setModalInfo] = useState(null)
 
    useEffect(()=>{
    fetch(`servicesInfo.json`)
    .then(res=> res.json())
    .then(data => setAppointmentCardInfo(data))

    }, [])
    return (
        <div className=''>
            <p className='text-secondary font-bold text-center my-10'>Available Appointments on <span className='text-gray-800'>{format (selectedDate, 'PPPP')}</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentCardInfo.map(appinfo => <AvailableAppointmentCard 
                    appinfo= {appinfo}
                    key={appinfo._id}
                    setModalInfo={setModalInfo}
                ></AvailableAppointmentCard>)
            }
            </div>
            {
                modalInfo && <AppointmentFormModal selectedDate={selectedDate} setModalInfo={setModalInfo} modalInfo = {modalInfo }></AppointmentFormModal>
            }

        </div>
    );
};

export default AvailableAppointment;