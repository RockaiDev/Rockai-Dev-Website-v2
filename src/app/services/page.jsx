import tool from "@/Assets/Icons/tool.svg"
import spaceShip from "@/Assets/Images/spaceShip.svg"
import HeroSection from "@/components/PagesHero/PagesHero";

export default function ServicesPage() {
  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
         <HeroSection 
         buttonText="Our services"
           buttonIcon ={tool}
           title="Your Innovation, Our Mission"
           description="From AI-powered applications to enterprise software, we deliver cutting-edge solutions that drive business growth and digital transformation across industries."
           imageSrc  ={spaceShip}
           imageAlt="Hero Image"
           imageAnimationClass="animate-[rocking_10s_ease-in-out_infinite]"
           containerClass="overflow-hidden "
           imageStyle="scale-115"
           buttonClass="w-fit "
           titleClass=""
           descClass="" />
       </main>
  );
}


