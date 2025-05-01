import { bg_hero_light, bg_hero_dark } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

interface CleanedArticle {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

export default function WhatsLatest() {
  const [items, setItems] = useState<CleanedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6);

  const RSS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftheecosystem';

  useEffect(() => {
    setLoading(false);

    const fetchMediumArticles = async () => {
      try {
        const response = await axios.get(RSS_API_URL);
        const rawItems = response.data.items;

        const cleaned = rawItems.map((item: any): CleanedArticle => {
          const thumbMatch = item.description.match(/<img[^>]+src="([^">]+)"/);

          // Strip all HTML tags from the description
          const textOnlyDescription = item.description.replace(/<[^>]+>/g, '');

          return {
            title: item.title,
            author: item.author,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            }),
            link: item.link,
            thumbnail: thumbMatch ? thumbMatch[1] : '',
            description: textOnlyDescription.trim()
          };
        });

        setItems(cleaned);
      } catch (error) {
        console.error('Failed to fetch Medium articles:', error);
      }
    };

    fetchMediumArticles();
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
                  <Image src={item.thumbnail} alt={item.title} width={500} height={400} className="w-full rounded-lg mb-4" />

                  <p className="text-[1.1em] font-[700] mb-2" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{item.title}</p>

                  <p className="text-[#222222] mb-3" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{item.description}</p>

                  <p className="text-[#222222] text-[0.8em] mb-0">{item.author}</p>
                  <p className="text-[#222222] text-[0.8em] mb-0">{item.pubDate}</p>
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