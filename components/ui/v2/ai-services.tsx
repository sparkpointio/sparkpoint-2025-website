import { buttonVariants } from "@/components/variants/button-variants"
import Link from "next/link"

const AI_SERVICES = [
  {
    title: "Agent Design & Automation",
    sub: "Custom AI Agents for ops, analytics, and customer workflows-integrated with your stack."
  },
  {
    title: "On-Chain Identity & Provenance",
    sub: "Verifiable credentials, tokenized assets, and audit trails that build trust."
  },
  {
    title: "Data & Decision Intelligence",
    sub: "Dashboards and models that turn your data into decisions and measurable ROI."
  }
]

export default function AIServices() {
  return (
    <div id="ai-services" className="mb-8 md:mb-0 ">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#343060] dark:text-[#e8eaff] mb-2 whitespace-nowrap text-wrap transition-colors duration-300">AI Services</h2>
      <p className="text-xl md:text-2xl text-[#343060]/80 dark:text-[#e8eaff]/80 transition-colors duration-300 mb-10">
        SparkPoint&apos;s AI Deployment Services make it easy to integrate practical,
        cost-efficient automation into your business without the tech overwhelm.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-8 mb-4">
        {AI_SERVICES.map((feature, index) => (
          <div key={index} className="min-h-[200px] bg-white dark:bg-gray-800 rounded-2xl border-[1.5px] border-black dark:border-gray-700 shadow-lg flex flex-col justify-between p-6 group active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
            <div>
              <h3 className="text-lg font-bold text-[#343060] dark:text-[#e8eaff] mb-4 leading-tight">{feature.title}</h3>
              <p className="text-base text-[#343060]/70 dark:text-[#e8eaff]/70 leading-relaxed">{feature.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="mailto:support@sparkpoint.io?cc=isma@sparkpoint.io;h.javier@sparkpoint.io"
        className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full gap-2 sm:w-64 md:w-48 active:drop-shadow-none py-3 border border-black dark:border-white transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] dark:hover:shadow-[0.25rem_0.25rem_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })}>
        <span className="shrink-0">Let&apos;s talk</span> <span className="inline-block">→</span>
      </Link>
    </div>
  )
}