import { buttonVariants } from "@/components/variants/button-variants";
import Link from "next/link";

const feature_1 = [
  {
    label: "No-code agent blueprints with task chains",
    emoji: "💻"
  },
  {
    label: "Verifiable actions anchored on-chain",
    emoji: "🛡️"
  },
  {
    label: "Extensible integrations for Web2 + Web3",
    emoji: "⛓️"
  }
]

const feature_2 = [
  {
    title: "No-Code, No Hassle",
    description: "Launch your AI agent without writing a single line of code"
  },
  {
    title: "Co-Ownership with Purpose",
    description: "Empower your community to own a piece of the future"
  },
  {
    title: "Seamless Launch",
    description: "From concept to launch, SparkAgent makes every step frictionless"
  },
  {
    title: "Community-Driven",
    description: "SparkAgent is built for the community, by the community"
  }
]

export default function SparkAgent() {
  return (
    <div id="sparkagent" className="grid md:grid-cols-2 gap-6">
      <div className="mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#343060] dark:text-[#e8eaff] mb-2 whitespace-nowrap text-wrap transition-colors duration-300">SparkAgent:<br />AI Agent Launchpad</h2>
        <p className="text-xl md:text-2xl text-[#343060]/80 dark:text-[#e8eaff]/80 transition-colors duration-300 mb-10">
          Launched in Q1 2025, SparkAgent turns AI into a co-builder you can configure and own. Deploy agents that automate workflows, analyze on-chain activity,
          and plug into dApps, no code required.
        </p>

        <div className="flex flex-col">
          {feature_1.map((feature, index) => (
            <div key={index} className="flex items-center cursor-default mb-4 group">
              <span className="text-2xl group-hover:scale-110 delay-100 transition-transform">{feature.emoji}</span>
              <span className="ml-2 text-lg text-[#343060] dark:text-[#e8eaff] transition-colors duration-300">{feature.label}</span>
            </div>
          ))}
        </div>

        <Link
          href="https://sparkpoint.io"
          target="_blank"
          className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full gap-2 sm:w-64 md:w-48 active:drop-shadow-none py-3 border border-black dark:border-white transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] dark:hover:shadow-[0.25rem_0.25rem_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })}>
          <span className="shrink-0">Launch App</span> <span className="inline-block">→</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {feature_2.map((feature, index) => (
          <div key={index} className="md:h-56 w-full md:w-[90%] bg-white dark:bg-gray-800 rounded-2xl border-[1.5px] border-black dark:border-gray-700 shadow-sm flex flex-col justify-start p-6 sm:pt-8 md:pt-12 active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
            <h3 className="text-lg font-semibold text-[#343060] dark:text-[#e8eaff] mb-2 text-left">{feature.title}</h3>
            <p className="text-sm text-[#343060]/80 dark:text-[#e8eaff]/80 text-left">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}