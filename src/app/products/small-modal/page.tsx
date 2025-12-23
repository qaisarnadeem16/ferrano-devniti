import WhyUs from "@/components/home/why-us";
import Bring from "@/components/shared/bring";
import { LuxuryHero } from "@/components/shared/hero-section";
import Design from "@/components/small-modal/design";
import GalleryCards from "@/components/small-modal/gallery";
import React from "react";

const page = () => {
  return (
    <div>
      <LuxuryHero
        backgroundImage="/images/show1.jpg"
        title="mini pod"
        highlightedText="Minimal Elegance"
        description={
          <>
            The Mini Pod is a refined outdoor kitchen designed for compact
            spaces without compromising on quality or style.
            <br />
            Perfect for balconies, patios, and small gardens, it offers
            everything you need for effortless outdoor cooking in a beautifully
            minimal form.
          </>
        }
        buttons={[
          {
            label: `Starting from £9,999`,
            href: "/contacts",
          },
          {
            label: `Configure  Mini  Pod`,
            href: "/contacts",
          },
        ]}
      />


        <Design/>


        <GalleryCards/>

        <WhyUs/>

        <Bring 
       image="/images/hero-home.jpg"
        title="Bring Luxury Outdoors"
        text="Design a space where style, performance, and lifestyle come together. "
        text1="Your Ferrano outdoor kitchen is crafted to last — and designed to inspire."
        button="Start Your project"
        buttonLink="/contacts" 
        />

    </div>
  );
};

export default page;
