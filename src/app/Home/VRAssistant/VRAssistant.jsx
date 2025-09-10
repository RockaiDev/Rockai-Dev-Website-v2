
import AI from "@/Assets/Icons/AI.svg";
import Image from "next/image";
import illustrator from "@/Assets/Images/illustrator.png"
import Gamified from "./Gamified";




export default function VRAssistant() {
    return (
        <section className="py-16 px-6 mx-auto text-center">

            <div className="secHeader mb-10">
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
                >
                    <Image src={AI} alt="AI icon Icon" width={20} height={20} />
                    Rockai Virtual Assistant
                </button>

                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold gradient-hero-text leading-tight md:leading-tight">Next-Gen AI Chat Support</h2>
                <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-400/80 max-w-3xl mx-auto px-1 sm:px-2">
                    Experience seamless support, project insights, and expert guidance through our conversational AI—built to empower your journey.
                </p>






            </div>

            <div className="ms-0 sm:ms-10 md:ms-24 lg:ms-36">
                <Image src={illustrator} alt="illustrator" className="w-full max-w-[480px] md:max-w-[640px] lg:max-w-none scale-105 md:scale-110 mx-auto" />
                <div className=" m-auto w-fit -mt-10 md:-mt-20">
                    <button className="flex items-center justify-center gap-3  bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full  transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Try It Now
                    </button>
                </div>

            </div>

            <div>
            <Gamified/>
            </div>

        </section>
    );
}
