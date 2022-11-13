import React from "react";
import PrimaryButton from "../../../componets/PrimaryButton";
import bgimage from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
import SectionName from "../../../componets/SectionName";

const Appointment = () => {
  return (
    <section className="text-white pr-32 my-44" style={{backgroundImage: `url(${bgimage})`}}>
      <div className="hero ">
        <div className="flex flex-col md:flex-row  items-center">
          <img
            src={doctor}
            alt=""
            className="  -mt-36  "
          />
          <div className="">
          <SectionName>Appointment</SectionName>
            <h1 className="text-4xl font-bold">
              
              Make an appointment Today
            </h1>
            <p className="py-6">
            
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
