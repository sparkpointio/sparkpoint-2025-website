import { new_sparkpoint_logo_w_text } from '@/lib/assets'
import Image from 'next/image'

export function About() {
  return (
    <section id="about-us" className="container mx-auto px-6 md:px-16 py-12 md:py-20">
      <div className="grid gap-4 place-content-stretch">
        <h1 className="text-4xl">
          <span className="font-bold">SparkPoint.</span> Reignited. Focused. Powered By AI.
        </h1>
        <div className='flex gap-8 md:flex-row flex-col items-center justify-between'>
          <div className='grid gap-8 md:w-[60%]'>
            <div className="grid text-left gap-3">
              <p className="text-2xl w-full">
                Founded in 2018, SparkPoint Technologies Inc is
                reimagining blockchain for the AI era. We empower
                individuals and businesses to launch AI-driven, blockchain-based solutions
                that unlock new possibilities in the decentralized world.
              </p>
            </div>
            <p className="text-2xl">
              As a grantee Alchemy and Arbitrum, we leverage cutting-edge technology to deliver
              scalable, secure, and transparent solutions. Powered by Arbitrum Orbit, Our Layer 2 blockchain bridges traditional and
              decentralized technologies, driving continuous
              innovation and community-driven growth.
            </p>
          </div>
          <Image src={new_sparkpoint_logo_w_text} alt="SparkPoint Logo" className="w-3/4 h-auto md:w-[25%]" />
        </div>
      </div>
    </section>
  )
}