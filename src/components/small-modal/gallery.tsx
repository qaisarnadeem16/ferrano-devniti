import React from 'react'
import SectionHeading from '../shared/common/section-heading'
import Image from 'next/image';
import Container from '../shared/common/container';
import Button from '../shared/common/button';
import Link from 'next/link';

const GalleryCards = () => {


     const images = [
    { src: "/images/show1.jpg", type: "fixed" }, // 1
    { src: "/images/show2.jpg", type: "flex" }, // 2
    { src: "/images/show3.jpg", type: "flex" }, // 3
    { src: "/images/show2.jpg", type: "fixed" }, // 4
  ];

  // split into rows
  const rows = [images.slice(0, 2), images.slice(2, 4)];


  return (
      <Container className="relative flex flex-col lg:flex-row lg:h-168.5 gap-7">
          {/* show case gallery  */}
        
       
        <div className="space-y-12  lg:w-[55%]">
          {/* Title */}
          <SectionHeading
            normalText="A Showcase of Outdoor Luxury"
            normalClassName="text-4xl! lg:text-[50px]! font-bold! normal-case my-7 pt-3"
          />

          {/* 2x2 Small Images */}
          <div className="flex flex-col gap-7 ">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-7">
                {row.map((img, index) => (
                  <div
                    key={index}
                    className={`h-55 overflow-hidden ${
                      img.type === "fixed" ? "w-full sm:w-57" : "flex-1"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt="Outdoor luxury"
                      width={500}
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Large Hero Image */}
        <div className=" flex flex-col justify-between lg:w-[45%]">
          <Image
            src="/images/showbig.png"
            alt="Luxury outdoor grill station at night with lighting"
            width={1000}
            height={100}
            className="w-full  h-[85%] object-cover"
          />
          <Link href="/#gallery">
          <Button className='w-full my-2 text-[20px]! h-16.5!'>view gallery</Button>
          </Link>
        </div>
      </Container>
  )
}

export default GalleryCards
