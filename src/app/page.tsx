import BuyingProcess from "@/components/home/buying-process";
import ItalianSection from "@/components/home/italian-section";
import OutdoorExp from "@/components/home/outdoor-exp";
import Specifications from "@/components/home/specs";
import Stories from "@/components/home/stories";
import WhyUs from "@/components/home/why-us";
import Bring from "@/components/shared/bring";
import { Footer } from "@/components/shared/footer";
import { LuxuryHero } from "@/components/shared/hero-section";

const page = () => {
  return (
    <>
      <LuxuryHero
        backgroundImage="/images/hero-home.jpg"
        title="LUXURIÖSE"
        highlightedText="GRILLS."
        description="Dive into our world of luxury outdoor kitchens and grills. Choose from our exquisite selection or get advice from our team of experts. AT FERRANO, your personal wishes always have the highest priority."
        buttons={[
          {
            label: `Schedule ${"\u00A0"} a ${"\u00A0"} Consultation`,
            href: "/contacts",
          },
        ]}
      />
       <ItalianSection/>

       <OutdoorExp/>

       <Specifications/>

       <WhyUs/>

       <Stories/>

       <BuyingProcess/>

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
