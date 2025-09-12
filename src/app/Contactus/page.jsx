import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import { ArrowRight, Calendar } from "lucide-react";

import roFill from "@/Assets/Icons/link.svg";
import screen from "@/Assets/Icons/screen.svg";
import container from "@/Assets/Icons/container.svg";
import Rocket from "@/Assets/Icons/Rocket.svg";
import calender from "@/Assets/Icons/calender.svg";

import Image from "next/image";
import Link from "next/link";import ContactUsForm from "./ContactUsForm/ContactUsForm";
export default function Contactus() {
  const expertiseData = [
    {
      icon: calender,
      title: "Project Consultation",
      description: "Schedule a free consultation to discuss your project requirements",
    },
    {
      icon: screen,
      title: "Technical Demo",
      description: "See our solutions in action with a personalized demo",
    },
    {
      icon: roFill,
      title: "Partnership Inquiry",
      description: "Explore strategic partnership opportunities with Rockai",
    },
  
  ];
  return (
 <>
  <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={Rocket} alt="directions icon " width={20} height={20} />
Contact Mission Control      
  </button>

        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
    Launch Your Project
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
        Ready to embark on your digital transformation journey? Connect with our stellar team and let's build something extraordinary together in the vast universe of possibilities.
        </p>
      </div>



   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-0 sm:px-4 lg:px-24 mb-10">
        {expertiseData.map((item, index) => (
          <CardWithAnimatedBorder
            key={index}
            className="rounded-[35px] ourExpertise hover:border-cyan-500 hover: glow-bottom border border-white/10 bg-[#0f022996] p-6 w-full sm:max-w-full md:max-w-md lg:max-w-md md:h-[340px] lg:h-[350px]"
          >
            {/* Icon Container */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Background container */}
              <Image
                src={container}
                alt="container"
                fill
                className="object-contain "
              />

              {/* Icon inside container */}
              <Image
                src={item.icon}
                alt="icon"
                width={48}
                height={48}
                className="absolute inset-0 m-auto"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold gradient-hero-text ">{item.title}</h3>
              <p className="text-sm sm:text-md text-gray-400/80 min-h-0 sm:h-16 items-center pt-2 sm:pt-4 w-full sm:w-[250px] ">{item.description}</p>

              <Link
                href="#"
                className="flex items-center mt-6 gap-2 text-cyan-700 hover:text-cyan-300 transition text-[20px]"
              >
                Request Demo <ArrowRight size={16} />
              </Link>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>
 

 <ContactUsForm/>
 
 
 
 </>
  )
}
