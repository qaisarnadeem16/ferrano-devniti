import React from "react";
import Container from "../shared/common/container";
import Image from "next/image";
import SectionHeading from "../shared/common/section-heading";
import { buyingProcess } from "@/data";

const BuyingProcess = () => {
  return (
    <Container className="pt-28">
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className="order-2 lg:order-1 relative h-146.5 lg:h-full">
          <Image
            src="/images/showbig.png"
            alt="Italian outdoor experience"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="order-1 lg:order-2 h-full bg-primary font-outfit py-9.5 px-6 md:px-12.5">
          <SectionHeading
            highlightedText="Buying process"
            wrapperClassName="my-[19px]"
          />

          <div className="flex flex-col gap-4 md:gap-8.5 mt-10">
            {buyingProcess.map((item, index) => (
              <div key={index} className="flex  gap-6 sm:gap-8.5">
                <div className="text-3xl md:text-5xl font-bold opacity-90">{item.step}</div>

                <div>
                  <h2 className="text-xl font-bold uppercase my-2">
                    {item.title}
                  </h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyingProcess;
