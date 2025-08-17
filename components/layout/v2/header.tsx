'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from '@/lib/utils/style';
import { new_sparkpoint_logo_full_dark, new_sparkpoint_logo_full_light } from '@/lib/assets/index';

const nav_links = [
  { name: "SparkAgent", href: "/#sparkagent" },
  { name: "AI Services", href: "/#ai-services" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Blogs", href: "/#blogs" },
  { name: "Team", href: "/#team" }
];

const social_links = [
  { icon: FaGithub, href: "https://github.com/sparkpointio", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/sparkpointio", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/sparkpointio", label: "X (Twitter)" },
  { icon: FaInstagram, href: "https://www.instagram.com/sparkpointio", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com/sparkpointio", label: "Facebook" },
  { icon: FaYoutube, href: "https://www.youtube.com/@sparkpointio", label: "YouTube" }
];

export default function Header({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      const scrollPosition = scrollYProgress.get();

      // Check if we're at the top (hero section)
      setIsAtTop(scrollPosition < 0.1);

      if (scrollPosition < 0.05) {
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
        id="navbar-v2"
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
          "fixed top-4 z-50 flex items-center justify-between py-4 transition-all duration-300",
          isAtTop
            ? "left-0 right-0 px-[1.5rem] md:px-16 lg:px-28 bg-transparent border-transparent shadow-none"
            : "left-[1.5rem] right-[1.5rem] md:left-16 md:right-16 lg:left-28 lg:right-28 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-lg",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={new_sparkpoint_logo_full_light}
            alt="SparkPoint Logo"
            className="h-8 w-auto hidden dark:block"
            priority
          />
          <Image
            src={new_sparkpoint_logo_full_dark}
            alt="SparkPoint Logo"
            className="h-8 w-auto dark:hidden block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {nav_links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {social_links.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5" />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "absolute top-full left-0 right-0 mt-2 p-6 backdrop-blur-md border rounded-2xl shadow-lg lg:hidden",
                isAtTop
                  ? "mx-4 bg-white/95 dark:bg-gray-900/95 border-gray-200/40 dark:border-gray-700/40"
                  : "bg-white/95 dark:bg-gray-900/95 border-gray-200/20 dark:border-gray-700/20"
              )}
            >
              <nav className="flex flex-col space-y-4 mb-6">
                {nav_links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                {social_links.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
