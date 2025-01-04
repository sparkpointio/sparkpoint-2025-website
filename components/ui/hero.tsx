'use client';
import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';

const Hero = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-fraunces text-5xl font-medium leading-tight">
        AI at the Core,
        <br />
        Blockchain at Its Best
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-gray-600">
        Sparkpoint is a blockchain purpose-built for Developers and Node Operators,
        harnessing AI-driven innovation for those who demand more.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <button className={buttonVariants({ variant: "ghost", size: "lg", className: 'active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000]  hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
          Start Building
        </button>
        <button className={buttonVariants({ variant: "outline", size: "lg", className: 'active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
          How it Works
        </button>
      </div>
    </section>
  )
}

export default Hero;