import React from 'react';
import doctorsChair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';



const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
   
    

    return (
        <div className="hero my-32 mx-10 ">
        <div className="hero-content flex-col md:flex-row-reverse ">
          <img src={doctorsChair} alt='' className="w-full md:w-1/2  rounded-lg shadow-2xl" />
          <div className='mr-10'>
           <DayPicker
               mode="single"
               selected={selectedDate}
               onSelect={setSelectedDate}
              
           ></DayPicker>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;