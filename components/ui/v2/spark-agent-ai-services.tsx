"use client";

import SparkAgent from "@/components/ui/v2/sparkagent";
import { useDarkMode } from "@/lib/utils/hooks/useDarkMode";
import Image from "next/image";
import bgHeroDark from '@/lib/assets/bg-hero-2-dark.webp';
import AnimatedMesh from "@/components/ui/v2/animated-mesh";
import AIServices from "./ai-services";
import { v2_light_bg } from "@/lib/assets";

export default function SparkAgentAIServices() {

  const { isDarkMode } = useDarkMode()

  return (
    <section className="relative w-full py-10 md:py-16 px-4 md:px-16 lg:px-28 flex gap-8 md:gap-14 flex-col transition-colors duration-300 min-h-screen">
      <div className="absolute inset-0 -z-20">
        <Image
          src={isDarkMode ? bgHeroDark : v2_light_bg}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={90}
        />
      </div>

      <AnimatedMesh
        isDarkMode={isDarkMode}
        className="absolute left-0 top-56 w-[90%] h-[90%] -z-10 pointer-events-none transition-opacity duration-300 opacity-70 md:opacity-85"
      />
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 mb-16 w-full">
        <SparkAgent />
        <AIServices />
      </div>
    </section>
  )

}