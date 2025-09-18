"use client"
import pos from "@/Assets/Images/pos.svg"
import HeroSection from "@/components/PagesHero/PagesHero";
import sendplane from "@/Assets/Icons/send-plane.svg";
import Image from "next/image";
import phone from "@/Assets/Icons/phone.svg";
import key from "@/Assets/Icons/key.svg";
import shopping from "@/Assets/Icons/shopping.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import React from 'react'
import tech from '@/Assets/Icons/shoppingCart.svg'
import learn from "@/Assets/Icons/cube.svg"
import reseller from "@/Assets/Icons/world.svg"
import target from "@/Assets/Icons/person.svg"
import charts from "@/Assets/Icons/charts.svg"
import greenScr from "@/Assets/Icons/greenScr.svg"
import cellphone from "@/Assets/Icons/cellphone.svg"
import emergencyTr from "@/Assets/Icons/emergencyTr.svg"
import directionss from "@/Assets/Icons/directionss.svg"
import greenCube from "@/Assets/Icons/greenCube.svg"
import analytics from "@/Assets/Icons/analytics.svg"
import upward from "@/Assets/Icons/upward.svg"
import docs from "@/Assets/Icons/docs.svg"
import energy from "@/Assets/Icons/energy.svg"
import credit from "@/Assets/Icons/credit.svg"
import flowerUser from "@/Assets/Icons/flowerUser.svg"
import monitorFill from "@/Assets/Icons/monitorFill.svg"
import crm1 from "@/Assets/Images/crm1.png";
import AnimatedTitles from "./propaiComponents/AnimatedTitles";
import SecureCards from "./SecureCards/SecureCards";
import ComperhensiveCards from "./ComperhensiveCards/ComperhensiveCards";
import OrbitCards from "./OrbitCards/OrbitCards";
import Iframe from "./Iframe/Iframe";
import TestimonialCard from "./Testmonials/TestimonialCard";


export default function page() {
  return (
  <main className="min-h-[60vh]  mx-auto  py-12 text-white">
     <div className="relative z-10  mx-4 sm:mx-6 lg:mx-16">
      <HeroSection
        buttonText="Enterprise Real Estate CRM"
        buttonIcon={charts}
        title="Propai CRM"
        description="Advanced CRM solution designed specifically for real estate teams with role-based security, inventory-focused workflows, and real-time analytics that drive results."
        imageSrc={crm1}
        imageAlt="Hero Image"
        imageAnimationClass=""
        containerClass=" "
        imageStyle="scale-100"
        buttonClass="w-fit "
        requestBtn="Request Access"
        requestBtnIcon={key}
        talkToSalesBtn="Talk To Sales"
        talkToSalesBtnIcon={phone}
        btnMsg1="Hello, I would like to request access."
        btnMsg2="Contact Sales"
      />
      </div> 



      <AnimatedTitles/>



      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
          <h2 className="mt-4 lg:text-[62px] sm:text-[42px] text-[28px] font-bold gradient-hero-text">
       Secure Access Control
          </h2>
          <p className="mt-2 lg:text-xl sm:text-md text-md text-gray-400/80 max-w-4xl lg:mb-12 mb-4 mx-auto">
           Propai's role-based system ensures every team member has exactly the right level of access and visibility
          </p>
      </div>

      <SecureCards/>

  <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
          <h2 className="mt-4 lg:text-[62px] sm:text-[42px] text-[26px] font-bold gradient-hero-text ">
       Comprehensive Feature Set
          </h2>
          <p className="mt-2 lg:text-xl sm:text-md text-md text-gray-400/80 max-w-4xl lg:mb-12 mb-4 mx-auto">
          Every feature designed specifically for real estate teams and optimized for maximum efficiency
          </p>
      </div>
<ComperhensiveCards/>




<div className=" flex-col flex  ">
  <Iframe/>

<OrbitCards/>
</div>

<TestimonialCard/>

  <div className="border border-gray-400/20 rounded-xl  mx-7">
        <div className="secHeader mb-1 lg:mx-auto lg:mx-10 text-center pt-10 px-6">
          <h2 className="mt-4 lg:text-[62px] sm:text-[42px] text-[26px] font-bold gradient-hero-text">
         Ready to Transform Your Sales Operations?
          </h2>
          <p className="mt-2 lg:text-xl sm:text-md text-md text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
           Join thousands of businesses that have streamlined their operations with our intelligent POS system
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 ">


           <button
  onClick={() =>
    window.open(
      `https://wa.me/201555867970?text=${encodeURIComponent(
        "Hello, I would like to request access."
      )}`,
      "_blank"
    )
  }
  className={`flex cursor-pointer items-center gap-2 px-4 py-4 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-600`}
>
  <Image src={key} alt="icon" width={16} height={16} />
  Request Access
</button>

<button
  onClick={() =>
    window.open(
      `https://wa.me/201555867970?text=${encodeURIComponent(
        "Hi, I would like to talk to the sales team."
      )}`,
      "_blank"
    )
  }
  className={`flex items-center gap-2 px-4 py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 lg:text-sm text-sm`}
>
  <Image src={phone} alt="icon" width={16} height={16} />
  Talk to Sales
</button>
          </div>
        </div>

      </div>

















      </main>
  )
}   
