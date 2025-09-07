import Image from "next/image";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground"
import Hero from "./Home/HERO/Hero";
import OurExpertise from "./Home/OurExpertise/OurExpertise";
import VRAssistant from "./Home/VRAssistant/VRAssistant";
import Tellus from "./Home/TellUs/TellUs";
import OurPortfolio from "./Home/OurPortfolio/OurPortfolio";
import Powered from "./Home/Powered/Powered";
import Newsletter from "./Home/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <OurExpertise/>
      <VRAssistant/>
      <Tellus/>
      <OurPortfolio/>
      <Powered/>
      {/* <Newsletter/> */}
    </>
  );
}
