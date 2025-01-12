"use client"

import { new_sparkpoint_logo_full_light } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook, faInstagram, faYoutube, faMedium, faReddit, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// TODO: Finish footer
export function Footer() {

  const footer_links = [
    {
      label: "HOME",
      url: "#",
      col: 1,
      target: "_self"
    },
    {
      label: "ECOSYSTEM",
      url: "https://medium.com/theecosystem",
      col: 1,
      target: "_self"
    },
    {
      label: "CONTACT",
      url: "mailto:support@sparkpoint.io",
      col: 1,
      target: "_self"
    },
    {
      label: "SRK TOKEN",
      url: "https://app.uniswap.org/explore/tokens/ethereum/0x0488401c3f535193fa8df029d9ffe615a06e74e6",
      col: 1,
      target: "_blank"
    },
    {
      label: "TEAM",
      url: "#team",
      col: 2,
      target: "_self"
    },
    {
      label: "ROADMAP",
      url: "#roadmap",
      col: 2,
      target: "_self"
    },
    {
      label: "ABOUT US",
      url: "#about-us",
      col: 2,
      target: "_self"
    },
  ];

  const socials = [
    {
      icon: faGithub,
      href: "https://github.com/sparkpointio"
    },
    {
      icon: faTwitter,
      href: "https://x.com/sparkpointio"
    },
    {
      icon: faFacebook,
      href: "https://facebook.com/sparkpointio"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/sparkpointio"
    },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/@sparkpointio"
    },
    {
      icon: faMedium,
      href: "https://medium.com/theecosystem"
    },
    {
      icon: faReddit,
      href: "https://www.reddit.com/user/sparkpointio/"
    },
    {
      icon: faTelegram,
      href: "https://t.me/SparkpointOfficial"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/company/sparkpointio"
    }
  ]
  return (
    <footer className="bg-[#20282A] text-white md:px-44 p-10 py-16 flex justify-between items-start gap-8 mx-auto lg:flex-row flex-col">
      <div className="grid gap-4">
        <Link className="flex items-center gap-2" href="#">
          <Image
            src={new_sparkpoint_logo_full_light}
            alt="SparkPoint Logo"
            className="h-8 w-fit"
          />
        </Link>
        <div className="flex gap-4 items-center justify-start flex-wrap">
          {socials.map((social, index) => {
            return (
              <Link key={index} href={social.href} target='_blank'>
                <FontAwesomeIcon icon={social.icon} size='xl' color='#FF6F00' />
              </Link>
            )
          })}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} SparkPoint Technologies Inc. All rights reserved.
        </p>
        <div className="flex gap-3 items-center justify-start mt-2">
          <Link href="#" className="text-sm hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400">
            FAQ
          </Link>
          <Link href="https://drive.google.com/file/d/1BizTH7JZgiYQaJbLyAGTnS83Do3yLvfT/view?usp=sharing" className="text-sm hover:text-gray-400" target="_blank">
            CertiK Audit
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map(col => (
          <div key={col} className="flex flex-col gap-2">
            {footer_links.filter(link => link.col === col).map(link => (
              <Link href={link.url} key={link.label} className="text-sm hover:text-gray-400" target={link.target}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}