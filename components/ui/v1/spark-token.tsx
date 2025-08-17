"use client";

import React, { useEffect } from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { PiStarFourFill } from "react-icons/pi";

function SparkToken() {

  useEffect(() => {
    let index = 0;
    const interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-80, 80)}%`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(() => {
        animate(htmlStar);

        setInterval(() => animate(htmlStar), 1300);
      }, index++ * (interval / 2));
    }
  }, []);

  return (
    <section className="py-20 px-44">
      <div className="mx-auto text-center space-y-4">
        <p className="text-3xl font-mono">
          <span className="font-medium italic font-fraunces">SparkChain</span> empowers everyone
          <br />
          to own, govern, and secure
          <br />
          its future through {' '}
          <span className="inline-block magic bg-clip-text relative cursor-pointer group">
            <span className='font-medium italic font-fraunces'>SPARK</span>
            <PiStarFourFill className="magic-star [--size:clamp(8px,1.5vw,30px)] hidden group-hover:block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-orange-500" />
            <PiStarFourFill className="magic-star [--size:clamp(8px,1.5vw,30px)] hidden group-hover:block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
          </span>,
          <br />
          the native token driving the network&apos;s
          <br />
          innovation and resilience.
        </p>
        <button className={buttonVariants({ variant: "ghost", size: "lg", className: 'group font-normal active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000]  hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
          Own Your Piece of {' '}
          <span className="inline-block magic bg-clip-text relative ml-1">
            <span className='font-medium italic font-fraunces'>SPARK</span>

            <PiStarFourFill className="magic-star [--size:clamp(8px,1.5vw,10px)] hidden group-hover:block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-orange-500" />
            <PiStarFourFill className="magic-star [--size:clamp(8px,1.5vw,10px)] hidden group-hover:block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
          </span>
        </button>
      </div>
    </section >
  )
}


export default SparkToken;