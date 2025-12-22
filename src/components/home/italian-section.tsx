import React from 'react'
import Button from "@/components/shared/common/button";
import Container from "@/components/shared/common/container";
import SectionHeading from "@/components/shared/common/section-heading";
import Link from "next/link";

const ItalianSection = () => {
  return (
    <Container
        className="py-32  font-outfit"
        parentStyle="relative  overflow-hidden"
      >

        {/* elipse circles  */}
        <div className="absolute -right-8 -top-12 -z-10 h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" />
        {/* <div className="absolute -left-6 -bottom-12 z-10 h-1/2 w-1/3 rounded-full blur-3xl opacity-30 bg-primary" /> */}

        <div className="flex flex-col  md:flex-row items-center gap-8 lg:gap-14">
          {/* text box  */}
          <div className="bg-primary md:w-[50%] px-6 lg:px-10 h-fit py-8 lg:py-16 space-y-4 lg:space-y-7 xl:space-y-8 ">
            {/* Title  */}
            <SectionHeading
              normalText="Italian elegance"
              highlightedText="crafted for life."
            />
            
            <p className="  pr-7  text-base md:text-lg">
              Our team combines passion, expertise, and commitment. And not just
              at our own grills, but also in all professional matters. Being
              real grill enthusiasts in private helps us to understand your
              personal needs precisely. We see it as our duty not only to meet
              your expectations but to exceed them.
            </p>
            <Link href={"#"} className=" ">
              <Button className="bg-smook">start your project</Button>
            </Link>
          </div>

          {/* image part  */}
          <div
            className="relative h-147 w-full md:w-[50%] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(/images/italian.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </Container>
  )
}

export default ItalianSection
