"use client"
import { CardWithAnimatedBorder } from '@/components/CardWithAnimatedBorder/CardWithAnimatedBorder'
import React from 'react'
import Image from 'next/image'
import tech from '@/Assets/Icons/group.svg'
import learn from "@/Assets/Icons/building.svg"
import reseller from "@/Assets/Icons/calender.svg"
import target from "@/Assets/Icons/phoneFill.svg"
import card from "@/Assets/Icons/card.svg"
import docsGreen from "@/Assets/Icons/docsGreen.svg"

export default function ComperhensiveCards() {
  const partnerTypes = [
    {
      icon: tech,
      title: "Leads Management",
      description: "Complete lead lifecycle with modal details, stage progress tracking, and intelligent duplicate prevention system.   ",
      benefits: [
       "Lead scoring &qualification",
       "Automated stage progression",
       "Duplicate detection algorithms",
    
      ]
    },
    {
      icon: learn,
      title: "Inventory Management",
      description: "Comprehensive property, project, and developer management with interactive map zones and detailed specifications.",
      benefits: [
      "Property catalog with images",
      "Project timeline tracking",
      "Developer relationship management",
      ]
    },
    {
      icon: reseller,
      title: "Meetings & Contracts", 
      description: "Streamlined scheduling system with contract management, key field tracking, and automated follow-ups.",
      benefits: [
         "Calendar integration",
      "Contract template library",
      "Digital signature support",
      ]
    },
    {
      icon: target,
      title: "Interaction Logs",
      description: "Detailed per-lead history tracking for all calls, visits, and communications with timestamp accuracy.",
      benefits: [
          "Call recording integration",
      "Visit scheduling",
      "Communication timeline",
      ]
    },
    {
      icon: card,
      title: "Payment Plan Automation",
      description: "Intelligent payment schedule management with auto-inheritance and customizable plan structures.",
      benefits: [
          "Flexible payment terms   ",
      "Automated calculations",
      "Payment reminders",
      ]
    },
    {
      icon: docsGreen,
      title: "Client Report Generation",
      description: "Professional PDF reports with property details, client information, payment schedules, images, and custom notes.",
      benefits: [
          "Branded report templates",
      "Custom field inclusion",
      "Image galleries",
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 w-fit m-auto mt-10">
      {partnerTypes.map((partner, index) => (
        <CardWithAnimatedBorder key={index}>
          <div className="p-6 w-fit m-auto space-y-4 bg-[#0F0229] border border-gray-400/20 rounded-2xl card-gradient">
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
              Features:
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
  )
}