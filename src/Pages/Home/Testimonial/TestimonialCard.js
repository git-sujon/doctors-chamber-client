import React from "react";

const TestimonialCard = ({ testimonialCard }) => {
  const { paragraph, reviewerName, reviewerImg, reviewerLocation } =
    testimonialCard;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{paragraph}</p>

        <div className="card-actions justify-start items-center mt-2">
          <div className="avatar">
            <div className="w-20 rounded-full">
             <div></div>
             <img src={reviewerImg} alt="" />
            </div>
           
          </div>
          <div className="ml-3">
                <p className="text-xl font-semibold text-gray-800">{reviewerName}</p>
                <p className="font-semibold text-gray-700">{reviewerLocation}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
