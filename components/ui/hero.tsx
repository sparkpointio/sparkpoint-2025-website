'use client';
import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { alchemy_logo, arbitrum_arb_logo_full } from '@/lib/assets';
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-center  relative w-full h-screen bg-gradient-to-tr from-[#F78F36] from-[25%] via-white to-[#316DB5]">
      <div className='m-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full'>
        <h1 className="font-alegreya text-4xl md:text-5xl leading-tight text-center mt-24">
          Bringing AI and Blockchain,
          <br />
          Together to Spark Growth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          We connect blockchain and AI to unlock new possibilties
          and drive exponential growth for businesses and communities
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#">
            <button className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
              Join Waitlist
            </button>
          </Link>
          <Link href="https://x.com/sparkpointio" target='_blank'>
            <button className={buttonVariants({ variant: "outline", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] text-white bg-black hover:bg-black hover:shadow-[0.25rem_0.25rem_#E5E7EB] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
              Follow X @sparkpointio
            </button>
          </Link>
        </div>
        <div className="mt-16 flex items-center justify-center md:gap-8 gap-4 flex-col md:flex-row">
          <p className="text-sm">Grants from:</p>
          <div className='flex items-center justify-center gap-4'>
            <Link href="https://arbitrum.io/" target='_blank' className='hover:cursor-pointer' title="Arbitrum">
              <Image
                src={arbitrum_arb_logo_full}
                alt="Arbitrum Logo"
                width={100}
                height={24}
              />
            </Link>
            <Link href="https://www.alchemy.com/" target='_blank' className='hover:cursor-pointer' title="Alchemy">
              <Image
                src={alchemy_logo}
                alt="Alchemy Logo"
                width={100}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero;