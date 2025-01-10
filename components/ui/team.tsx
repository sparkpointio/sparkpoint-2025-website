import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { team_placeholder } from "@/lib/assets";
import Link from 'next/link'

export function Team() {
  const team = [
    {
      image: team_placeholder,
      name: "Ismael Jerusalem",
      role: "CEO",
      socials: [
        { icon: faXTwitter, url: "https://x.com/ismaeljerusalem" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/ismaeljerusalem/" }
      ]
    },
    {
      image: team_placeholder,
      name: "Harvey Javier",
      role: "CTO",
      socials: [
        { icon: faXTwitter, url: "https://x.com/harvzjavier" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/harveyjavier/" }
      ]
    },
    {
      image: team_placeholder,
      name: "Aldrick Bonaobra",
      role: "Lead Blockchain and AI Developer",
      socials: [
        { icon: faXTwitter, url: "https://x.com/AldrickBonaobra" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/aldrickb/" }
      ]
    },
    {
      image: team_placeholder,
      name: "Bernard Historillo",
      role: "Blockchain and AI Developer",
      socials: [
        { icon: faLinkedin, url: "https://www.linkedin.com/in/bernhistorillo/" }
      ]
    },
    {
      image: team_placeholder,
      name: "Yurie Takeuchi",
      role: "Customer Support",
      socials: [
        { icon: faXTwitter, url: "https://x.com/Sparky_SRK" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/yurie-takeuchi" }
      ]
    },
    {
      image: team_placeholder,
      name: "Karan Sharma",
      role: "Partnership and Outreach",
      socials: [
        { icon: faLinkedin, url: "https://www.linkedin.com/in/karan-sharma-41995aa0" }
      ]
    },
    {
      image: team_placeholder,
      name: "Tony JRNY Crypto",
      role: "Marketing Advisor",
      socials: [
        { icon: faXTwitter, url: "https://x.com/JRNYcrypto" }
      ]
    },
    {
      image: team_placeholder,
      name: "Andy Agnas",
      role: "Advisor",
      socials: [
        { icon: faXTwitter, url: "https://x.com/andyagnas" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/andrino-agnas-2473a3158/" }
      ]
    },
    {
      image: team_placeholder,
      name: "Rico Zuñiga",
      role: "AI Advisor",
      socials: [
        { icon: faXTwitter, url: "https://x.com/ricozuniga" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/ricoz/" }
      ]
    }
  ]
  return (
    <section className="px-6 py-10 md:px-20 bg-gradient-to-br from-[#3C8AC8] to-[#D8DDC7]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-left mt-4 mb-8">Meet the team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:max-w-[85%] mx-auto">
          {team.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </div>

    </section>
  )
}

function Card({ image, name, role, socials }: {
  image: string | StaticImageData, name: string, role: string, socials: {
    icon: object,
    url: string
  }[]
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full flex flex-col items-center p-4 active:drop-shadow-none transition-all duration-200 hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
      <Image
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-center text-gray-600">{role}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {socials.map((social, index) => (
          <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={`View ${name}`}>
            <FontAwesomeIcon icon={social.icon} className="text-xl" color="#FF6F00" />
          </Link>
        ))}
      </div>
    </div>
  )
}