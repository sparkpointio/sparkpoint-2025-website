'use client';
import React from 'react';
import Image from 'next/image'
import { buttonVariants } from '../variants/button-variants';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import {
  community_driven_logo,
  decentralized_logo,
  no_code_integration_logo,
  transparency_logo
} from '@/lib/assets';

const SparkAgent = () => {
  const card_items = [
    {
      image: no_code_integration_logo,
      title: 'No-Code Integration',
      description: 'Launch AI-powered marketing campaigns without writing a single line of code'
    },
    {
      image: transparency_logo,
      title: 'Transparency',
      description: 'Every campaign and interaction is recorded on-chain, ensuring accountability and trust'
    },
    {
      image: decentralized_logo,
      title: 'Decentralized',
      description: 'Enjoy secure, censorship-resistant marketing solutions on SparkPoint\'s Layer 2 blockchain'
    },
    {
      image: community_driven_logo,
      title: 'Community-Driven',
      description: 'Co-own SparkAgent, guiding its future development and decisions through decentralized governance'
    }
  ];

  return (
    <section className="container mx-auto px-6 md:px-16 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-2">The flagship application: (Coming Soon!)</p>
            <h2 className="text-4xl font-bold">SparkAgent: AI Agent Launchpad</h2>
          </div>

          <p className='text-2xl max-w-md'>
            SparkAgent empowers users to launch their own AI agents with no-code tools,
            decentralized transparency, and community-driven innovation&mdash;creating
            tailored AI solutions for Web3 projects using cutting-edge blockchain technology.
          </p>

          <div>
            <Link href="#">
              <button
                className={buttonVariants({
                  variant: "ghost",
                  size: "2xl",
                  className: 'w-full sm:w-48 py-3 border border-black transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none'
                })}
              >
                Coming Soon!
              </button>
            </Link>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
          {card_items.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function Card({
  image,
  title,
  description
}: {
  image: string | StaticImport,
  title: string,
  description: string
}) {
  return (
    <div className="flex flex-col items-center p-6 gap-4 border-2 border-black rounded-2xl hover:cursor-pointer h-full active:drop-shadow-none transition-all duration-200 hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="w-12 h-12"
      />
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default SparkAgent;