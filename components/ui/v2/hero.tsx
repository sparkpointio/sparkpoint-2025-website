"use client";

import Image from "next/image";
import centerNetwork from '@/lib/assets/Center network.png';
import bgHeroDark from '@/lib/assets/bg-hero-2-dark.webp';
import { FaRocket } from "react-icons/fa";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { buttonVariants } from "@/components/variants/button-variants";
import Link from "next/link";
import { useDarkMode } from "@/lib/utils/hooks/useDarkMode";
import AnimatedMesh from "@/components/ui/v2/animated-mesh";
import { v2_light_bg } from "@/lib/assets";

export default function Hero() {
  // Use our custom hook to manage dark mode
  const { isDarkMode } = useDarkMode();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-start text-left px-[1.5rem] md:px-16 lg:px-28 py-28 overflow-hidden">
      {/* Background image with light/dark theme support */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={isDarkMode ? bgHeroDark : v2_light_bg}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover", transform: "rotate(180deg)" }}
          priority
          quality={90}
        />
      </div>

      {/* Center Network graphic overlay */}
      <div className="absolute left-[60%] md:left-[45%] top-[55%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[50vw] opacity-90 -z-10 pointer-events-none">
        <Image
          src={centerNetwork}
          alt="Center Network"
          width={900}
          height={900}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      {/* Animated Mesh graphic overlay - bottom right */}
      <AnimatedMesh isDarkMode={isDarkMode} />

      {/* Content - Aligned left to match mockup */}
      <div className="max-w-2xl">
        <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-[#343060] dark:text-[#e8eaff] mb-6 leading-[1.1]">
          Prompt.<br />Build. Own.
        </h1>
        <p className="text-lg md:text-xl text-[#404662] dark:text-[#f0f2ff]  mb-10">
          Your next big move starts here. SparkPoint AI is almost ready. <br />We&apos;re preparing a leap forward for builders and businesses with ownable, on-chain AI experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full gap-2 sm:w-48 active:drop-shadow-none py-3 border border-black dark:border-white transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] dark:hover:shadow-[0.25rem_0.25rem_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })} href="https://app.uniswap.org/explore/tokens/ethereum/0x0488401c3f535193fa8df029d9ffe615a06e74e6" target='_blank'>
            <FaRocket className="w-4 h-4" />
            SRK Token
          </Link>
          <Link className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full gap-2 sm:w-52 active:drop-shadow-none py-3 border border-black dark:border-white transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] dark:hover:shadow-[0.25rem_0.25rem_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })} href="https://t.me/SparkPointOfficial" target='_blank'>
            <PiPaperPlaneTilt className="w-5 h-5" />
            <span className="shrink-0">Join Community</span>
          </Link>
        </div>
        <p className="text-base text-gray-500 dark:text-gray-300 italic">Psst... something big is brewing with AI at SparkPoint. Be first to know.</p>
      </div>
    </section>
  );
}