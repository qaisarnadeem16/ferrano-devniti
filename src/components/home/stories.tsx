import React from "react";
import SectionHeading from "../shared/common/section-heading";
import Image from "next/image";
import Container from "../shared/common/container";

const Stories = () => {
  const testimonials = [
    {
      name: "Sophie L.",
      city: "Paris",
      rating: 5,
      text: "The ultimate pod perfectly fits our villa terrace. Cooking, entertaining, and relaxing outdoors has never been easier. The 5-year warranty gives peace of mind, and the design draws compliments from every guest.",
    },
    {
      name: "James R.",
      city: "London",
      rating: 5,
      text: "From consultation to installation, the team was professional and attentive. The modular design makes hosting effortless.",
    },
    {
      name: "Michael H.",
      city: "New York",
      rating: 5,
      text: "Effortless installation, stunning design, and premium quality. Ferrano elevated our outdoor experience; it's practical, elegant, and built to last.",
    },
  ];

  return (
    <div className="relative font-outfit">
      {/* Background Image */}
      <div className="absolute inset-0 -z-0  ">
        <Image
          src={"/images/italian.jpg"}
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80 " />

      <Container className="relative z-10 py-20">
        <SectionHeading
          normalText="Stories From Outdoor Living"
          normalClassName="w-[673px] text-[75px]! normal-case font-medium! "
        />
        <p className="my-4">
          Rated <b> 4.7 (Excellent) </b> based on <b>7,820+ reviews</b>
        </p>

        <div>
          <div className="grid grid-cols-3 gap-6 py-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-[320px] h-fit bg-[#F3EDE6] rounded-xl p-6 flex flex-col gap-4 shrink-0"
              >
                {/* Rating badge */}
                <div className="flex gap-0.5   w-fit  rounded-md">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xs px-2 py-1 bg-primary"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Name */}
                <p className="pt-2 text-sm font-semibold text-black">
                  {item.name}, <span className=" ">{item.city}</span>
                </p>

                {/* Content */}
                <p className="text-[15px] leading-relaxed  text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stories;
