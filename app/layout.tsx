import "./globals.css";
import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import localFont from 'next/font/local';
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const neogrotesk_regular = localFont({ src: '../lib/assets/fonts/neogrotesk-regular.otf' });
const neogrotesk_bold = localFont({ src: '../lib/assets/fonts/neogrotesk-bold.otf' });
const neogrotesk_light = localFont({ src: '../lib/assets/fonts/neogrotesk-light.otf' });

export const alegreya_regular = Alegreya({
  variable: '--font-alegreya',
})


export const metadata: Metadata = {
  title: 'Sparkpoint',
  description: 'AI at the Core, Blockchain at Its Best',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neogrotesk_regular.className} ${neogrotesk_bold.className} ${neogrotesk_light.className}  antialiased`}
      >
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
