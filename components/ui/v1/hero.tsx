'use client';
import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { alchemy_logo, arbitrum_arb_logo_full, bg_hero_light, bg_hero_dark } from '@/lib/assets/index';
import Image from 'next/image'
import Link from 'next/link';
import { Waitlist } from '@/components/ui/waitlist-dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <section className="text-center relative w-full h-screen">
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-1" style={{ backgroundImage: `url(${bg_hero_light.src})` }}></div>
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-2" style={{ backgroundImage: `url(${bg_hero_dark.src})` }}></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-mask"></div>

      <div className='m-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full relative z-2'>
        <h1 className="text-4xl md:text-5xl leading-tight text-center mt-24 font-[family-name:var(--font-rubik)] text-custom-1">
          SparkPoint Brings<br className="lg:hidden" /> AI and Blockchain<br /> Together to Spark Growth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-poppins)] text-custom-1">
          We connect blockchain and AI to unlock new possibilities
          and drive exponential growth for businesses and communities
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Waitlist>
            <Link className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })} href="https://app.uniswap.org/explore/tokens/ethereum/0x0488401c3f535193fa8df029d9ffe615a06e74e6" target='_blank'>
              SRK Token
            </Link>
          </Waitlist>
          <Link className={buttonVariants({ variant: "outline", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] text-white bg-black hover:bg-black hover:shadow-[0.25rem_0.25rem_#E5E7EB] active:translate-x-0 active:translate-y-0 active:shadow-none button-2' })} href="https://x.com/sparkpointio" target='_blank'>
            Follow&nbsp;<FontAwesomeIcon icon={faXTwitter} size='sm' />&nbsp;@sparkpointio
          </Link>
        </div>
        <div className="mt-16 flex items-center justify-center md:gap-8 gap-4 flex-col md:flex-row">
          <p className="text-sm text-custom-1">Grants from:</p>
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