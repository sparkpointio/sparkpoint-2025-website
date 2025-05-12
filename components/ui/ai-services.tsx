'use client';

import { bg_ai_services_light } from '@/lib/assets';
import { bird_1 } from '@/lib/assets/ai-services';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const AIServices = () => {
  return (
    <section
      id="ai-services"
      className="background-image-cover"
      style={{
        backgroundImage: `url(${bg_ai_services_light.src})`
      }}
    >
      <div
        style={{ background: "rgba(255,125,50, 0.6); background: linear-gradient(90deg, rgba(255,125,50,0.6) 50%, rgba(255,255,255,0) 100%)" }}
      >
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-[85rem] mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl dark:text-white text-custom-1 my-4 font-[family-name:var(--font-rubik)] text-center">
                AI Services
              </h2>
              <p className="text-neutral-600 dark:text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-poppins)] text-custom-1">
                Deploy AI that&apos;s tailored to your needs
              </p>
            </div>

            <div className="bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-12 border border-neutral-200 dark:border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4 text-custom-1">
                    Skip the Noise. Focus on What Works.
                  </h3>
                  <p className="text-neutral-600 dark:text-white/80 text-lg mb-6">
                    SparkPoint&apos;s AI Deployment Services make it easy to integrate practical, cost-efficient automation into your business without the tech overwhelm.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href="https://services.sparkpoint.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex shrink-0 items-center justify-center gap-2 bg-orange-600 text-white hover:bg-orange-700 dark:bg-white dark:text-orange-600 dark:hover:bg-orange-50 px-6 py-3 rounded-full font-medium hover:cursor-pointer active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none"
                    >
                      View Full Services
                      <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a
                      href="https://services.sparkpoint.io/#cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex shrink-0 items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 rounded-full font-medium hover:cursor-pointer active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none"
                    >
                      <span className="md:hidden">Get AI Deployment Assessment</span>
                      <span className="hidden md:inline">Get Your Complimentary AI Deployment Assessment</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 rounded-full opacity-50 dark:opacity-30 blur-xl"></div>
                    <Image
                      src={bird_1}
                      alt="AI Services SparkBird"
                      layout="fill"
                      objectFit="contain"
                      className='bg-transparent'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServices;