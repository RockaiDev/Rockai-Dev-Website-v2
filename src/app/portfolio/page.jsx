import earth from "@/Assets/Images/earth.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import folder from "@/Assets/Icons/folder.svg"


export default function PortfolioPage() {
  return (
   <main className="min-h-[60vh] container mx-auto  py-12 text-white">
          <HeroSection 
          buttonText="Our portfolio"
            buttonIcon ={folder}
            title="Our Success Stories"
            description="Explore our portfolio of innovative solutions and fictional use cases that demonstrate our expertise across industries and technologies."
            imageSrc  ={earth}
            imageAlt="Hero Image"
            imageAnimationClass="animate-[spin_180s_linear_infinite]"
            containerClass="overflow-hidden "
            imageStyle="scale-115"
            buttonClass="w-fit "
            titleClass=""
            descClass="" />
        </main>
  );
}


