'use client';
import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { bg_community } from '@/lib/assets';
import Link from 'next/link';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Community = () => {
  return (
    <section style={{ backgroundImage: `url(${bg_community.src})` }} className="text-center bg-cover bg-center bg-no-repeat relative w-full py-40">
      <div className='m-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full'>
        <p className="text-4xl md:text-5xl leading-tight text-center font-[family-name:var(--font-rubik)]">
          Community First
        </p>
        <p className="text-[1.2em] mx-auto mt-5 mb-7 max-w-2xl text-gray-600 font-[family-name:var(--font-poppins)]">
          At the heart of everything we do is a deep commitment<br className="hidden sm:block" /> to the people who make our mission possible.
        </p>

        <a href="https://t.me/SparkpointOfficial" target="_blank" rel="noreferrer" className={buttonVariants({
          variant: "ghost",
          size: "lg",
          className: 'w-full sm:w-[300px] active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none'
        })}>
          Join Our Community <FontAwesomeIcon className="ms-2" icon={faTelegram}  />
        </a>
      </div>
    </section>
  )
}

export default Community;