import Satellite from "@/Assets/Images/Satellite.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import cart from "@/Assets/Icons/cart.svg"

import arrowRightFill from "@/Assets/Icons/arrowRightFill.svg"




// Features.jsx

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import storyRocket from "@/Assets/Icons/storyRocket.svg"
import storymagic from "@/Assets/Icons/storymagic.svg"
import storyUser from "@/Assets/Icons/storyUser.svg"
import storyAward from "@/Assets/Icons/storyAward.svg"
import crystal from "@/Assets/Icons/crystal.svg"
import bulb_fill from "@/Assets/Icons/bulb_fill.svg"
import msgFill from "@/Assets/Icons/msgFill.svg"
import Image from "next/image";
import ProductsCardAndFilter from "./ProductsCardAndFilter/ProductsCardAndFilter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";




const features = [
  {
    icon: <Image src={storyRocket} alt="Innovation First" width={48} height={48} />,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with cutting-edge technology"
  },
  {
    icon: <Image src={storymagic} alt="Egyptian Excellence" width={48} height={48} />,
    title: "Egyptian Excellence",
    description: "Proudly representing Egypt's tech capabilities on the global stage"
  },
  {
    icon: <Image src={storyUser} alt="Client Success" width={48} height={48} />,
    title: "Client Success",
    description: "Your success is our success - we're partners in your digital transformation"
  },
  {
    icon: <Image src={storyAward} alt="Quality Obsessed" width={48} height={48} />,
    title: "Quality Obsessed",
    description: "Every line of code, every design decision reflects our commitment to excellence"
  },

];

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-10xl mx-auto py-12 ">
      {features.map((item, index) => (
        <CardWithAnimatedBorder
          key={index}
          className="pb-6 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">{item.title}</h3>
          <p className="text-base text-gray-400/80 mt-3">{item.description}</p>
        </CardWithAnimatedBorder>
      ))}
    </div>

  );
}


export default function ProductsPage() {
  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Our Products"
        buttonIcon={cart}
        title="Innovative Software Products"
        description="Discover our suite of cutting-edge software products designed to transform industries and empower businesses with AI-driven solutions."
        imageSrc={Satellite}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[rocking_30s_ease-in-out_infinite]"
        containerClass="overflow-hidden "
        imageStyle="scale-95"
        buttonClass="w-fit "
        titleClass=""
        descClass="" />

      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={bulb_fill} alt="bulb_fill icon " width={20} height={20} />
          Our Competitive Edge
        </button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Why Choose Rockai Products?
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
          We outperform traditional solutions across every metric that matters
        </p>
      </div>




      <Features />




      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={crystal} alt="crystal icon " width={20} height={20} />
          Visionary Solutions        </button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Empowering the Future Today        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-3xl mx-auto">
          Explore groundbreaking products crafted to transform industries, fuel innovation, and unlock new opportunities with cutting-edge technology.        </p>
      </div>

      <ProductsCardAndFilter />




      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">


        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-3xl mx-auto">
          Join thousands of companies already using our products to drive unprecedented growth and efficiency.
        </p>
      </div>



      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 pt-4 lg:w-full ">
        <Link href={`https://wa.me/201555867970?text=${encodeURIComponent("Hi, I'm interested in learning more about Rockai Dev's products.")}`} target="_blank" className="px-8 lg:py-4  py-3 flex rounded-full justify-center  bg-sky-500 text-white text-md items-center  hover:bg-sky-600 transition cursor-pointer">
          <Image src={msgFill} alt="arrow" className="w-5 h-5 me-2" />
          Start Your Journey
        </Link>
        <Link href="/services">
          <HoverBorderGradient>
            <div className="flex gap-3 py-2 lg:px-6 lg:w-[250px] justify-center items-center cursor-pointer">
              <Image src={arrowRightFill} alt="eye" width={20} height={20} />
              <span className="text-cyan-600">Explore Services</span>
            </div>
          </HoverBorderGradient>
        </Link>
      </div>
    </main>
  );
}


