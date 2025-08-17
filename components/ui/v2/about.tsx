import Image from "next/image";
import { sparkpoint_logo_spinning } from "@/lib/assets/index";

export default function About() {
  return (
    <section id="about" className="w-full bg-white dark:bg-gray-900 py-10 md:py-16 px-[1.5rem] md:px-16 lg:px-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-16 lg:gap-32 items-center">
        {/* Title Section - Always first on mobile, left on desktop */}
        <div className="flex-shrink-0 w-full md:w-auto md:max-w-md order-1">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#343060] dark:text-[#e8eaff] mb-2 whitespace-nowrap text-wrap transition-colors duration-300">About SparkPoint</h2>
            <p className="text-xl md:text-2xl text-[#343060]/80 dark:text-[#e8eaff]/80 transition-colors duration-300">Reignited. Focused. Powered By AI.</p>
          </div>
          {/* Logo - Only visible on desktop in this position */}
          <div className="hidden md:flex justify-center mt-8">
            <Image
              src={sparkpoint_logo_spinning}
              alt="SparkPoint Logo"
              width={300}
              height={300}
              unoptimized
              className="w-48 md:w-56 lg:w-64 h-auto"
            />
          </div>
        </div>

        {/* Content Section - Second on mobile, right on desktop */}
        <div className="flex flex-col order-2">
          <div className="space-y-6">
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Since 2018, SparkPoint has been building at the intersection of community and technology, bootstrapping adoption across Southeast Asia and beyond. From launching the SRK token to shipping real products <span className="italic">(web3 games, DeFi tools, education platform, NFT marketplace)</span> and running developer and community programs, we&apos;ve consistently delivered value through market cycles.
            </p>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Today, we&apos;re extending &apos;that mission with AI by creating ownable, verifiable intelligence on-chain. The next chapter starts now.
            </p>
          </div>
        </div>

        {/* Logo Section - Last on mobile, hidden on desktop */}
        <div className="flex md:hidden justify-center order-3 w-full">
          <Image
            src={sparkpoint_logo_spinning}
            alt="SparkPoint Logo"
            width={300}
            height={300}
            unoptimized
            className="w-48 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
