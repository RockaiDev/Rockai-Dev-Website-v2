import HeroSection from "@/components/PagesHero/PagesHero";
import planet from "@/Assets/Icons/planet.svg";
import Asteroid from "@/Assets/Images/Asteroid.svg";
import Image from "next/image";
import route from "@/Assets/Icons/route.svg";
import directions from "@/Assets/Icons/directions.svg";
import Features from "./OurStoryCards/ourStoryCards";
import Animate from "@/components/AnimateOnScroll/Animate";

export default function OurStoryPage() {
  return (
    <main className="min-h-[60vh] container mx-auto px-4 py-12 text-white">
      <HeroSection
        buttonText="Our Story"
        buttonIcon={planet}
        title="From Vision to Revolution"
        description="The story of how a small team in Alexandria became Egypt's leading force in AI and software innovation, transforming businesses across the Middle East and beyond."
        imageSrc={Asteroid}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[spin_40s_linear_infinite]"
        containerClass="overflow-hidden"
        buttonClass="w-fit"
        titleClass=""
        descClass=""
      />

      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={route} alt="route icon " width={20} height={20} />
          Our Journey
        </button>

        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Our Journey Through Time
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
          Every milestone represents countless hours of innovation, dedication,
          and the relentless pursuit of excellence.
        </p>

        {/* Animate Section */}
        <div className="flex justify-center items-center w-full mt-10">
          <div className="w-full flex justify-center">
            <Animate />
          </div>
        </div>
      </div>

      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={directions} alt="directions icon " width={20} height={20} />
          What Drives Us
        </button>

        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Our Core Values
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
          These principles guide every decision we make and every solution we
          build.
        </p>
      </div>

      <div className="">
        <Features />
      </div>
    </main>
  );
}
