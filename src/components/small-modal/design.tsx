import React from "react";
import SectionHeading from "../shared/common/section-heading";
import Container from "../shared/common/container";
import { designData, productInfoData } from "@/data";
import Card from "../shared/common/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Design = () => {
  return (
    <div className="relative">
      {/* elipse  */}
      <div className="absolute -left-28 top-54 z-10 h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" />

{/* main conatiner  */}
      <Container className="py-16 space-y-8 flex flex-col gap-17.25">
        <div className="text-center space-y-4">
          <SectionHeading
            normalText="Designed for Simplicity"
            normalClassName="font-bold!"
          />
          <p className="max-w-237.5 mx-auto text-sm md:text-lg">
            The Mini Pod is crafted for those who value clean design and
            practical outdoor living.
            <br className="hidden md:flex" /> Perfect for patios, terraces, and
            smaller gardens, it offers premium performance without excess — just
            what you <br className="hidden md:flex" /> need, nothing more.
          </p>
        </div>

        {/* Left Highlight Card */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="bg-primary flex items-center justify-center ">
              <h3 className="font-bold text-[32px] flex items-center justify-center py-9 max-h-74.5 text-center uppercase">
                Crafted for <br /> Lasting
                <br /> Quality
              </h3>
            </div>
            {designData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className={"bg-[#CA85441F]! "}
              />
            ))}
          </div>
        </div>

        {/* design bottom section  */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_460px] gap-4  ">
          {/* Image Section */}
          <div className="relative w-full h-75 sm:h-100 lg:h-134.5">
            <Image
              src="/images/map.png"
              alt="Italian outdoor experience"
              height={2000}
              width={1000}
              className="object-fill h-full w-full"
            />
          </div>

          {/* Accordion Section */}
          <div className="w-full bg-primary p-5 lg:h-134.5">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              {productInfoData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-white uppercase text-[20px] border-b border-[#D9D9D9] py-4">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="py-4 text-white leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Design;
