import CommunitySection from '@/components/ui/community-section'
import Hero from '@/components/ui/hero'
import SparkAgent from '@/components/ui/spark-agent'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SparkAgent />
      <CommunitySection />
    </div>
  )
}

