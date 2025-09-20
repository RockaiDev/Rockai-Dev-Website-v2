// Features.jsx

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";





const features = [
    {

        title: "Automation",
        one: "Selenium",
        two: "Cypress",
        three: "Jest",


    },
    {
        title: "Performance",
        one: "Selenium",
        two: "Cypress",
        three: "Jest",

    },
    {
        title: "Security",
        one: "Selenium",
        two: "Cypress",
        three: "Jest",
    },
    {
        title: "Mobile",
        one: "Selenium",
        two: "Cypress",
        three: "Jest",
    },


];

export default function BuildFeatures() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mx-auto py-12 ">
            {features.map((item, index) => (
                <CardWithAnimatedBorder
                    key={index}
                    className="pb-10 pt-8 sm:px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
                >
                   <p className="ps-3 text-center sm:text-start "> {item.title}</p>
              <ul className="flex sm:justify-center justify-center gap-7 sm:gap-0 items-center mt-4 text-cyan-400/80   ">
                <li className=" card-gradient rounded-full sm:px-6 text-center bg-sky-500 ">{item.one}</li>
                <li className=" card-gradient rounded-full sm:px-6 text-center bg-sky-500">{item.two}</li>
                <li className=" card-gradient rounded-full sm:px-6 text-center bg-sky-500" >{item.three}</li>
              </ul>
                </CardWithAnimatedBorder>
            ))}
        </div>

    );
}
