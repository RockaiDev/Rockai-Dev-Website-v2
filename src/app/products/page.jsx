import Satellite from "@/Assets/Images/Satellite.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import cart from "@/Assets/Icons/cart.svg"


export default function ProductsPage() {
  return (
 <main className="min-h-[60vh] container mx-auto  py-12 text-white">
          <HeroSection 
          buttonText="Our Products"
            buttonIcon ={cart}
            title="Innovative Software Products"
            description="Discover our suite of cutting-edge software products designed to transform industries and empower businesses with AI-driven solutions."
            imageSrc  ={Satellite}
            imageAlt="Hero Image"
            imageAnimationClass="animate-[rocking_30s_ease-in-out_infinite]"
            containerClass="overflow-hidden "
            imageStyle="scale-95"
            buttonClass="w-fit "
            titleClass=""
            descClass="" />
        </main>
  );
}


