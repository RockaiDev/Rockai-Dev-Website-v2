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
        buttonText="Unified Sales Management"
        buttonIcon={shopping}
        title="POS System"
        description="Seamlessly manage both in-store and online sales with our intelligent point-of-sale solution that unifies your entire business operations."
        imageSrc={pos}
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

      {/* main section */}
      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
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



      {/* grid section  */}


      <div className="flex w-full mt-16 h-[600px] gap-8">

        <div className="flex w-1/4 items-center">

          <CardWithAnimatedBorder

            className="pb-10 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start h-fit"
          >
            <Image src={phone} alt="Innovation First" width={24} height={24} />
            <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">Competitive Salary</h3>
            <p className="text-base text-gray-400/80 mt-3">Above-market compensation with performance bonuses and equity options</p>
          </CardWithAnimatedBorder>
        </div>




        <div className="flex flex-col w-1/2 justify-center gap-6 px-6 ">
          {/* Real-Time Sync */}
          <div className=" one flex flex-col  justify-center m-auto gap-4">
            <div className="flex items-start gap-4">
              <Image src={sendplane} alt="Real-Time Sync" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text ">Real-Time Sync</h3>
                <p className="text-sm text-gray-400/80">
                  Inventory and orders sync instantly across all sales channels
                </p>
              </div>
            </div>

            {/* Unified Dashboard */}
            <div className="flex items-start gap-4">
              <Image src={greenScr} alt="Real-Time Sync" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text">Unified Dashboard</h3>
                <p className="text-sm text-gray-400/80">
                  Single interface to manage both online and offline operations
                </p>
              </div>
            </div>


            {/* Mobile Ready */}
            <div className="flex items-start gap-4">
              <Image src={cellphone} alt="Real-Time Sync" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text">Mobile Ready</h3>
                <p className="text-sm text-gray-400/80">
                  Access your POS system from any device, anywhere
                </p>
              </div>
            </div>

          </div>


          <div className="flex flex-col two gap-4 mt-8">


            {/* Low Stock Alerts */}
            <div className="flex items-start gap-4">
              <Image src={emergencyTr} alt="Low Stock Alerts" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text">Low Stock Alerts</h3>
                <p className="text-sm text-gray-400/80">
                  Automatic notifications when inventory levels reach critical thresholds
                </p>
              </div>
            </div>

            {/* Auto-Reordering */}
            <div className="flex items-start gap-4">
              <Image src={directionss} alt="Auto-Reordering" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text">Auto-Reordering</h3>
                <p className="text-sm text-gray-400/80">
                  Intelligent reorder suggestions based on sales patterns and seasonality
                </p>
              </div>
            </div>

            {/* Multi-Location Sync */}
            <div className="flex items-start gap-4">
              <Image src={greenCube} alt="Multi-Location Sync" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white gradient-hero-text">Multi-Location Sync</h3>
                <p className="text-sm text-gray-400/80">
                  Real-time inventory synchronization across all store locations
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col three gap-4 m-auto mt-8">
            {/* Sales Analytics */}
            <div className="flex items-start gap-4">
              <Image src={analytics} alt="Sales Analytics" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Sales Analytics</h3>
                <p className="text-sm text-gray-400/80">
                  Detailed sales performance metrics with trend analysis and forecasting
                </p>
              </div>
            </div>

            {/* Revenue Tracking */}
            <div className="flex items-start gap-4">
              <Image src={upward} alt="Revenue Tracking" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Revenue Tracking</h3>
                <p className="text-sm text-gray-400/80">
                  Real-time revenue monitoring with profit margin analysis
                </p>
              </div>
            </div>

            {/* Export Capabilities */}
            <div className="flex items-start gap-4">
              <Image src={docs} alt="Export Capabilities" width={24} height={24} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Export Capabilities</h3>
                <p className="text-sm text-gray-400/80">
                  Export reports in multiple formats for accounting and tax purposes
                </p>
              </div>
            </div>

          </div>
        </div>


        <div className="flex w-1/4  justify-between">

          <div className="flex flex-col justify-between">
            <CardWithAnimatedBorder

              className="pb-10 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
            >
              <Image src={phone} alt="Innovation First" width={24} height={24} />
              <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">Competitive Salary</h3>
              <p className="text-base text-gray-400/80 mt-3">Above-market compensation with performance bonuses and equity options</p>
            </CardWithAnimatedBorder>
            <CardWithAnimatedBorder

              className="pb-10 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
            >
              <Image src={phone} alt="Innovation First" width={24} height={24} />
              <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">Competitive Salary</h3>
              <p className="text-base text-gray-400/80 mt-3">Above-market compensation with performance bonuses and equity options</p>
            </CardWithAnimatedBorder>
          </div>

        </div>






      </div>


      {/* security and scalability */}

      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Security & Scalability
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Enterprise-grade security with the flexibility to grow with your business
        </p>
      </div>



      <Features />



      {/* real-time analytics */}
          <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          See It In Action
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
       Experience the power of Propai CRM through interactive demos of our core features       </p>
      </div>
      <div>
        <Iframe />
      </div>




      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Built With Modern Technology
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Powered by industry-leading technologies for maximum performance, scalability, and reliability
        </p>
      </div>

      <BuildFeatures />




      <div className="border border-gray-400/20 rounded-xl">
        <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
          <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
         Ready to Transform Your Sales Operations?
          </h2>
          <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
           Join thousands of businesses that have streamlined their operations with our intelligent POS system
          </p>


          <div className="flex justify-center items-center gap-4 mb-12 ">


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
  className={`flex items-center gap-2 px-4 py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 text-sm`}
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


