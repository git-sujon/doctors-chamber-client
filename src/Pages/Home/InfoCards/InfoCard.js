import React from 'react';

const InfoCard = ({cardInfo}) => {
    const {title, icon, description, bgColor} = cardInfo
    return (
        <div className={`card md:card-side  shadow-xl text-white py-12 px-8 ${bgColor}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default InfoCard;