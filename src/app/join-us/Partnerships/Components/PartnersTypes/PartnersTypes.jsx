"use client"
import { CardWithAnimatedBorder } from '@/components/CardWithAnimatedBorder/CardWithAnimatedBorder'
import React from 'react'
import Image from 'next/image'
import tech from '@/Assets/Icons/tech.svg'
import learn from "@/Assets/Icons/learn.svg"
import reseller from "@/Assets/Icons/reseller.svg"
import target from "@/Assets/Icons/targetFill.svg"

export default function PartnersTypes() {
  const partnerTypes = [
    {
      icon: tech,
      title: "Technology Partners",
      description: "Software companies, cloud providers, and technology vendors looking to integrate or collaborate",
      benefits: [
        "Joint solution development",
        "Technical integration support", 
        "Co-marketing opportunities"
      ]
    },
    {
      icon: learn,
      title: "Academic Partners",
      description: "Leading universities, research centers, and educational bodies driving innovation and knowledge advancement.",
      benefits: [
        "Research collaboration",
        "Student internship programs",
        "Knowledge exchange"
      ]
    },
    {
      icon: reseller,
      title: "Reseller Partners", 
      description: "Agencies, consultants, and solution providers committed to delivering our products across diverse markets",
      benefits: [
        "Competitive margins",
        "Sales training & support",
        "Marketing materials"
      ]
    },
    {
      icon: target,
      title: "Strategic Partners",
      description: "Major enterprises and organizations collaborating with us for long-term innovation and market leadership.",
      benefits: [
        "Exclusive partnerships",
        "Joint market expansion", 
        "Priority support"
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 w-fit m-auto mt-10">
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
                Partnership Benefits:
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