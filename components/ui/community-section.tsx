"use client"

import React from 'react';
import { buttonVariants } from '@/components/variants/button-variants';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#316DB5] from-[10%] via-white to-[#F58F36]">
      <div className="mx-auto text-center">
        <p className="text-lg  text-gray-600">
          At the heart of everything we do is a deep commitment
          to the people who make our vision possible
        </p>
        <h2 className="mt-4 font-alegreya text-5xl font-medium">Rooted In Community</h2>
        <div className="mt-8 flex justify-center gap-4">
          <button className={buttonVariants({ variant: "ghost", size: "lg", className: 'text-md w-40 active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
            Team
          </button>
          <button className={buttonVariants({ variant: "outline", size: "lg", className: 'text-md w-40 active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-inherit hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
            Roadmap
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;