'use client';
import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '../variants/button-variants';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import {
  community_driven_logo,
  no_code_integration_logo,
  sparkagent_launchpad
} from '@/lib/assets';
import { Waitlist } from '@/components/ui/waitlist-dialog';

const SparkAgent = () => {
  const features = [
    {
      image: no_code_integration_logo,
      title: 'No-Code, No Hassle',
      description: 'Launch your AI agent effortlessly without writing a single line of code'
    },
    {
      image: no_code_integration_logo,
      title: 'Seamless Launch',
      description: 'From concept to launch, SparkAgent makes every step frictionless'
    },
    {
      image: no_code_integration_logo,
      title: 'Co-Ownership with Purpose',
      description: 'Empower your community to own a piece of the future'
    },
    {
      image: community_driven_logo,
      title: 'Community-Driven',
      description: 'SparkAgent is built for the community, by the community'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-neogrotesk-bold)]">SparkAgent: AI Agent Launchpad</h2>
          <p className="text-2xl">
            SparkAgent empowers users to launch their own AI agents with no-code tools,
            decentralized transparency, and community-driven innovation—creating tailored
            AI solutions for Web3 projects using cutting-edge blockchain technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Center Image */}
          <div className="lg:col-span-2 flex justify-center items-center order-1 md:order-2">
            <Image
              src={sparkagent_launchpad}
              alt="SparkAgent Launchpad"
              className="h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Left Features */}
          <div className="space-y-4 flex flex-col items-center order-2 md:order-1">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Right Features */}
          <div className="space-y-4 flex flex-col items-center order-3">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Launch Button */}
        <Waitlist>
          <button
            className={buttonVariants({
              variant: "ghost",
              size: "2xl",
              className: 'sm:w-auto mt-8 mx-auto flex justify-center w-64 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none'
            })}
          >
            Launching Soon!
          </button>
        </Waitlist>
      </div>
    </section >
  );
};

function FeatureCard({
  image,
  title,
  description
}: {
  image: string | StaticImport,
  title: string,
  description: string
}) {
  return (
    <div className="p-6 bg-white rounded-xl border-2 border-black hover:shadow-lg transition-all duration-200 w-64 h-56">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SparkAgent;