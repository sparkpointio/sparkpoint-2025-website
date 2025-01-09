"use client"

import { discord_logo, fb_logo, sparkpoint_logo, telegram_logo, x_logo } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#20282A] text-white md:px-44 p-10 py-16 flex justify-between items-start gap-8 mx-auto lg:flex-row flex-col">
      <div className="grid gap-2">
        <Link className="flex items-center gap-2" href="#">
          <Image
            src={sparkpoint_logo}
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

      <div>
        <h4 className="font-medium">About Us</h4>
        <div className="mt-4 space-y-2">
          <Link href="#" className="block text-sm hover:text-gray-900">
            Team
          </Link>
          <Link href="#" className="block text-sm hover:text-gray-900">
            SPARK Token
          </Link>
          <Link href="#" className="block text-sm hover:text-gray-900">
            Support
          </Link>
        </div>
      </div>
      <div>
        <h4 className="font-medium">Legal</h4>
        <div className="mt-4 space-y-2">
          <Link href="#" className="block text-sm hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="#" className="block text-sm hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;