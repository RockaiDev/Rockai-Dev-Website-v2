import React from "react";
import { motion } from "framer-motion";
import Rocket from "@/Assets/Icons/Rocket.svg";
import rightWithborder from "@/Assets/Icons/rightWithborder.svg";
import p1 from "@/Assets/Icons/p1.svg";
import p2 from "@/Assets/Icons/p2.svg";
import p3 from "@/Assets/Icons/p3.svg";
import p4 from "@/Assets/Icons/p4.svg";
import Image from "next/image";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";

export default function SecureCards() {
  const secures = [
    {
      icon: p1,
      title: "Admin",
      description: "",
      deliverables: [
        "Team oversight",
        "Lead assignment",
        "Performance analytics",
        "Inventory management",
        
      ],
    },
    {
      icon: p2,
      title: "Sales Admin",
      description: "",
      deliverables: [
        "Secure payment processing",
        "Multi-branch support",
        "Staff performance tracking",
        "Offline functionality",
      ],
    },
    {
      icon: p3,
      title: "Team Leader",
      description: "",
      deliverables: [
        "Team member data",
       "Lead distribution",
       "Meeting coordination",
        "Team reports",
      ],
    },
    {
      icon: p4,
      title: "Sales Rep",
      description: "",
      deliverables: [
       "Assigned leads only",
       "Personal meetings",
       "Client interactions",
       "Individual reports"
      ],
    },
  ];

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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 w-full max-w-7xl mx-auto mt-8 sm:mt-10">
        {secures.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <CardWithAnimatedBorder>
              <motion.div 
                className="p-4 sm:p-6 m-auto space-y-3 sm:space-y-4 rounded-xl border card-gradient border-gray-400/20 h-full"
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
                    src={card.icon}
                    alt={card.title}
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
                  {card.title}
                </motion.h3>

                {/* Card Features */}
                <motion.div 
                  className="space-y-2 sm:space-y-3"
                  variants={containerVariants}
                >
                  <ul className="space-y-2 sm:space-y-3 list-none">
                    {card.deliverables.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="flex items-center space-x-2 sm:space-x-3"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                      >
                        <Image 
                          src={rightWithborder} 
                          alt="rightWithborder icon" 
                          width={16} 
                          height={16} 
                          className="sm:w-5 sm:h-5 flex-shrink-0"
                        />
                        <span className="text-slate-400/80 text-xs sm:text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </CardWithAnimatedBorder>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
