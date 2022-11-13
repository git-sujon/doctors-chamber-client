import React from "react";
import PrimaryButton from "../../../componets/PrimaryButton";
import SectionName from "../../../componets/SectionName";
import formBg from "../../../assets/images/bg.png";

const Contact = () => {
  return (
    <section
      className="bg-accent  py-16 "
      style={{ backgroundImage: `url(${formBg})` }}
    >
      <div className="text-center">
        <SectionName>Contact Us</SectionName>
        <h2 className="text-4xl text-white">Stay Connected With Us</h2>
      </div>
      <div className="mt-20 flex flex-col justify-center lg:w-2/5 w-4/5 mx-auto space-y-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full "
        />
        <input type="text" placeholder="Subject" className="input w-full " />
        <textarea className="textarea" placeholder="Bio"></textarea>
        <div className="text-center">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
