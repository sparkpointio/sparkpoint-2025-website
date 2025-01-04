'use client';
import React from 'react';
import Image from 'next/image'

const SparkAgent = () => {
  return (
    <section className="bg-[#D6F2FE] px-28 py-20">
      <p className="text-sm text-gray-600">The flagship application:</p>
      <h2 className="font-fraunces text-4xl font-medium">SparkAgent Launchpad</h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 space-x-24 items-center">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden p-4">
          <Image
            src="https://placehold.co/750x450"
            alt="AI Visualization"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium">Low Fees</h3>
            <p className="text-gray-600 text-xl">Zero gas and low fees <br /> on all orders.</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Transparent</h3>
            <p className="text-gray-600 text-xl">Fully onchain transactions.</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Seamless</h3>
            <p className="text-gray-600 text-xl">No interruptions.</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Fully Automated</h3>
            <p className="text-gray-600 text-xl">Acting on its own based on <br /> data given.</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SparkAgent;