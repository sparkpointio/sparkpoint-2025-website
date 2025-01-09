'use client';
import React from 'react';
import Image from 'next/image'
import { buttonVariants } from '../variants/button-variants';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { community_driven_logo, decentralized_logo, no_code_integration_logo, transparency_logo } from '@/lib/assets';

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
  ]
  return (
    <section className="bg-white p-10 md:px-12 md:py-20 grid md:grid-cols-2 gap-4 place-content-center">
      <div className="flex flex-col justify-between gap-4">
        <div className="grid">
          <p>The flagship application: (Coming Soon!)</p>
          <h2 className="text-4xl font-bold">SparkAgent: AI Agent Launchpad</h2>
        </div>
        <span className='text-2xl md:max-w-md'>SparkAgent empowers users to launch their own AI agents with no-code tools, decentralized transparency, and community-driven innovation&mdash;creating
          tailored AI solutions for Web3 projects using cutting-edge blockchain technology.
        </span>
        <Link href="#">
          <button className={buttonVariants({ variant: "ghost", size: "2xl", className: 'w-full sm:w-48 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
            Coming Soon!
          </button>
        </Link>
      </div>

      <div className="md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {card_items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  )
};

function Card({ image, title, description }: { image: string | StaticImport, title: string, description: string }) {
  return (
    <div className='flex flex-col items-center gap-4 border-2 border-black rounded-2xl p-4 hover:cursor-pointer'>
      <Image src={image} alt={title} width={50} height={50} />
      <h3 className='text-xl font-bold text-center'>{title}</h3>
      <p className='text-gray-600 text-center'>{description}</p>
    </div>
  )
}

export default SparkAgent;