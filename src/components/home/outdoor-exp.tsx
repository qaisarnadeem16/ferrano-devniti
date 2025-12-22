import React from "react";
import Image from "next/image";
import Container from "../shared/common/container";
import SectionHeading from "../shared/common/section-heading";
import Button from "../shared/common/button";
import Link from "next/link";
import { luxuryModelsData } from "@/data";

const OutdoorExp = () => {
  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <div className="relative   ">
        {/* Background Image */}
        <Image
          src="/images/italian.jpg"
          alt="Italian outdoor experience"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        {/* elipse circles */}
        <div className="absolute -left-20 -top-64  h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" />


        {/* Text Content */}
        <div className="relative z-10 w-full">
          <Container parentStyle="py-20" className="">
            <SectionHeading
              normalText="Choose Your Outdoor Experience"
              wrapperClassName="text-center mb-20"
              normalClassName="font-bold! text-white"
            />

            {/* cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {luxuryModelsData.map((item, index) => (
                <div key={index} className="bg-primary">
                  <div className="h-81.25">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={325}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="px-8.25 py-6.25 space-y-4 font-outfit">
                    <h3 className="text-2xl lg:text-[26px] font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-lg">
                      {item.line1}
                      <br />
                      {item.line2}
                    </p>

                    <Link href={item.path}>
                      <Button className="bg-smook! w-57.5!">{item.btn}</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default OutdoorExp;
