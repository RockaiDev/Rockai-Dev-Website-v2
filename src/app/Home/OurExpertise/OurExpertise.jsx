import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import { ArrowRight } from "lucide-react";
import Rocket from "@/Assets/Icons/Rocket.svg";
import container from "@/Assets/Icons/container.png";
import roFill from "@/Assets/Icons/roFill.svg";

import Image from "next/image";
import Link from "next/link";

const expertiseData = [
  {
    icon: Rocket,
    title: "SaaS Development",
    description: "Scalable software-as-a-service solutions",
  },
  {
    icon: roFill,
    title: "AI & LLM Integration",
    description: "Advanced AI and language model implementations",
  },
  {
    icon: roFill,
    title: "Custom Software",
    description: "Tailored enterprise software solutions",
  },
  {
    icon: roFill,
    title: "Automation",
    description: "Streamline workflows with seamless connectivity",
  },
  {
    icon: roFill,
    title: "Testing",
    description: "Reliable quality assurance for robust platforms",
  },
  {
    icon: roFill,
    title: "Team Training",
    description: "Upskill your teams with expert-led programs",
  },
];

export default function OurExpertise() {
  return (
    <section className="py-16 px-6 mx-auto text-center">

      <div className="secHeader mb-10">
            <button
                         className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
                     >
                          <Image src={Rocket} alt="Rocket Icon" width={20} height={20} />
                         Our Expertise
                     </button>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold gradient-hero-text leading-tight md:leading-tight">
          Comprehensive Tech Solutions
        </h2>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-400/80 max-w-3xl mx-auto px-1 sm:px-2">
          From AI-powered applications to enterprise software, we deliver cutting-edge solutions that drive business growth and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-0 sm:px-4 lg:px-24">
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
                Explore Service <ArrowRight size={16} />
              </Link>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>
    </section>
  );
}
