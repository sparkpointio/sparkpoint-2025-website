'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { buttonVariants } from '@/components/variants/button-variants';
import { cn } from '@/lib/utils/style';

const Header = (className?: string) => {

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

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
          "fixed top-4 left-0 right-0 z-50 flex mx-44 items-center justify-evenly p-4 bg-[#EBEBEB] rounded-2xl",
          className
        )}
      >
        <div className="flex flex-1 items-center gap-2">
          <Image
            src="https://placehold.co/24x24"
            alt="SparkPoint Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-medium text-lg">Sparkpoint</span>
        </div>
        <nav className="flex flex-1 items-center gap-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Ecosystem
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Docs
          </Link>
        </nav>
        <button className={buttonVariants({ variant: "outline", size: "md", className: "bg-white border border-black active:drop-shadow-none px-8 py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:bg-[#D6F2FE] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none" })}>
          Launch App
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
