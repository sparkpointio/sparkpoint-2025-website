"use client";

import { About } from '@/components/ui/about'
import Hero from '@/components/ui/hero'
import { Roadmap } from '@/components/ui/roadmap'
import SparkAgent from '@/components/ui/spark-agent'
import { Team } from '@/components/ui/team'
import CookieBotLoader from '@/components/ui/CookieBotLoader'
import Community from "@/components/ui/community";
import Blogs from '@/components/ui/blogs';

export default function Home() {
  return (
    <div className="min-h-screen bg-1 overflow-hidden">
      <CookieBotLoader />
      <Hero />
      <SparkAgent />
      <Roadmap />
      <Blogs />
      <About />
      <Team />
      <Community />
    </div>
  )
}

