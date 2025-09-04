import HeroSection from "@/components/PagesHero/PagesHero";
import planet from "@/Assets/Icons/planet.svg"
import Asteroid from "@/Assets/Images/Asteroid.svg"
export default function OurStoryPage() {
  return (
    <main className="min-h-[60vh] container mx-auto px-4 py-12 text-white">
      <HeroSection 
      buttonText="Our Story"
        buttonIcon ={planet}
        title="From Vision to Revolution"
        description="The story of how a small team in Alexandria became Egypt's leading force in AI and software innovation, transforming businesses across the Middle East and beyond."
        imageSrc  ={Asteroid}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[spin_40s_linear_infinite] "
        containerClass="overflow-hidden"
        buttonClass="w-fit"
        titleClass=""
        descClass="" />
    </main>
  );
}


