'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { buttonVariants } from '@/components/variants/button-variants';
import { cn } from '@/lib/utils/style';
import { sparkpoint_logo_full_dark } from '@/lib/assets';

const Header = ({ className }: { className?: string }) => {

  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
    if (isOpen) {
      setIsOpen(false);
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 flex mx-4 items-center justify-between p-4 bg-white border border-black rounded-[1.7rem] gap-1 flex-col md:flex-row md:mx-12 lg:mx-24 xl:mx-auto px-4 md:px-12 py-4 max-w-screen-lg",
          className
        )}
      >

        {/* Mobile Menu Button */}
        <div className="absolute -top-1 md:hidden flex items-center justify-between w-full px-4 py-2">
          <Image
            src={sparkpoint_logo_full_dark}
            alt="SparkPoint Logo"
            className="md:h-8 h-4 w-fit"
          />
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {!isOpen &&
          (
            <div className='hidden md:flex items-center justify-between w-full'>
              <Image
                src={sparkpoint_logo_full_dark}
                alt="SparkPoint Logo"
                className="h-8 w-fit"
              />
              <nav className="flex items-center justify-center gap-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Ecosystem
                </Link>
                <Link target='_blank' href="https://docs.sparkchain.network/" className="text-gray-600 hover:cursor-pointer hover:text-gray-900" title='View Documentation'>
                  Docs
                </Link>
              </nav>
              <Link href="https://testnet-explorer.sparkpoint.network/" target='_blank'>
                <button className={buttonVariants({ variant: "outline", size: "md", className: "bg-white border border-black active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none shrink-0" })}>
                  Testnet Live!
                </button>
              </Link>
            </div>
          )
        }

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full md:hidden grid items-center gap-4 mt-2 px-4"
            >
              <nav className="flex flex-col items-center justify-center gap-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Ecosystem
                </Link>
                <Link href="https://docs.sparkchain.network/" target='_blank' className="text-gray-600 hover:text-gray-900">
                  Docs
                </Link>

              </nav>
              <Link href="https://testnet-explorer.sparkpoint.network/" target='_blank'>
                <button className={buttonVariants({ variant: "outline", size: "md", className: "bg-white border w-full border-black active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none shrink-0" })}>
                  Testnet Live!
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
