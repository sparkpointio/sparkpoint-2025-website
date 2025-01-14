import "./globals.css";
import type { Metadata } from "next";
import { Alegreya, Righteous, Solway } from "next/font/google";
import localFont from 'next/font/local';
import Header from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Script from "next/script";

const neogrotesk_regular = localFont({ src: '../lib/assets/fonts/neogrotesk-regular.otf', variable: '--font-neogrotesk-regular' });
const neogrotesk_bold = localFont({ src: '../lib/assets/fonts/neogrotesk-bold.otf', variable: '--font-neogrotesk-bold' });
const neogrotesk_light = localFont({ src: '../lib/assets/fonts/neogrotesk-light.otf', variable: '--font-neogrotesk-light' });

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
        
        <meta property="og:image" content="/og-image.png" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-CN79RFQG3G`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN79RFQG3G');
            `,
          }}
        />
      </head>
      <body
        className={`${righteous.variable} ${solway.className}  ${alegreya_regular.variable} ${neogrotesk_regular.variable} ${neogrotesk_bold.variable} ${neogrotesk_light.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
