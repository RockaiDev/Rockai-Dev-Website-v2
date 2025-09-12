"use client"
import book from "@/Assets/Icons/book.svg";
import shuttle from "@/Assets/Images/Astronaut.svg";
import HeroSection from "@/components/PagesHero/PagesHero";
import Image from "next/image";
import handandheart from "@/Assets/Icons/handandheart.svg";
import { useState } from "react";
import Careers from "./Carrers/Careers";
import Partnerships from "./Partnerships/Partnerships";




export default function JoinUsPage() {
  const [isCareers, setIsCareers] = useState("careers")
  const [isActive, setIsActive] = useState(true)
  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Blog & Insights"
        buttonIcon={book}
        title="Tech Insights & Innovation"
        description="Stay ahead of the curve with our latest insights on AI, software development, and the future of technology in the Middle East."
        imageSrc={shuttle}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[astro_5s_ease-in-out_infinite]"
        containerClass="overflow-hidden "
        imageStyle="scale-100"
        buttonClass="w-fit "
        titleClass=""
        descClass="" />

      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={handandheart} alt="handandheart icon " width={20} height={20} />
          Career & Partnership
        </button>

        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Join the Rockai Revolution
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
          Whether as a talented professional or visionary partner, help us push boundaries and create the next wave of AI innovation.
        </p>
      </div>


<div className="flex justify-center gap-2 mt-10 ">
  <button onClick={() => {
    setIsCareers("careers");
    setIsActive(true);
  }} className={`${isActive&&isCareers ?"bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white":"card-gradient text-gray-400 font-semibold"}     w-[200px] py-2 rounded-[5px]  `}>
    Careers
  </button>




  <button className={`${isActive&&!isCareers ?"bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white":"card-gradient text-gray-400 font-semibold"}     w-[200px] py-2 rounded-[5px]  `}
   onClick={() => {
    setIsCareers(false);
    setIsActive(true);
  }} >
Partnerships  </button>
</div>



{isCareers? <Careers/> : <Partnerships/>}










    </main>











  );
}


