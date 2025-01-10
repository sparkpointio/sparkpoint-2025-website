import { About } from '@/components/ui/about'
import Hero from '@/components/ui/hero'
import { Roadmap } from '@/components/ui/roadmap'
import SparkAgent from '@/components/ui/spark-agent'
import { Team } from '@/components/ui/team'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SparkAgent />
      <Roadmap />
      <About />
      <Team />
    </div>
  )
}

