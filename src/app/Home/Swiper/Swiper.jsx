"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import apple from "@/Assets/Icons/apple.svg";
import logo1 from "@/Assets/Icons/logo1.svg";
import logo2 from "@/Assets/Icons/logo2.svg";
import logo3 from "@/Assets/Icons/logo3.svg";
import logo4 from "@/Assets/Icons/logo4.svg";


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
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [apple, logo1, logo2, logo3, logo4];

  return (
    <div className="w-full overflow-hidden pt-6 pb-16  ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center  lg:px-4 h-[70px] "
          >
            {/* كونتينر ثابت الحجم + Responsive */}
            <div className=" w-[100px] lg:mt-10 h-[80px] md:w-[180px] md:h-[180px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={120}
                height={80}
                className="object-contain w-[50px] h-[50px] "
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogosCarousel;