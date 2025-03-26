import "./globals.css";
import type { Metadata } from "next";
import { Alegreya, Righteous, Solway, Poppins, Rubik } from "next/font/google";
import Header from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Script from "next/script";
import LightDarkToggle from "@/components/layout/light-dark-toggle";

const alegreya_regular = Alegreya({
  variable: '--font-alegreya',
  subsets: ['latin']
})

const righteous = Righteous({
  weight: '400',
  variable: '--font-righteous',
  subsets: ['latin']
});

const solway = Solway({
  weight: '400',
  variable: '--font-solway',
  subsets: ['latin']
});

const rubik = Rubik({
  weight: '400',
  variable: '--font-rubik',
  subsets: ['latin']
});

const poppins = Poppins({
  weight: '400',
  variable: '--font-poppins',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'SparkPoint - The Smart Agents Platform',
  description: 'We connect blockchain and AI to unlock new possibilities and drive exponential growth for businesses and communities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico?v=2" />

        {/* Other favicon sizes */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Socmed metadata */}
        <meta name="description" content="We connect blockchain and AI to unlock new possibilities and drive exponential growth for businesses and communities" />
        <meta property="og:title" content="SparkPoint - The Smart Agents Platform" />
        <meta property="og:description" content="We connect blockchain and AI to unlock new possibilities and drive exponential growth for businesses and communities" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sparkpoint.io" />

        {/* Cookiebot CMP */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="879d6476-b92b-4f45-aca8-b3299186cd06"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CN79RFQG3G"
          data-cookieconsent="ignore"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN79RFQG3G', {
                'anonymize_ip': true
              });
            `,
          }}
        />
      </head>
      <body
        className={`${rubik.variable} ${poppins.variable} ${righteous.variable} ${solway.variable} ${alegreya_regular.variable} antialiased`}
      >
        <Header />
        <LightDarkToggle />
        {children}
        <Footer />
      </body>
    </html>
  );
}
