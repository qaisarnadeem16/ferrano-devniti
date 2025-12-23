import React from "react";
import SectionHeading from "../shared/common/section-heading";
import Image from "next/image";
import Container from "../shared/common/container";
import { StarIcon } from "../../svg/icons";

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
      name: "Sophie L.",
      city: "Paris",
      rating: 5,
      text: "The ultimate pod perfectly fits our villa terrace. Cooking, entertaining, and relaxing outdoors has never been easier. The 5-year warranty gives peace of mind, and the design draws compliments from every guest.",
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
      <div className="absolute inset-0 z-0  ">
        <Image
          src={"/images/italian.jpg"}
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80 " />

      <div className="relative z-10 py-20">
        <Container>
          <SectionHeading
          normalText="Stories From Outdoor Living"
          normalClassName="max-w-[673px] text-4xl! lg:text-[75px]! normal-case font-medium! "
        />
        <p className="my-4">
          Rated <b> 4.7 (Excellent) </b> based on <b>7,820+ reviews</b>
        </p>
        </Container>

        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 max-w-360 overflow-hidden mx-auto">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="md:max-w-[320px] w-full h-fit bg-[#F3EDE6] rounded-xl p-6 flex flex-col gap-4 "
              >
                {/* Rating badge */}
                <div className="flex gap-0.5   w-fit  rounded-md">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xs p-1 -1 bg-primary"
                    >
                      <StarIcon/>
                    </span>
                  ))}
                </div>

                {/* Name */}
                <p className="pt-2 text font-medium text-black">
                  {item.name}, <span className=" ">{item.city}</span>
                </p>

                {/* Content */}
                <p className="text-[15px]  text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
