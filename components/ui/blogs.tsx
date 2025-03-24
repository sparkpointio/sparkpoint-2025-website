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

function parseContentSnippet(snippet: Element | null): ContentSnippet {
  const match = snippet?.innerHTML.match(/<figure><img[^>]+src="([^">]+)"/);
  const imageSrc = match ? match[1] : '';
  return { imageSrc };
}

export default function WhatsLatest() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    async function fetchFeed() {
      setLoading(true);
      try {
        const response = await fetch('/api/fetch-medium-feed');
        const data = await response.json();
        const items = Array.from(new DOMParser().parseFromString(data.contents, 'text/xml').querySelectorAll('item')).map(item => {
          return {
            title: item.querySelector('title')?.textContent || '',
            content: parseContentSnippet(item.getElementsByTagName('content:encoded')[0]),
            link: item.querySelector('link')?.textContent || '',
          } as FeedItem;
        });
        setItems(items);
      } catch (error) {
        console.error('Error fetching the feed:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
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
                  {item.content.imageSrc.length > 0 ? (<Image src={item.content.imageSrc} alt={item.title} width={500} height={400} className="w-full h-48 object-cover rounded-lg mb-4" />) : <p>{item.title}</p>}
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