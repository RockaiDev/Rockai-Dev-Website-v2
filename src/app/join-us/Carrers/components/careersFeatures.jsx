// Features.jsx

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import storyRocket from "@/Assets/Icons/storyRocket.svg"
import learn from "@/Assets/Icons/learn.svg"
import storyUser from "@/Assets/Icons/wlb.svg"
import storyEye from "@/Assets/Icons/globalImpact.svg"
import compSalary from "@/Assets/Icons/compSalary.svg"
import Image from "next/image";




const features = [
  {
    icon: <Image src={compSalary} alt="Innovation First" width={48} height={48} />,
    title: "Competitive Salary",
    description: "Above-market compensation with performance bonuses and equity options"
  },
  {
    icon: <Image src={learn} alt="Egyptian Excellence" width={48} height={48} />,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and internal training programs"
  },
  {
    icon: <Image src={storyUser} alt="Client Success" width={48} height={48} />,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous vacation policy"
  },
  {
    icon: <Image src={storyRocket} alt="Quality Obsessed" width={48} height={48} />,
    title: "Career Growth",
    description: "Clear career progression paths and mentorship from industry experts"
  },
  {
    icon: <Image src={storyEye} alt="Future Ready" width={48} height={48} />,
    title: "Global Impact",
    description: "Work on projects that shape the future of technology in the Middle East"
  },

];

export default function CareersFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12 px-4">
      {features.map((item, index) => (
        <CardWithAnimatedBorder
          key={index}
          className="pb-10 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">{item.title}</h3>
          <p className="text-base text-gray-400/80 mt-3">{item.description}</p>
        </CardWithAnimatedBorder>
      ))}
    </div>
    
  );
}
