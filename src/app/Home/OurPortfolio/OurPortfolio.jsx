import React from 'react'
import secFolder from "@/Assets/Icons/secFolder.svg"
import Image from "next/image";
import ThreeDimensionCards from '@/components/3DCards/3DCards';
export default function OurPortfolio() {
    return (
        <section className="py-16 px-6 mx-auto text-center ">

            <div className="secHeader mb-10 ">
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
                >
                    <Image src={secFolder} alt="secFolder icon " width={20} height={20} />
                  Our Portfolio
                </button>

                <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">Real Results, Real Projects</h2>
                <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
                  See how we transform challenges into real-world innovations for our clients.
                </p>






            </div>

            <ThreeDimensionCards/>

        </section>

    )
}
