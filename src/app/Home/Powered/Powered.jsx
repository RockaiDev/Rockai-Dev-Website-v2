import React from 'react'
import Image from 'next/image';
import verified from "@/Assets/Icons/verified.svg";
import LogosCarousel from '../Swiper/Swiper';
export default function Powered() {
  return (
      
    <>
    <section className="pt-10 px-6 mx-auto text-center ">

            <div className="secHeader mb-1">
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  m-auto`}
                >
                    <Image src={verified} alt="verified icon " width={20} height={20} />
               Trusted Partners
                </button>

                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold gradient-hero-text leading-tight md:leading-tight">Powering Egypt’s Most Ambitious Businesses</h2>
                <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-400/80 max-w-2xl mx-auto px-1 sm:px-2">
                  Turning client visions into reality
                </p>



     <div className='px-0 sm:px-4 lg:px-24'>
           <LogosCarousel/>

     </div>
     



            </div>
            </section>
    
    </>
            
  )
}
