// Features.jsx

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import storyRocket from "@/Assets/Icons/storyRocket.svg"
import storymagic from "@/Assets/Icons/storymagic.svg"
import storyUser from "@/Assets/Icons/storyUser.svg"
import storyAward from "@/Assets/Icons/storyAward.svg"
import storyEye from "@/Assets/Icons/storyEye.svg"
import storyGroup from "@/Assets/Icons/storyGroup.svg"
import Image from "next/image";




const features = [
  {
    icon: <Image src={storyRocket} alt="Innovation First" width={48} height={48} />,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with cutting-edge technology"
  },
  {
    icon: <Image src={storymagic} alt="Egyptian Excellence" width={48} height={48} />,
    title: "Egyptian Excellence",
    description: "Proudly representing Egypt's tech capabilities on the global stage"
  },
  {
    icon: <Image src={storyUser} alt="Client Success" width={48} height={48} />,
    title: "Client Success",
    description: "Your success is our success - we're partners in your digital transformation"
  },
  {
    icon: <Image src={storyAward} alt="Quality Obsessed" width={48} height={48} />,
    title: "Quality Obsessed",
    description: "Every line of code, every design decision reflects our commitment to excellence"
  },
  {
    icon: <Image src={storyEye} alt="Future Ready" width={48} height={48} />,
    title: "Future Ready",
    description: "Building solutions that scale and adapt to tomorrow's challenges"
  },
  {
    icon: <Image src={storyGroup} alt="Team Spirit" width={48} height={48} />,
    title: "Team Spirit",
    description: "Our diverse team of experts collaborates to deliver exceptional results"
  }
];

export default function Features() {
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
