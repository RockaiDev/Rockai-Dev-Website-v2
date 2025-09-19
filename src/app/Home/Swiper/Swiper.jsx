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
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { image: apple, website: "https://www.apple.com" },
    { image: logo1, website: "https://www.example1.com" },
    { image: logo2, website: "https://www.example2.com" },
    { image: logo3, website: "https://www.example3.com" },
    { image: apple, website: "https://www.apple.com" },
    { image: logo1, website: "https://www.example1.com" },
    { image: logo2, website: "https://www.example2.com" },
    { image: logo3, website: "https://www.example3.com" },
    { image: apple, website: "https://www.apple.com" },
    { image: logo1, website: "https://www.example1.com" },
    { image: logo2, website: "https://www.example2.com" },
    { image: logo3, website: "https://www.example3.com" },
    { image: logo4, website: "https://www.example4.com" }
  ];

  return (
    <div className="w-full overflow-hidden pt-6 pb-16  ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Link
            key={index}
            className="flex justify-center items-center px-2 lg:px-2 h-[100px] "
            href={logo.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* كونتينر ثابت الحجم + Responsive */}
            <div className=" w-[100px] lg:mt-10 h-[100px] md:w-[180px] md:h-[180px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
              <Image
                src={logo.image}
                alt={`logo-${index}`}
                width={200}
                height={200}
                className="object-contain w-[100px] h-[100px]"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default LogosCarousel;