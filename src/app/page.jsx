import Image from "next/image";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground"
import Hero from "./Home/HERO/Hero";
import OurExpertise from "./Home/OurExpertise/OurExpertise";
import VRAssistant from "./Home/VRAssistant/VRAssistant";

export default function Home() {
  return (
    <>
      <Hero />
      <OurExpertise/>
      <VRAssistant/>
    </>
  );
}
