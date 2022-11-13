import React from "react";
import SectionName from "../../../componets/SectionName";
import comma from "../../../assets/icons/quote.svg";
import reviewerImage1 from "../../../assets/images/people1.png";
import reviewerImage2 from "../../../assets/images/people2.png";
import reviewerImage3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialCards = [
    {
      id: 1,
      paragraph:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      reviewerName: "Winson Herry",
      reviewerImg: reviewerImage1,
      reviewerLocation: "United State",
    },
    {
      id: 2,
      paragraph:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      reviewerName: "Amma Stone",
      reviewerImg: reviewerImage2,
      reviewerLocation: "Russia",
    },
    {
      id: 1,
      paragraph:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      reviewerName: "Princes Sokina",
      reviewerImg: reviewerImage3,
      reviewerLocation: "Japan",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <SectionName>Testimonial</SectionName>
          <h2 className="text-4xl font-bold">What Our Patients Says</h2>
        </div>
        <div>
            <img className="w-48" src={comma} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-36">
        {testimonialCards.map((testimonialCard) => (
          <TestimonialCard
            key={testimonialCard.id}
            testimonialCard={testimonialCard}
          ></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
