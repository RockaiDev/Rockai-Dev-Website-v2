"use client"
import pos from "@/Assets/Images/pos.png"
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
import Iframe from "./Iframe/Iframe";
import BuildFeatures from "./buildWith/BuildWith";








const features = [
  
  {
    icon: <Image src={energy} alt="Innovation First" width={48} height={48} />,
    title: "Data Encryption",
    description: "End-to-end encryption for all transactions"
  },
  {
    icon: <Image src={credit} alt="Egyptian Excellence" width={48} height={48} />,
    title: "PCI Compliance",
    description: "Fully compliant with payment industry standards"
  },
  {
    icon: <Image src={flowerUser} alt="Client Success" width={48} height={48} />,
    title: "Role-Based Access",
    description: "Granular permissions for different user roles"
  },
  {
    icon: <Image src={monitorFill} alt="Quality Obsessed" width={48} height={48} />,
    title: "Real-Time Monitoring",
    description: "24/7 system monitoring and threat detection"
  },

];

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-10xl mx-auto py-12 ">
      {features.map((item, index) => (
        <CardWithAnimatedBorder
          key={index}
          className="pb-6 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">{item.title}</h3>
          <p className="text-base text-gray-400/80 mt-3">{item.description}</p>
        </CardWithAnimatedBorder>
      ))}
    </div>

  );
}



export default function POSPage() {


  const partnerTypes = [
    {
      icon: tech,
      title: "Sales & Checkout",
      description: "Generate receipts, manage refunds, discounts, and promotions with intuitive checkout flow.",
      benefits: [
        "Digital receipts",
        "Refund processing ",
        "Discount management"
      ]
    },
    {
      icon: learn,
      title: "Product Management",
      description: "Add, edit, and track products with real-time stock updates, alerts, and precise inventory control.",
      benefits: [
        "Real-time inventory",
        "Stock alerts",
        "Product catalog"
      ]
    },
    {
      icon: reseller,
      title: "Website Integration",
      description: "Seamlessly sync your product catalog and online orders with a unified management dashboard.",
      benefits: [
        "E-commerce sync",
        "Order unification",
        "Product synchronization"
      ]
    },
    {
      icon: target,
      title: "Customer Management",
      description: "Manage customer profiles, purchase history, loyalty points, and personalized coupons effortlessly.",
      benefits: [
        "Customer profiles",
        "Purchase history",
        "Loyalty programs"
      ]
    },
    {
      icon: charts,
      title: "Reporting & Analytics",
      description: "Comprehensive sales reporting, revenue tracking, and exportable accounting insights.",
      benefits: [
        "Sales reports",
        "Revenue analytics",
        "Export capabilities"
      ]
    }
  ]


  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Smart Unified Food Retail Assistant"
        buttonIcon={shopping}
        title="SUFRA POS System"
        description="SUFRA is not just a recipe manager. It is the Smart Unified Food Retail Assistant that unifies recipes, inventory, accounting, and AI insights to help restaurants reduce waste, cut costs, and increase profitability in one intelligent platform."
        imageSrc={pos}
        imageAlt="Hero Image"
        imageAnimationClass=""
        containerClass=" "
        imageStyle="scale-100 rounded-xl shadow-xl shadow-sky-500/50 hover:shadow-sky-500/100 transition-all duration-300 border border-sky-500/50"
        buttonClass="w-fit "
        requestBtn="Request Access"
        requestBtnIcon={key}
        talkToSalesBtn="Talk To Sales"
        talkToSalesBtnIcon={phone}
        btnMsg1="Hello, I would like to request access to SUFRA POS."
        btnMsg2="Hello, I would like to talk to a sales representative about SUFRA POS."


      />

      {/* main section */}
      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Core Capabilities
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Everything you need to manage sales, inventory, and customer relationships across all channels.
        </p>
      </div>






      {/* core capabilities */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 w-fit m-auto mt-10 ">
        {partnerTypes.map((partner, index) => (
          <CardWithAnimatedBorder key={index}>
            <div className="p-6 w-fit m-auto space-y-4 bg-[#0F0229] border border-gray-400/20 rounded-2xl">
              {/* Icon */}
              <div className="flex items-center justify-start mb-4">
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={48}
                  height={48}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold gradient-hero-text mb-3">
                {partner.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400/80 text-sm leading-relaxed mb-6 max-w-xs">
                {partner.description}
              </p>

              {/* Partnership Benefits */}
              <div className="space-y-3">
                <h4 className="text-cyan-400/70 font-medium text-sm">
                  features:
                </h4>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-400/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>

      {/* security and scalability */}

      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Security & Scalability
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Enterprise-grade security with the flexibility to grow with your business
        </p>
      </div>



      <Features />



      {/* real-time analytics */}
          <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          See It In Action
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
       Experience the power of Propai CRM through interactive demos of our core features       </p>
      </div>
      <div>
        <Iframe />
      </div>




      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Built With Modern Technology
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Powered by industry-leading technologies for maximum performance, scalability, and reliability
        </p>
      </div>

      <BuildFeatures />




      <div className="border border-gray-400/20 rounded-xl">
        <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
         Ready to Transform Your Sales Operations?
          </h2>
          <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
           Join thousands of businesses that have streamlined their operations with our intelligent POS system
          </p>


          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12 ">


           <button
  onClick={() =>
    window.open(
      `https://wa.me/201555867970?text=${encodeURIComponent(
        "Hello, I would like to request access to SUFRA POS."
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
        "Hi, I would like to talk to the sales team about SUFRA POS."
      )}`,
      "_blank"
    )
  }
  className={`flex items-center cursor-pointer gap-2 px-4 py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 text-sm`}
>
  <Image src={phone} alt="icon" width={16} height={16} />
  Talk to Sales
</button>
          </div>
        </div>

      </div>








    </main>
  );
}


