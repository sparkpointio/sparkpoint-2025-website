"use client";

import { bg_hero_light, bg_hero_dark } from '@/lib/assets';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Image from "next/image";
import { useDarkMode } from "@/lib/utils/hooks/useDarkMode";
import {
  motion
} from "framer-motion";

// function parseContentSnippet(snippet: Element | null): ContentSnippet {
//   const match = snippet?.innerHTML.match(/<figure><img[^>]+src="([^">]+)"/);
//   const imageSrc = match ? match[1] : '';
//   return { imageSrc };
// }

interface CleanedArticle {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

interface MediumRawItem {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  description: string;
}

export default function WhatsLatest() {
  const [items, setItems] = useState<CleanedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6);

  // Use our custom hook to manage dark mode
  const { isDarkMode } = useDarkMode();

  const RSS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftheecosystem';

  const xArticles = useMemo<CleanedArticle[]>(() => [
    {
      title: "February in Focus: SparkPoint Accelerates Growth with Arbitrum Launch and Strategic Milestones",
      author: "SparkPoint",
      pubDate: new Date("2025-03-09").toISOString(),
      link: "https://x.com/sparkpointio/status/1898677460470018387",
      thumbnail: "https://pbs.twimg.com/media/GllysdmasAEwddE?format=jpg&name=900x900",
      description: "February wasn't just another month for SparkPoint—it was a leap forward. From SparkAgent mainnet launch on Arbitrum to rallying a growing community, here's how SRK accelerated its vision of a smarter, more accessible DeFi + Ai (DeFAi) future:"
    },
    {
      title: "AI Agents Are Reshaping Web3 and You Don't Need to Be a Hardcore Developer to Use Them",
      author: "SparkPoint",
      pubDate: new Date("2025-02-21").toISOString(),
      link: "https://x.com/sparkpointio/status/1892892729786716370",
      thumbnail: "https://pbs.twimg.com/media/GkTlzhXWoAAymfU?format=jpg&name=900x900",
      description: "Picture this: AI automation supercharging your Web3 project—exploding your trading profits, streamlining your smart contracts, and skyrocketing your community growth. All that without you writing a single line of code."
    },
    {
      title: "Kicking Off 2025 Strong: SRK's Breakout January and the Road Ahead",
      author: "SparkPoint",
      pubDate: new Date("2025-02-09").toISOString(),
      link: "https://x.com/sparkpointio/status/1888365814652223765",
      thumbnail: "https://pbs.twimg.com/media/GjTOtTCXsAA8rm-?format=jpg&name=900x900",
      description: "Let's look back at what our team and community have accomplished in January—a month of major milestones, growth, and momentum as we position ourselves as a serious contender in AI Agents and blockchain innovation."
    }
  ], []);

  useEffect(() => {
    setLoading(false);

    const fetchMediumArticles = async () => {
      try {
        const response = await axios.get(RSS_API_URL);
        const rawItems = response.data.items;

        const cleaned = rawItems.map((item: MediumRawItem): CleanedArticle => {
          const thumbMatch = item.description.match(/<img[^>]+src="([^">]+)"/);

          // Strip all HTML tags from the description
          const textOnlyDescription = item.description.replace(/<[^>]+>/g, '');

          return {
            title: item.title,
            author: item.author,
            pubDate: new Date(item.pubDate).toISOString(),
            link: item.link,
            thumbnail: thumbMatch ? thumbMatch[1] : '',
            description: textOnlyDescription.trim()
          };
        });

        const allArticles = [...xArticles, ...cleaned].sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

        setItems(allArticles);
      } catch (error) {
        console.error('Failed to fetch Medium articles:', error);
      }
    };

    fetchMediumArticles();
  }, [xArticles]);

  return (
    <section id="blogs" className="py-10 relative h-full w-full">
      {/* Background image with light/dark theme support */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={isDarkMode ? bg_hero_dark : bg_hero_light}
          alt="Blogs Background"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
        />
      </div>

      <p className="text-2xl md:text-3xl lg:text-4xl dark:text-white text-custom-1 my-4 mb-12 font-[family-name:var(--font-rubik)] text-center relative z-10 px-6 md:px-16">Latest Articles</p>

      <div className="container h-auto w-full mx-auto relative px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-48 bg-gray-300 dark:bg-gray-700 mb-4 rounded-lg"></div>
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
                  <div className="w-[100%] pt-[52.6%] bg-cover bg-no-repeat bg-center rounded-lg mb-4"
                    style={{ backgroundImage: "url('" + item.thumbnail + "')" }}></div>

                  <p className="dark:text-white text-[1.1em] font-[700] mb-2" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{item.title}</p>

                  <p className="text-[#222222] dark:text-[#cccccc] mb-3" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{item.description}</p>

                  <p className="text-[#222222] dark:text-[#cccccc] text-[0.8em] mb-0">{item.author}</p>
                  <p className="text-[#222222] dark:text-[#cccccc] text-[0.8em] mb-0">
                    {new Date(item.pubDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </Link>
              </motion.div>
            ))
          )}
        </div>
        {!loading && visibleItems < items.length && (
          <div className="text-center mt-8">
            <button onClick={() => setVisibleItems(prevVisibleItems => prevVisibleItems + 6)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}