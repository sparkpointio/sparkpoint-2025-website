export function Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      goals: [
        "New website launch",
        "Strategic Partnership Announcement",
        "Bridge SRK to Arbitrum",
        "Launch SparkAgent AI Launchpad (No-Code AI Agent Creation)",
        "Launch SparkPoint\'s first SparkAgent",
        "SparkPoint Blockchain testnet launch"
      ]
    },
    {
      quarter: 'Q2',
      goals: [
        "Launch Trading AI Agent",
        "SparkAgent AI Launchpad Improvements",
        "SparkPoint Blockchain mainnet launch"
      ]
    },
    { quarter: "Q3" },
    { quarter: "Q4" },
  ]
  return (
    <section className="p-10 bg-gradient-to-br from-[#3C8AC8] to-[#D8DDC7]">
      <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold my-4 mb-8">ROADMAP {new Date().getFullYear()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {quarters.map((quarter) => (
          <Card key={quarter.quarter} title={quarter.quarter} goals={quarter.goals || []} />
        ))}
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
    <div className="flex flex-col bg-white p-6 gap-4 rounded-3xl hover:cursor-pointer h-full">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-left">{title}</h1>
      <ul className="list-disc pl-4">
        {goals.map((goal, index) => (
          <li className="text-md" key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}
