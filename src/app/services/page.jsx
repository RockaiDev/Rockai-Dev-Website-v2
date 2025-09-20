
"use client"
import tool from "@/Assets/Icons/tool.svg"
import spaceShip from "@/Assets/Images/spaceShip.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import Image from "next/image"
import bulbFill from "@/Assets/Icons/bulb_fill.svg"
import settings from "@/Assets/Icons/settings.svg"
import storyRocket from "@/Assets/Icons/storyRocket.svg"
import brain from "@/Assets/Icons/brain.svg"
import mindMap from "@/Assets/Icons/mindMap.svg"
import certificate from "@/Assets/Icons/certificate.svg"
import chart from "@/Assets/Icons/chart.svg"
import graduate from "@/Assets/Icons/graduate.svg"
import ServiceCards from "./ServiceCards/ServiceCards";






export default function ServicesPage() {
  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Our services"
        buttonIcon={tool}
        title="Your Innovation, Our Mission"
        description="From AI-powered applications to enterprise software, we deliver cutting-edge solutions that drive business growth and digital transformation across industries."
        imageSrc={spaceShip}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[rocking_10s_ease-in-out_infinite]"
        containerClass="overflow-hidden "
        imageStyle="scale-115"
        buttonClass="w-fit "
        titleClass=""
        descClass="" />

      <div className="secHeader mb-1  mx-auto text-center lg:pt-10 px-6">
        <button
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
        >
          <Image src={settings} alt="bulbFill icon " width={20} height={20} />
          What We Offer
        </button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">Future-Ready Services</h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
    Explore tailored AI, software, and digital services—from vision to launch, we build what moves you forward.
        </p>



     

<ServiceCards/>


      </div>
    </main>
  );
}


