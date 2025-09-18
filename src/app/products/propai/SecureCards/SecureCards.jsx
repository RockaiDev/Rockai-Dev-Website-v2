import React from "react";
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 p-6 w-fit m-auto mt-10">
        {secures.map((card, index) => (
          <CardWithAnimatedBorder key={index}>
            <div className="p-6  m-auto space-y-4 rounded-xl border card-gradient border-gray-400/20">
              {/* Icon */}
              <div className="flex items-center justify-start mb-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold gradient-hero-text mb-3">
                {card.title}
              </h3>

             

              {/* Card Features */}
              <div className="space-y-3">
              
                <ul className="space-y-4 list-none">
                  {card.deliverables.map((benefit, benefitIndex) => (
                    <li
                    
                      key={benefitIndex}
                      className="flex items-center space-x-3 "
                    >
                      <span className="text-slate-400/80 text-sm flex  gap-4">
<Image src={rightWithborder} alt="rightWithborder icon" width={20} height={20}/>

                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>
    </div>
  );
}
