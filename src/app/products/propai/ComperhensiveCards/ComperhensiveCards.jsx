"use client"
import { CardWithAnimatedBorder } from '@/components/CardWithAnimatedBorder/CardWithAnimatedBorder'
import React from 'react'
import { motion } from 'framer-motion'
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 w-full max-w-7xl mx-auto mt-8 sm:mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {partnerTypes.map((partner, index) => (
        <motion.div key={index} variants={cardVariants}>
          <CardWithAnimatedBorder>
            <motion.div 
              className="p-4 sm:p-6 w-full space-y-3 sm:space-y-4 bg-[#0F0229] border border-gray-400/20 rounded-2xl card-gradient h-full"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className="flex items-center justify-start mb-3 sm:mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src={partner.icon} 
                  alt={partner.title} 
                  width={40} 
                  height={40}
                  className="sm:w-12 sm:h-12 text-cyan-400"
                />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold gradient-hero-text mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {partner.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-slate-400/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {partner.description}
              </motion.p>
              
              {/* Partnership Benefits */}
              <motion.div 
                className="space-y-2 sm:space-y-3"
                variants={containerVariants}
              >
                <motion.h4 
                  className="text-cyan-400/70 font-medium text-xs sm:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  Features:
                </motion.h4>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex} 
                      className="flex items-center space-x-2 sm:space-x-3"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + benefitIndex * 0.05 + 0.4 }}
                    >
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-400/80 text-xs sm:text-sm leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </CardWithAnimatedBorder>
        </motion.div>
      ))}
    </motion.div>
  )
}