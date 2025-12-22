import React from "react";
import SectionHeading from "../shared/common/section-heading";
import Container from "../shared/common/container";
import Card from "../shared/common/card";
import { featuresData } from "@/data";

const WhyUs = () => {
  return (
    <Container parentStyle="py-20" className="">
      <SectionHeading
        normalText="Why choose us"
        wrapperClassName="text-center mb-20"
        normalClassName="font-bold! text-white"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default WhyUs;
