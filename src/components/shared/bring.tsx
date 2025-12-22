"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/button";
import SectionHeading from "./common/section-heading";
import Container from "./common/container";

interface BringProps {
  image: string;
  title: string;
  text: string;
  text1 ?: string;
  button: string;
  buttonLink: string;
}

const Bring = ({ image, title, text, button, buttonLink,text1 }: BringProps) => {
  return (
     <Container>
         <div className="relative h-[310px] rounded-xl overflow-hidden p-5 md:p-[60px] font-outfit">
        {/* Background Image */}
        <div className="absolute inset-0 z-0  ">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 " />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
         <SectionHeading normalText={title} normalClassName="font-bold!"/>

          <p className="text-lg text-offwhite my-5 ">
            <span>{text}</span> <br/>
            <span>{text1}</span>

          </p>

          <Link href={buttonLink}>
            <Button className="  w-57.5!"> {button}</Button>
          </Link>
        </div>
      </div>
     </Container>
  );
};

export default Bring;
