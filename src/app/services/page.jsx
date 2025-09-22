
// SEO Metadata for Services Page
export const metadata = {
  title: "AI Development Services - Custom Software Solutions | RockAI Dev",
  description: "Comprehensive AI development services including custom software, web development, mobile apps, automation, and technical training. Transform your business with our expert team.",
  keywords: "AI development services, custom software development, web development, mobile app development, automation services, technical training, software consulting, Egypt",
  authors: [{ name: "RockAI Dev Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "AI Development Services - RockAI Dev",
    description: "Comprehensive AI development services including custom software, web development, mobile apps, automation, and technical training.",
    images: [
      {
        url: "/Assets/Images/spaceShip.svg",
        width: 1200,
        height: 630,
        alt: "AI Development Services - RockAI Dev",
      },
    ],
    url: "https://www.rockaidev.com/services",
    siteName: "RockAI Dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Services - RockAI Dev",
    description: "Comprehensive AI development services including custom software, web development, mobile apps, automation, and technical training.",
    images: ["/Assets/Images/spaceShip.svg"],
    site: "@rockaidev",
    creator: "@rockaidev",
  },
  alternates: {
    canonical: "https://www.rockaidev.com/services",
  },
};

// "use client"
import tool from "@/Assets/Icons/tool.svg"
import spaceShip from "@/Assets/Images/spaceShip.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import Image from "next/image"
import settings from "@/Assets/Icons/settings.svg"

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


