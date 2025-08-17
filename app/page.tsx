import Hero from "@/components/ui/v2/hero";
import About from "@/components/ui/v2/about";
import CookieBotLoader from "@/components/ui/CookieBotLoader";
import Events from "@/components/ui/v2/events";
import SparkAgentAIServices from "@/components/ui/v2/spark-agent-ai-services";
import Blogs from '@/components/ui/v1/blogs';
import { Team } from "@/components/ui/v1/team";
export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start">
      <CookieBotLoader />
      <Hero />
      <About />
      <SparkAgentAIServices />
      <Events />
      <Blogs />
      <Team />
    </main>
  );
}