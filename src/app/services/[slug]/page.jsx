"use client"
import Image from "next/image";
import { servicesData } from "../data/data"
import { notFound } from "next/navigation";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function ServicePage({ params }) {
    const { slug } =  params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <div className=" mx-auto py-12  sm:mt-24">
            <div className="secHeader mb-1  mx-auto text-center pt-10 px-6">
                <button
                    className={`flex items-center gap-2  px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
                >
                    <Image src={service.icon} alt="bulbFill icon " width={20} height={20} />
                    {service.service}
                </button>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">{service.our}</h2>
                <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
                    {service.ourDesc}
                </p>

            </div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 p-6 w-fit m-auto mt-10 ">
                {service.cards.map((card, index) => (
                    <CardWithAnimatedBorder key={index}>
                        <div className="p-6 w-fit m-auto space-y-4 bg-[#0F0229] border border-gray-400/20 rounded-2xl">
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

                            {/* Description */}
                            <p className="text-slate-400/80 text-sm leading-relaxed mb-6 max-w-xs">
                                {card.description}
                            </p>

                            {/* cardship Benefits */}
                            <div className="space-y-3">
                                <h4 className="text-cyan-400/70 font-medium text-sm">
                                    features:
                                </h4>
                                <ul className="space-y-2">
                                    {card.deliverables.map((benefit, benefitIndex) => (
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

            {/* title and desc section features  */}
            <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text text-center">{service.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto py-12 ">
                {service.features.map((item, index) => (
                    <CardWithAnimatedBorder
                        key={index}
                        className="pb-6 pt-8 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
                    >
                        <h3 className="text-xl font-semibold mb-2 mt-3 gradient-hero-text">{item.title}</h3>
                        <p className="text-base text-gray-400/80 mt-3">{item.description}</p>
                    </CardWithAnimatedBorder>
                ))}
            </div>



            {/* Technology Stack */}
            <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] pb-4 font-bold gradient-hero-text text-center">{service.techTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto py-12  ">

                {service.techs.map((item, index) => (
                    <CardWithAnimatedBorder
                        key={index}
                        className="pb-4 pt-4 px-4 rounded-4xl border border-[#00c6ff]/20 card-gradient text-white text-start"
                    >
                        <p className="ps-3 "> {item.title}</p>
                        <ul className="flex justify-between items-center mt-4 text-cyan-400/80 text-xs  ">
                            <li className=" card-gradient rounded-full px-6 text-center bg-sky-500 ">{item.one}</li>
                            <li className=" card-gradient rounded-full px-6 text-center bg-sky-500">{item.two}</li>
                            <li className=" card-gradient rounded-full px-6 text-center bg-sky-500" >{item.three}</li>
                        </ul>
                    </CardWithAnimatedBorder>
                ))}
            </div>

            {/* STEPS SECTION */}
            <div className="w-full text-center pt-24 px-6">
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
                    {service.stepsTitle}
                </h2>

                <div className="mt-16 flex flex-col md:flex-row md:justify-center md:items-start gap-12 md:gap-0 relative">
                    {service.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col items-center text-center px-6 relative"
                        >
                            <div className="mb-6 relative flex items-center justify-center">

                                <div className="w-[120px] h-[120px] flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={120}
                                        height={120}
                                        className="object-contain w-full h-full"
                                    />
                                </div>


                                {index !== service.items.length - 1 && (
                                    <div className="hidden 2xl:block absolute top-1/2 left-[140px] w-[200px] h-[3px] bg-gray-600/40 z-10"></div>
                                )}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>





            {/* last section */}


            <div className="border border-gray-400/20 rounded-xl pb-16 mt-20">
                <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">


                    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
                        {service.lastTitle}
                    </h2>
                    <p className="mt-2 text-xl text-gray-400/80 max-w-3xl mx-auto">
                        {service.lastDesc}
                    </p>
                </div>



                <div className="flex items-center justify-center gap-6 pt-4 lg:w-full ">
                    <button className="px-8 lg:py-4  py-3 flex rounded-full justify-center  bg-sky-500 text-white text-md items-center  hover:bg-sky-600 transition cursor-pointer"
                        onClick={() =>
                            window.open(
                                `https://wa.me/201555867970?text=${encodeURIComponent(
                                   `${service.lastBtnMSG}`
                                )}`,
                                "_blank"
                            )
                        }




                    >
                        <Image src={service.lastBtnIcon} alt="arrow" className="w-5 h-5 me-2" />
                        {service.lastBtn}
                    </button>
                    <HoverBorderGradient 
                         onClick={() =>
                            window.open(
                                `https://wa.me/201555867970?text=${encodeURIComponent(
                                   `${service.requestBtnMSg}`
                                )}`,
                                "_blank"
                            )
                        }>
                        <div className="flex gap-3 py-2 lg:px-6 lg:w-[250px] justify-center items-center cursor-pointer">
                            <Image src={service.requestBtnIcon} alt="eye" width={20} height={20} />
                            <span className="text-cyan-600">{service.requestBtn}</span>
                        </div>
                    </HoverBorderGradient>
                </div>
            </div>

        </div>
    );
}
