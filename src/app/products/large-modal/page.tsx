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
        backgroundImage="/images/lg.png"
        title="Standard pod"
        highlightedText="Outdoor Prestige"
        description={
          <>
            The Standard Pod enhances outdoor living with expanded features, refined finishes, and a more immersive cooking experience.
            <br />
             Ideal for families and social gatherings, it balances luxury and functionality with timeless design.
          </>
        }
        buttons={[
          {
            label: `Statring from £15,999`,
            href: "#",
          },
          {
            label: `Configure  standard  Pod`,
            href: "#",
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
