import CommunitySection from '@/components/ui/community-section'
import Hero from '@/components/ui/hero'
import SparkAgent from '@/components/ui/spark-agent'
import SparkToken from '@/components/ui/spark-token'
import TechnologyStack from '@/components/ui/technology-stack'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SparkAgent />
      <CommunitySection />
      {/* <SparkAgent />
      <TechnologyStack />
      <CommunitySection />
      <SparkToken /> */}
    </div>
  )
}

