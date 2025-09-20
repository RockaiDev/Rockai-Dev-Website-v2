"use client"
import React from 'react'
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import BuildFeatures from "./buildWith/BuildWith";
import Iframe from "./Iframe/Iframe";
import Image from "next/image";
import HeroSection from "@/components/PagesHero/PagesHero";
import pos from "@/Assets/Images/attendai.svg"
import phone from "@/Assets/Icons/phone.svg";
import key from "@/Assets/Icons/key.svg";
import shopping from "@/Assets/Icons/smart.svg";
import tech from '@/Assets/Icons/qr.svg'
import learn from "@/Assets/Icons/bill.svg"
import reseller from "@/Assets/Icons/world.svg"
import target from "@/Assets/Icons/chartFill.svg"
import charts from "@/Assets/Icons/charts.svg"
import dollar from "@/Assets/Icons/dollar.svg"
import calendarr from "@/Assets/Icons/calendarr.svg"
import analytics from "@/Assets/Icons/analytics.svg"
import energy from "@/Assets/Icons/qr.svg"
import credit from "@/Assets/Icons/smartt.svg"
import monitorFill from "@/Assets/Icons/msgg.svg"
import HowAttendai from './HowAttendai/HowAttendai';









const features = [
  {
    icon: <Image src={energy} alt="Innovation First" width={48} height={48} />,
    title: "Automated Attendance",
    description: "Effortless, barcode-based tracking with instant parent alerts."
  },
  {
    icon: <Image src={credit} alt="Egyptian Excellence" width={48} height={48} />,
    title: "Smart Scheduling",
    description: "Organize and modify weekly classes with ease."
  },
  {
    icon: <Image src={analytics} alt="Client Success" width={48} height={48} />,
    title: "Progress Insights",
    description: "Real-time financial and performance stats at a glance."
  },
  {
    icon: <Image src={monitorFill} alt="Quality Obsessed" width={48} height={48} />,
    title: "AI-Powered Messaging",
    description: "Built-in parent messaging automation, no personal apps needed."
  },

];

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-16  max-w-10xl mx-auto py-12  ">
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




export default function Hodurai() {


  const partnerTypes = [
    {
      icon: tech,
      title: "Attendance Automation",
      description: "Accurately track attendance using barcode scanning to eliminate manual roll calls and ensure no errors in your records.",
      benefits: [
        "Instant check-in/check-out",
        "Zero human error ",
        "Historical attendance records"
      ]
    },
    {
      icon: learn,
      title: "Parent Notification",
      description: "Send instant automated alerts to parents, keeping them updated on attendance without any additional effort.",
      benefits: [
        "Arrival confirmations",
        "Absence notifications",
        "Class updates"
      ]
    },
    {
      icon: calendarr,
      title: "Class & Student Scheduler",
      description: "Manage your classes and students easily with an intuitive drag-and-drop scheduling system.",
      benefits: [
        "Weekly class templates",
        "Easy rescheduling",
        "Student availability tracking"
      ]
    },
    {
      icon: target,
      title: "Financial Reports & Statistics",
      description: "Monitor revenue and track financial performance with comprehensive real-time analytics.",
      benefits: [
        "Daily/weekly/monthly earnings",
        "Student payment status",
        "Class profitability"
      ]
    },
    {
      icon: dollar,
      title: "Multi-pricing per Session",
      description: "Set flexible pricing schemes customized for different students, educational levels, and session types.",
      benefits: [
        "Individual pricing",
        "Group discounts",
        "Level-based rates"
      ]
    },
    {
      icon: charts,
      title: "Dashboard Overview",
      description: "View today's schedule and class status at a glance through a centralized, easy-to-use dashboard.",
      benefits: [
        "Live class status",
        "Upcoming sessions",
        "Quick actions"
      ]
    }
  ]


  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Smart Tutoring Platform "
        buttonIcon={shopping}
        title="Hodurai "
        description="Transform your private tutoring business with automated attendance tracking, smart scheduling, and real-time performance analytics. AttendAI eliminates administrative overhead so you can focus on teaching."
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
        btnMsg1="Hello, I would like to request access to hodurai."
        btnMsg2="Hello, I would like to talk to a sales representative about hodurai."



      />
      {/* security and scalability */}

      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          What Sets AttendAI Apart
        </h2>

      </div>

      <Features />


      <div className="w-full">

        <HowAttendai />

      </div>


      {/* main section */}
      <div className="secHeader mb-1 mx-auto text-center pt-24 px-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Complete Feature Breakdown
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Every tool you need to run a professional tutoring business        </p>
      </div>






      {/* core capabilities */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 w-fit m-auto mt-10 ">
        {partnerTypes.map((partner, index) => (
          <CardWithAnimatedBorder key={index}>
            <div className="p-6 w-fit m-auto space-y-4 bg-[#0F0229] rounded-2xl">
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
            Ready to Simplify Your Tutoring Business?
          </h2>
          <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
            Join hundreds of tutors who have transformed their operations with AttendAI. Start your free trial today and experience the difference.
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 ">


            <button
              onClick={() =>
                window.open(
                  `https://wa.me/201555867970?text=${encodeURIComponent(
                    "Hello, I would like to request access to hodurai."
                  )}`,
                  "_blank"
                )
              }
              className={`flex  cursor-pointer items-center gap-2 px-4 py-4 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-600`}
            >
              <Image src={key} alt="icon" width={16} height={16} />
              Request Access
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/201555867970?text=${encodeURIComponent(
                    "Hi, I would like to talk to the sales team about hodurai."
                  )}`,
                  "_blank"
                )
              }
              className={`flex cursor-pointer items-center gap-2 px-4 py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 text-sm`}
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


