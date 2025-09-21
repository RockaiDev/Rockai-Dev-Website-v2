import Image from "next/image";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground"
import Hero from "./Home/HERO/Hero";
import OurExpertise from "./Home/OurExpertise/OurExpertise";
import VRAssistant from "./Home/VRAssistant/VRAssistant";
import Tellus from "./Home/TellUs/TellUs";
import OurPortfolio from "./Home/OurPortfolio/OurPortfolio";
import Powered from "./Home/Powered/Powered";

// SEO Metadata for Homepage
export const metadata = {
  title: "RockAI Dev - AI-Powered Software Solutions & Custom Development",
  description: "Leading AI-powered software development company specializing in custom solutions, PropAI CRM, HodourAI, and SUFRA POS. Transform your business with cutting-edge technology.",
  keywords: "AI solutions, software development, artificial intelligence, custom software, web development, mobile apps, PropAI CRM, HodourAI, SUFRA POS, chatbot development, Egypt tech company",
  authors: [{ name: "RockAI Dev Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "RockAI Dev - AI-Powered Software Solutions",
    description: "Leading AI-powered software development company specializing in custom solutions, PropAI CRM, HodourAI, and SUFRA POS. Transform your business with cutting-edge technology.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "RockAI Dev - AI Software Solutions",
      },
    ],
    url: "https://www.rockaidev.com",
    siteName: "RockAI Dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RockAI Dev - AI-Powered Software Solutions",
    description: "Leading AI-powered software development company specializing in custom solutions, PropAI CRM, HodourAI, and SUFRA POS.",
    images: ["/Logo.png"],
    site: "@rockaidev",
    creator: "@rockaidev",
  },
  alternates: {
    canonical: "https://www.rockaidev.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <OurExpertise/>
      <VRAssistant/>
      <Tellus/>
      <OurPortfolio/>
      <Powered/>
    </>
  );
}
