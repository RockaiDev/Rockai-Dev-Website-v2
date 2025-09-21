"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import company1 from "@/Assets/Images/companies/c1.png";
import company2 from "@/Assets/Images/companies/c2.png";
import company3 from "@/Assets/Images/companies/c3.png";
import company4 from "@/Assets/Images/companies/c4.png";
import company5 from "@/Assets/Images/companies/c5.png";
import company6 from "@/Assets/Images/companies/c6.png";
import company7 from "@/Assets/Images/companies/c7.png";
import Link from "next/link";

const LogosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1 ,
        },
      },
    ],
  };

  const logos = [
    { image: company1, website: "#" },
    { image: company2, website: "#" },
    { image: company3, website: "https://www.prodealeg.com" },
    { image: company4, website: "https://www.jamesmap.com" },
    { image: company5, website: "https://www.waterfronteg.com" },
    { image: company6, website: "https://www.whstoneinv.com" },
    { image: company7, website: "https://hope-design-marketing-website.vercel.app" },
  ];

  return (
    <div className="w-full overflow-hidden pt-6 pb-16 ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Link
            key={index}
            className="flex justify-center items-center px-2 lg:px-2 h-[180px] "
            href={logo.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxShadow: "0 8px 32px 0 rgba(0, 198, 255, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              borderRadius: "1.5rem",
              backdropFilter: "blur(2px)"
            }}
          >
            {/* كونتينر ثابت الحجم + Responsive */}
            <div className=" w-[100px] lg:mt-10 h-[100px] md:w-[100px] md:h-[100px] sm:w-[100px] sm:h-[100px] flex justify-center items-center border border-cyan-500/50 rounded-xl shadow-xl shadow-cyan-500/20 backdrop-blur-sm bg-cyan-500/10">
              <Image
                src={logo.image}
                alt={`logo-${index}`}
                width={200}
                height={200}
                className="object-contain w-[70px] sm:w-[70px] sm:h-[70px] h-[70px]"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default LogosCarousel;