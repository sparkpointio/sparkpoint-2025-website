export function Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      goals: [
        "Launch new SparkPoint website",
        "Announce strategic partnerships",
        "Bridge SRK to Arbitrum",
        "Launch SparkAgent AI Launchpad",
        "Introduce SparkPoint's first SparkAgent"
      ]
    },
    {
      quarter: 'Q2',
      goals: [
        "Launch Trading AI Agent",
        "Upgrade SparkAgent AI Launchpad new features",
        "Deploy SparkPoint Blockchain mainnet",
        "Expand SparkPoint's AI ecosystem"
      ]
    },
    {
      quarter: "Q3",
      goals: [
        "Launch AI Agents Marketplace",
        "Introduce Fully Autonomous SparkAgent",
        "Integrate SRK as native token on SparkPoint Blockchain",
        "Enable tradable AI agents with on-chain ownership"
      ]
    },
    {
      quarter: "Q4",
      goals: [
        "Introduce Decentralized Agent-Based Blockchain Governance",
        "Launch AI-powered DAO for SparkPoint",
        "SparkPoint Blockchain cross-chain integrations",
        "Next-gen SparkAgents for business growth automation"
      ]
    }
  ]
  return (
    <section id="roadmap" className="px-6 py-10 md:px-20 bg-gradient-to-br from-[#3C8AC8] to-[#D8DDC7]">
      <div className="container mx-auto">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl my-4 mb-8 font-[family-name:var(--font-rubik-regular)]">ROADMAP {new Date().getFullYear()}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {quarters.map((quarter) => (
            <Card key={quarter.quarter} title={quarter.quarter} goals={quarter.goals || []} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({
  title,
  goals
}: {
  title: string,
  goals: string[]
}) {
  return (
    <div className="flex flex-col bg-white p-6 gap-4 rounded-3xl hover:cursor-pointer h-full active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-neogrotesk-bold)]">{title}</h1>
      <ul className="list-disc pl-4 space-y-8">
        {goals.map((goal, index) => (
          <li className="text-base relative flex items-start custom-bullet" key={index}>
            <span className="bullet"></span>
            <span className="ml-2">{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
