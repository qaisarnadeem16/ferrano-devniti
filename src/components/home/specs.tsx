import React from "react";
import SectionHeading from "../shared/common/section-heading";
import Container from "../shared/common/container";
import Image from "next/image";

const Specifications = () => {
  const images = [
    { src: "/images/show1.jpg", type: "fixed" }, // 1
    { src: "/images/show2.jpg", type: "flex" }, // 2
    { src: "/images/show3.jpg", type: "flex" }, // 3
    { src: "/images/show2.jpg", type: "fixed" }, // 4
  ];

  // split into rows
  const rows = [images.slice(0, 2), images.slice(2, 4)];

  const specifications = [
    {
      id: "mini",
      title: "MINI - ESSENTIAL SETUP",
      subtitle: "",
      icon: (
        <Image
          src={"/svg/s1.svg"}
          alt="specs"
          height={60}
          width={60}
          className=""
        />
      ),
      features: [
        "Full Stainless Steel Pod",
        "BBQ Grill (Gas)",
        "Sink and Tap",
        "Drinks Refrigerator",
        "Ambient Lighting",
      ],
    },
    {
      id: "standard",
      title: "STANDARD - ELEVATED",
      subtitle: "",
      icon: (
        <Image
          src={"/svg/zap.svg"}
          alt="specs"
          height={60}
          width={60}
          className="w "
        />
      ),
      features: [
        "Stainless Steel Pod",
        "BBQ Grill (Gas)",
        "Extractor Hood",
        "Drinks Refrigerator",
        "Integrated Irrigation",
      ],
    },
  ];

  return (
    <Container
      className="relative overflow-hidden py-24 font-outfit"
      parentStyle=""
    >
      <div className="space-y-5.5">
        <SectionHeading
          normalText="Specifications"
          highlightedText="At a Glance"
          highlightedClassName="text-primary!"
          underlineClassName="bg-primary!"
        />
        <p className="text-lg">
          Choose the model that matches your outdoor lifestyle.
        </p>
      </div>

      {/* grid  */}
      <div className="relative my-20 grid lg:grid-cols-3 gap-6">
        {/*   Image */}
        <div className="lg:col-span-1">
          <div className="relative h-102.5 lg:h-full w-full ">
            <Image
              src={"/images/c2.png"}
              alt="Luxury outdoor grill setup"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Specification Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6.25 ">
          {specifications.map((spec) => (
            <div
              key={spec.id}
              className="  px-8.25 py-9.75 flex flex-col  bg-[#CA85441F] space-y-5"
            >
              {/* Icon */}
              <div className="mb-4 text-primary">{spec.icon}</div>

              {/* Title */}
              <h4 className="text-white font-bold text-[22px] tracking-wider mb-1 uppercase">
                {spec.title}
              </h4>
              <p className="text-white/60 text-xs mb-6 uppercase tracking-wide">
                {spec.subtitle}
              </p>

              {/* Features List */}
              <ul className="space-y-3 flex-1">
                {spec.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 text-white text-lg"
                  >
                    <Image
                      src={"/svg/vector.svg"}
                      alt="specs"
                      height={11}
                      width={14}
                      className="text-primary"
                    />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* show case gallery  */}
      <div className="relative flex flex-col lg:flex-row lg:h-168.5 gap-7">
        
        
        {/* elipse circles  */}
        <div className="absolute -right-44 -top-28 -z-20 h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" />
        <div className="absolute -left-44 -bottom-24 -z-10 h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" />

        <div className="space-y-12  lg:w-[55%]">
          {/* Title */}
          <SectionHeading
            normalText="A Showcase of Outdoor Luxury"
            normalClassName="text-4xl! lg:text-[50px]! font-bold! normal-case my-7 pt-3"
          />

          {/* 2x2 Small Images */}
          <div className="flex flex-col gap-7 ">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-7">
                {row.map((img, index) => (
                  <div
                    key={index}
                    className={`h-55 overflow-hidden ${
                      img.type === "fixed" ? "w-full sm:w-57" : "flex-1"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt="Outdoor luxury"
                      width={500}
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Large Hero Image */}
        <div className="  lg:w-[45%]">
          <Image
            src="/images/showbig.png"
            alt="Luxury outdoor grill station at night with lighting"
            width={1000}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Specifications;
