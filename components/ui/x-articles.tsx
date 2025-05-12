import { useEffect, useState } from 'react';
import { bg_hero_light, bg_hero_dark } from '@/lib/assets';
import { Tweet } from 'react-tweet';

export default function XArticles() {
  const [tweets, setTweets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("dark") === "true");
  }, []);

  useEffect(() => {
    setTweets([
      '1898677460470018387',
      '1892892729786716370',
      '1888365814652223765',
    ]);
    setLoading(false);
  }, []);

  if (loading) return (
    <section id="articles" className="px-6 py-10 md:px-20 relative">
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-1" style={{ backgroundImage: `url(${bg_hero_light.src})` }}></div>
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-2" style={{ backgroundImage: `url(${bg_hero_dark.src})` }}></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-mask"></div>

      <div data-theme={isDarkMode ? "dark" : "light"} className="container mx-auto relative z-3">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">What&apos;s the Latest?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <section id="articles" className="px-6 py-10 md:px-20 relative">
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-1" style={{ backgroundImage: `url(${bg_hero_light.src})` }}></div>
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full z-0 bg-img-2" style={{ backgroundImage: `url(${bg_hero_dark.src})` }}></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-mask"></div>
      
      <div className="container mx-auto relative z-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl dark:text-white text-custom-1 my-4 mb-8 font-[family-name:var(--font-rubik)] text-center">Latest Articles</h1>
        {tweets.length === 0 ? (
          <div className="bg-card border border-border text-black dark:text-white rounded-lg p-8 text-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-black dark:text-white mb-2">No Articles Found</h3>
            <p className="text-muted-foreground">Check back later for the latest updates from SparkPoint.</p>
          </div>
        ) : (
          <div data-theme={isDarkMode ? "dark" : "light"} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tweets.map((tweetId, i) => (
              <Tweet key={i} id={tweetId} />
            ))}
            {/* Embedding this wont work */}
            {/* <blockquote className="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/6hX0ThI3kH">https://t.co/6hX0ThI3kH</a></p>&mdash; SparkPoint (@sparkpointio) <a href="https://twitter.com/sparkpointio/status/1898677460470018387?ref_src=twsrc%5Etfw">March 9, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script> */}
          </div>
        )}
      </div>
    </section>
  );
}