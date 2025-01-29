'use client';
import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { bg_community_light, bg_community_dark } from '@/lib/assets';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Community = () => {
  return (
    <section className="text-center relative w-full py-40">
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-1" style={{ backgroundImage: `url(${bg_community_light.src})` }}></div>
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-2" style={{ backgroundImage: `url(${bg_community_dark.src})` }}></div>

      <div className='m-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full relative z-1'>
        <p className="text-4xl md:text-5xl leading-tight text-center font-[family-name:var(--font-rubik)] text-custom-1">
          Community First
        </p>
        <p className="text-[1.2em] mx-auto mt-5 mb-7 max-w-2xl font-[family-name:var(--font-poppins)] text-custom-2">
          At the heart of everything we do is a deep commitment<br className="hidden sm:block" /> to the people who make our mission possible.
        </p>

        <a href="https://t.me/SparkPointOfficial" target="_blank" rel="noreferrer" className={buttonVariants({
          variant: "ghost",
          size: "lg",
          className: 'w-full sm:w-[300px] active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none button-1'
        })}>
          Join Our Community <FontAwesomeIcon className="ms-2" icon={faTelegram}  />
        </a>
      </div>
    </section>
  )
}

export default Community;