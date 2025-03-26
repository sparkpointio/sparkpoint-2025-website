import { bg_hero_light, bg_hero_dark } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  motion
} from "framer-motion";
interface FeedItem {
  title: string;
  link: string;
  content: ContentSnippet;
}

interface ContentSnippet {
  imageSrc: string;
}

// function parseContentSnippet(snippet: Element | null): ContentSnippet {
//   const match = snippet?.innerHTML.match(/<figure><img[^>]+src="([^">]+)"/);
//   const imageSrc = match ? match[1] : '';
//   return { imageSrc };
// }

export default function WhatsLatest() {
  const [items, setItems] = useState<(Omit<FeedItem, 'content'> & {
    image_url: string;
  })[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    // async function fetchFeed() {
    //   setLoading(true);
    //   try {
    //     const response = await fetch('/api/fetch-medium-feed');
    //     const data = await response.json();
    //     const items = Array.from(new DOMParser().parseFromString(data.contents, 'text/xml').querySelectorAll('item')).map(item => {
    //       return {
    //         title: item.querySelector('title')?.textContent || '',
    //         content: parseContentSnippet(item.getElementsByTagName('content:encoded')[0]),
    //         link: item.querySelector('link')?.textContent || '',
    //       } as FeedItem;
    //     });
    //     //setItems(items);
    //   } catch (error) {
    //     console.error('Error fetching the feed:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchFeed();
    setLoading(false);
    // WIP
    setItems([
      {
        title: 'SparkPoint Introduces SparkAgent, a No-Code AI Agent Platform for Web3 Automation',
        link: 'https://medium.com/theecosystem/sparkpoint-introduces-sparkagent-a-no-code-ai-agent-platform-for-web3-automation-8d8a345352d7',
        image_url: 'https://cdn-images-1.medium.com/v2/resize:fit:1024/1*_8pIHACr_SaGL5dmQ2Mqvw.jpeg',
      },
      {
        title: 'SRK Airdrop to OWN & SFUEL Holders Announcement Details',
        link: 'https://medium.com/theecosystem/sparkpoint-introduces-sparkagent-a-no-code-ai-agent-platform-for-web3-automation-8d8a345352d7',
        image_url: 'https://cdn-images-1.medium.com/v2/resize:fit:1024/1*0wFwpeqhBMkK7WnlvZZNwg.jpeg',
      },
      {
        title: 'Introducing the SparkAgent Launchpad Testnet',
        link: 'https://medium.com/theecosystem/introducing-the-sparkagent-launchpad-testnet-ff52c1adda42',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*3QHnTHaCqgeKb2qbyEdo7A.jpeg',
      },
      {
        title: 'How to Bridge SparkPoint (SRK) Tokens from Ethereum to Arbitrum One',
        link: 'https://medium.com/theecosystem/how-to-bridge-sparkpoint-srk-tokens-from-ethereum-to-arbitrum-one-a2b9ff894499',
        image_url: 'https://cdn-images-1.medium.com/v2/resize:fit:1024/1*j1dQTo7ESz8So7mTm9MGTA.jpeg'
      },
      {
        title: 'AMA Recap: What&apos;s Next for SparkPoint?',
        link: 'https://medium.com/theecosystem/ama-recap-whats-next-for-sparkpoint-78c7e9b3753d',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*WdzG9_uOeUadgL8KM9ivbw.jpeg'
      }, {
        title: 'The SparkPoint 2025 Roadmap: Driving AI Innovation and Utility',
        link: 'https://medium.com/theecosystem/the-sparkpoint-2025-roadmap-driving-ai-innovation-and-utility-c44a13fcf17e',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*mwNMLp_HVnulMt5CT-Fq-A.jpeg'
      },
      {
        title: 'SparkPoint Acquires Ownly: Ismael Jerusalem Appointed CEO to Lead a Bold New Era for 2025',
        link: 'https://medium.com/theecosystem/sparkpoint-acquires-ownly-ismael-jerusalem-appointed-ceo-to-lead-a-bold-new-era-for-2025-a94b9f82494b',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*kE4BKkJAAosffZBVuF5tGA.jpeg'
      },
      {
        title: 'Navigating the dApp Development Landscape: A Peek on the Tech Tools for #BUIDLing',
        link: 'https://medium.com/theecosystem/navigating-the-dapp-development-landscape-a-peek-on-the-tech-tools-for-buidling-c29b7f5cb5a8',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*_1_fm4cS6EgvCMtNbEMvGA.png',
      },
      {
        title: 'Game On with SparkTech.Dev’s GameFi Development Services',
        link: 'https://medium.com/theecosystem/game-on-with-sparktech-devs-gamefi-development-services-2e5727031827',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*t2P3SPa4TsEvnECqYTI31A.png'
      },
      {
        title: 'Empowering Digital Future: SparkPoint’s 5-Year Blockchain Journey and Vision',
        link: 'https://medium.com/theecosystem/empowering-digital-future-sparkpoints-5-year-blockchain-journey-and-vision-0e7ca529eb25',
        image_url: 'https://cdn-images-1.medium.com/max/1024/1*agXmwM04b1Jsh64BhCbARQ.png'
      }
    ])
  }, []);

  return (
    <section id="blogs" className="py-10 relative h-full">
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-1" style={{ backgroundImage: `url(${bg_hero_light.src})` }}></div>
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-2 dark:bg-img-2-dark" style={{ backgroundImage: `url(${bg_hero_dark.src})` }}></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-mask dark:bg-mask-dark"></div>
      <div className="container h-auto w-full mx-auto relative px-6 md:px-16 ">
        <div className="grid h-auto md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-48 bg-gray-300 dark:bg-gray-700 mb-4"></div>
            ))
          ) : (
            items.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.image_url.length > 0 ? (<Image src={item.image_url} alt={item.title} width={500} height={400} className="w-full h-48 object-cover rounded-lg mb-4" />) : <p>{item.title}</p>}
                </Link>
              </motion.div>
            ))
          )}
        </div>
        {!loading && visibleItems < items.length && (
          <div className="text-center mt-8">
            <button onClick={() => setVisibleItems(prevVisibleItems => prevVisibleItems + 6)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Load More</button>
          </div>
        )}
      </div>
    </section>
  );
}