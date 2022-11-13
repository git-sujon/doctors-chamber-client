import React from 'react';
import doctorsChair from '../../assets/images/chair.png'
const AppointmentBanner = () => {
    return (
        <div className="hero my-52 mx-10 ">
        <div className="hero-content flex-col md:flex-row-reverse ">
          <img src={doctorsChair} alt='' className="w-full md:w-1/2  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;