
import book from "@/Assets/Icons/magic.svg";
import shuttle from "@/Assets/Images/shuttle.svg";
import HeroSection from "@/components/PagesHero/PagesHero";





export default function BlogPage() {
  return (
<main className="min-h-[60vh] container mx-auto  py-12 text-white">
          <HeroSection 
          buttonText="Blog & Insights"
            buttonIcon ={book}
            title="Tech Insights & Innovation"
            description="Stay ahead of the curve with our latest insights on AI, software development, and the future of technology in the Middle East."
            imageSrc  ={shuttle}
            imageAlt="Hero Image"
            imageAnimationClass="animate-[blog_30s_ease-in-out_infinite]"
            containerClass="overflow-hidden "
            imageStyle="scale-100"
            buttonClass="w-fit "
            titleClass=""
            descClass="" />
        </main>
  );
}


