"use client"

import { discord_logo, fb_logo, sparkpoint_logo_full_light, telegram_logo, x_logo } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// TODO: Finish footer
export function Footer() {

  const footer_links = [
    {
      label: "HOME",
      url: "#",
      col: 1
    },
    {
      label: "ECOSYSTEM",
      url: "#",
      col: 1
    },
    {
      label: "PRODUCTS",
      url: "#",
      col: 1
    },
    {
      label: "COMMUNITY",
      url: "#",
      col: 1
    },
    {
      label: "BLOG",
      url: "#",
      col: 1
    },
    {
      label: "NEWS",
      url: "#",
      col: 1
    },
    {
      label: "CONTACT",
      url: "#",
      col: 1
    },
    {
      label: "SRK TOKEN",
      url: "#",
      col: 2
    },
    {
      label: "SPARKPOINT WALLET",
      url: "#",
      col: 2
    },
    {
      label: "TEAM",
      url: "#",
      col: 3
    },
    {
      label: "ROADMAP",
      url: "#",
      col: 3
    },
    {
      label: "ABOUT US",
      url: "#",
      col: 3
    },
  ]
  return (
    <footer className="bg-[#20282A] text-white md:px-44 p-10 py-16 flex justify-between items-start gap-8 mx-auto lg:flex-row flex-col">
      <div className="grid gap-2">
        <Link className="flex items-center gap-2" href="#">
          <Image
            src={sparkpoint_logo_full_light}
            alt="SparkPoint Logo"
            className="h-8 w-fit"
          />
        </Link>
        <div className="flex gap-4 items-center justify-start">
          <Link href="https://facebook.com/sparkpointio" target='_blank'>
            <Image
              src={fb_logo}
              alt="Facebook Logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://x.com/sparkpointio" target='_blank'>
            <Image
              src={x_logo}
              alt="X(twitter) Logo"
              width={20}
              height={20}

            />
          </Link>
          <Link href="https://discord.gg/VPDh6Hq8JQ" target='_blank'>
            <Image
              src={discord_logo}
              alt="Discord Logo"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://t.me/SparkpointOfficial" target='_blank'>
            <Image
              src={telegram_logo}
              alt="Telegram Logo"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} SparkPoint Technologies Inc. All rights reserved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map(col => (
          <div key={col} className="flex flex-col gap-2">
            {footer_links.filter(link => link.col === col).map(link => (
              <Link href={link.url} key={link.label} className="text-sm hover:text-gray-400">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}