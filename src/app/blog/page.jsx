
// SEO Metadata for Blog Page
export const metadata = {
  title: "Blog - AI Insights & Tech News | RockAI Dev",
  description: "Stay updated with the latest AI insights, tech news, and software development trends from RockAI Dev. Expert articles on AI, machine learning, and digital transformation.",
  keywords: "AI blog, tech news, software development insights, AI trends, machine learning articles, digital transformation, RockAI Dev blog, tech articles Egypt",
  authors: [{ name: "RockAI Dev Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Blog - AI Insights & Tech News | RockAI Dev",
    description: "Stay updated with the latest AI insights, tech news, and software development trends from RockAI Dev.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "RockAI Dev Blog - AI Insights and Tech News",
      },
    ],
    url: "https://www.rockaidev.com/blog",
    siteName: "RockAI Dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - AI Insights & Tech News | RockAI Dev",
    description: "Stay updated with the latest AI insights, tech news, and software development trends from RockAI Dev.",
    images: ["/Logo.png"],
    site: "@rockaidev",
    creator: "@rockaidev",
  },
  alternates: {
    canonical: "https://www.rockaidev.com/blog",
  },
};

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


