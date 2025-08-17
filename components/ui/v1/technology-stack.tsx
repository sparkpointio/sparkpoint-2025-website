'use client';
import React from 'react';
import Image from 'next/image'
import { alchemy_logo, arbitrum_arb_logo_full } from '@/lib/assets';

const TechnologyStack = () => {
  return (
    <section className="py-20 px-44">
      <div className="mx-auto text-center">
        <p className="text-gray-600">Technology Stack</p>
        <h2 className="font-fraunces text-4xl font-medium">Sparkpoint</h2>
        <p className="mt-1 text-gray-600">Layer 3 Blockchain focused on AI Applications</p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-12 text-left">
            <div>
              <h3 className="text-xl font-[550]">Micro Fees</h3>
              <p className="text-gray-600 text-lg">
                Affordable transactions for everyone, enabling global accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-[550]">Fast Transactions</h3>
              <p className="text-gray-600 text-lg">
                Instant, reliable transactions designed for a seamless experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-[550]">Empowering Community</h3>
              <p className="text-gray-600 text-lg">
                Putting control in the hands of the community to drive innovation.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[400px] flex gap-4">
            <div className='flex items-center justify-center flex-col gap-6'>
              <Image
                src="https://placehold.co/80x175"
                alt="Placeholder Image 1"
                width={200}
                height={175}
              />
              <span>SparkChain<br />Layer 3</span>
            </div>
            <div className='flex items-center justify-center flex-col gap-6'>
              <Image
                src="https://placehold.co/80x175"
                alt="Placeholder Image 2"
                width={200}
                height={175}
              />
              <span>Arbitrum<br />Layer 2</span>
            </div>
            <div className='flex items-center justify-center flex-col gap-6'>
              <Image
                src="https://placehold.co/80x175"
                alt="Placeholder Image 3"
                width={200}
                height={175}
              />
              <span>Etheruem<br />Layer 1</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          <p className="text-sm">Powered by:</p>
          <Image
            src={arbitrum_arb_logo_full}
            alt="Arbitrum Logo"
            width={100}
            height={24}
          />
          <Image
            src={alchemy_logo}
            alt="Alchemy Logo"
            width={100}
            height={24}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack;