import Bring from "@/components/shared/bring";
import Container from "@/components/shared/common/container";
import { LuxuryHero } from "@/components/shared/hero-section";

const images = [
  "/images/show1.jpg",
  "/images/show2.jpg",
  "/images/show3.jpg",
  "/images/show1.jpg",
  "/images/show3.jpg",
  "/images/show2.jpg",
  "/images/show2.jpg",
  "/images/show3.jpg",
  "/images/show1.jpg",
];

// for Desktop  
const columnData = [
  { heights: [368, 542, 432], images: [0, 3, 6] },  
  { heights: [463, 395, 409], images: [4, 1, 7] },  
  { heights: [368, 542, 432], images: [2, 5, 8] },  
];

// for Mobile  
const mobileCards = [
  { imgIndex: 0, desktopHeight: 368 },
  { imgIndex: 4, desktopHeight: 463 },
  { imgIndex: 2, desktopHeight: 368 },
  { imgIndex: 3, desktopHeight: 542 },
  { imgIndex: 1, desktopHeight: 395 },
  { imgIndex: 5, desktopHeight: 542 },
  { imgIndex: 6, desktopHeight: 432 },
  { imgIndex: 7, desktopHeight: 409 },
  { imgIndex: 8, desktopHeight: 432 },
];

const page = () => {
  return (
    <div>
      <LuxuryHero
        className="py-0! min-h-100!"
        backgroundImage="/images/show3.jpg"
        title="Crafted Outdoor"
        highlightedText="Living Spaces"
        description={
          <>
            Explore real installations of Ferrano outdoor kitchens, designed to
            elevate outdoor living through elegance, durability, and
            performance.
            <br />
            Each project reflects thoughtful design, premium materials, and a
            seamless connection between lifestyle and architecture.
          </>
        }
      />

{/* galleryCards */}
      <Container className="py-28">
        {/*  Desktop  */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {columnData.map((column, i) => (
            <div key={i} className="flex flex-col gap-6">
              {column.images.map((imgIdx, j) => (
                <div
                  key={j}
                  className="overflow-hidden  "
                  style={{ height: `${column.heights[j]}px` }}
                >
                  <img
                    src={images[imgIdx]}
                    alt=""
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/*   Mobile & Tablet  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:hidden max-w-7xl mx-auto">
          {mobileCards.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden  "
              style={{ height: "320px" }}
            >
              <img
                src={images[card.imgIndex]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
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
    </div>
  );
};

export default page;
