import React from "react";

const ServicesCard = ({cardInfo}) => {

    const {title, icon, description,} = cardInfo
  return (
    <div className="card  bg-base-100 shadow-xl px-8 py-6">
    <figure className="px-10 pt-10">
      <img
        src={icon}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p className="">{description}</p>
      
    </div>
  </div>
  );
};

export default ServicesCard;
