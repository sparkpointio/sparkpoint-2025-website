import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {hero_gradient} from "@/lib/assets";

export function Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      goals: [
        {
          action: "Launch new SparkPoint website",
          isCompleted: true,
        }, {
          action: "Bridge SRK to Arbitrum",
          isCompleted: false,
        }, {
          action: "Announce strategic partnerships",
          isCompleted: false,
        }, {
          action: "Launch SparkAgent AI Launchpad",
          isCompleted: false,
        }, {
          action: "Introduce SparkPoint's first SparkAgent",
          isCompleted: false,
        }
      ]
    },
    {
      quarter: 'Q2',
      goals: [
        {
          action: "Launch Trading AI Agent",
          isCompleted: false,
        }, {
          action: "Upgrade SparkAgent AI Launchpad new features",
          isCompleted: false,
        }, {
          action: "Deploy SparkPoint Blockchain mainnet",
          isCompleted: false,
        }, {
          action: "Expand SparkPoint's AI ecosystem",
          isCompleted: false,
        }
      ]
    },
    {
      quarter: "Q3",
      goals: [
        {
          action: "Launch AI Agents Marketplace",
          isCompleted: false,
        }, {
          action: "Introduce Fully Autonomous SparkAgent",
          isCompleted: false,
        }, {
          action: "Integrate SRK as native token on SparkPoint Blockchain",
          isCompleted: false,
        }, {
          action: "Enable tradable AI agents with on-chain ownership",
          isCompleted: false,
        }
      ]
    },
    {
      quarter: "Q4",
      goals: [
        {
          action: "Introduce Decentralized Agent-Based Blockchain Governance",
          isCompleted: false,
        }, {
          action: "Launch AI-powered DAO for SparkPoint",
          isCompleted: false,
        }, {
          action: "SparkPoint Blockchain cross-chain integrations",
          isCompleted: false,
        }, {
          action: "Next-gen SparkAgents for business growth automation",
          isCompleted: false,
        }
      ]
    }
  ]
  return (
    <section id="roadmap" className="px-6 py-10 md:px-20 bg-gradient-to-br from-[#3C8AC8] to-[#D8DDC7]" style={{ backgroundImage: `url(${hero_gradient.src})` }}>
      <div className="container mx-auto">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl my-4 mb-8 font-[family-name:var(--font-rubik)]">ROADMAP {new Date().getFullYear()}</h1>
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
  goals: { action: string, isCompleted: boolean }[]
}) {
  return (
    <div className="flex flex-col bg-white p-6 gap-4 rounded-3xl hover:cursor-pointer h-full active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-rubik)]">{title}</h1>
      <ul className="list-disc pl-3 space-y-8">
        {goals.map((goal, index) => (
          <li className="text-base relative flex items-start custom-bullet" key={index}>
            {goal.isCompleted && (
                <FontAwesomeIcon className="roadmap-task-is-completed" icon={faCheckCircle}  />
            )}
            <span className="bullet"></span>
            <span className="ml-4">{goal.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
