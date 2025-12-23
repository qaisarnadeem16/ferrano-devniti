import Container from "@/components/shared/common/container";
import SectionHeading from "@/components/shared/common/section-heading";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { LuxuryHero } from "@/components/shared/hero-section";
import Bring from "@/components/shared/bring";

const page = () => {
  return (
    <>
      <LuxuryHero
        className="py-0! min-h-70!"
        backgroundImage="/images/show3.jpg"
        title="Ferrano "
        highlightedText="Support Center"
      />

      <Container className="flex flex-col lg:flex-row justify-between gap-4 font-outfit py-20 mt-10">
        <div className="max-w-99.25  ">
          <SectionHeading
            normalText="Frequently "
            normalClassName="font-bold!"
            highlightedText="asked question"
            underlineClassName="bg-primary!"
          />
          <p className="text-lg my-5">
            Our goal is to make your Ferrano experience as effortless and
            informed as possible.
          </p>
        </div>
        <div className="flex-1  ">
          {/* Accordion Section */}
          <div className="w-full  ">
            <Accordion
              type="single"
              collapsible
              className="  flex flex-col gap-10"
            >
              {faqs.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="bg-[#CA854463] py-5.75 px-8.25 rounded-2xl"
                >
                  <AccordionTrigger className="text-white uppercase font-medium  text-base  sm:text-[20px] py-0!  ">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="py-4 mt-4 text-white leading-relaxed border-t">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>

       <Bring
       image="/images/hero-home.jpg"
        title="Bring Luxury Outdoors"
        text="Design a space where style, performance, and lifestyle come together. "
        text1="Your Ferrano outdoor kitchen is crafted to last — and designed to inspire."
        button="Start Your project"
        buttonLink="/contacts" 
        />
    </>
  );
};

export default page;
